#!/usr/bin/env python3
"""
Carte du secteur servi : toutes les communes à 40 km d'Angers ou moins, en vert, sans aucune
commune grise dans le cercle (règle Rémy #R60, 08/11/2026, modèle Sniper / Beauvais), adaptée du
script de mur-soutenement-haute-savoie.fr (sans lac ni pays voisin ici).

Usage : python3 scripts/carte-secteur.py   (écrit components/sections/carte-secteur-data.ts
        et public/carte/secteur-*.svg)
Sources :
  - communes : geo.api.gouv.fr, contours IGN Admin Express, départements 49, 53, 72 et 44.
Règles :
  - servie = centre de la commune à 40 km ou moins de l'hôtel de ville d'Angers, plus les
    communes qui ont leur page (content/zones), plus tout trou entouré de communes servies ;
  - Angers (l'accueil) est le centre : il n'a pas de page de zone, son nom est écrit en grand ;
  - noms : en gras les communes qui ont leur page, puis les autres par population décroissante,
    tant qu'il reste de la place sans chevauchement.
Dépendances : shapely, Pillow (largeur des noms mesurée avec Arial, marge sûre).
"""
import glob, json, math, random, urllib.request
from pathlib import Path
from PIL import ImageFont
from shapely.geometry import Point, Polygon, shape
from shapely.ops import transform, unary_union
from shapely.prepared import prep

RACINE = Path(__file__).resolve().parent.parent
CENTRE = (-0.5536, 47.4710)  # hôtel de ville d'Angers
NOM_CENTRE = "Angers"
RAYON_KM = 40
CADRE_KM = 46
DEPARTEMENTS = ["49", "53", "72", "44"]
POP_MIN = 1500

K = math.cos(math.radians(CENTRE[1]))
KM_LON, KM_LAT = 111.32 * K, 110.57


def km(lon, lat):
    return ((lon - CENTRE[0]) * KM_LON, (CENTRE[1] - lat) * KM_LAT)


def dist(c):
    return math.hypot(*km(*c["centre"]["coordinates"]))


def charger():
    communes = []
    for d in DEPARTEMENTS:
        url = f"https://geo.api.gouv.fr/departements/{d}/communes?fields=nom,code,centre,contour,population&format=json&geometry=contour"
        with urllib.request.urlopen(url, timeout=90) as r:
            communes += [c for c in json.load(r) if c.get("contour") and c.get("centre")]
    return communes


def anneaux_geo(g):
    return g["coordinates"] if g["type"] == "Polygon" else [r for p in g["coordinates"] for r in p]


def touche_la_carte(c):
    return any(Polygon([km(x, y) for x, y in r]).buffer(0).distance(Point(0, 0)) <= CADRE_KM for r in anneaux_geo(c["contour"]))


communes = [c for c in charger() if dist(c) <= CADRE_KM + 10]
zones = {}
for f in sorted(glob.glob(str(RACINE / "content/zones/*.json"))):
    z = json.load(open(f))
    zones[z["name"].lower()] = z["slug"]
page = {}
for c in communes:
    if c["code"].startswith("49") and c["nom"].lower() in zones:
        page[c["code"]] = zones[c["nom"].lower()]
manquantes = set(zones.values()) - set(page.values())
assert not manquantes, f"pages sans commune : {manquantes}"

code_centre = next(c["code"] for c in communes if c["nom"] == NOM_CENTRE and c["code"].startswith("49"))
servie = {c["code"]: dist(c) <= RAYON_KM or c["code"] in page or c["code"] == code_centre for c in communes}
geom = {c["code"]: shape(c["contour"]).buffer(0) for c in communes}
for c in communes:
    if not servie[c["code"]] and dist(c) <= RAYON_KM + 4:
        g = geom[c["code"]]
        voisins = [o for o in communes if o["code"] != c["code"] and g.buffer(1e-4).intersects(geom[o["code"]])]
        if voisins and all(servie[o["code"]] for o in voisins):
            servie[c["code"]] = True
            print("trou comblé :", c["nom"])
union = unary_union([geom[k] for k, v in servie.items() if v])
trous = sum(len(p.interiors) for p in getattr(union, "geoms", [union]))
print("trous dans le vert (lac, Suisse ou enclave) :", trous)

W = H = 1000
ECHELLE = W / (2 * CADRE_KM)


def proj(lon, lat):
    x, y = km(lon, lat)
    return ((x + CADRE_KM) * ECHELLE, (y + CADRE_KM) * ECHELLE)


def dp(P, eps):
    if len(P) < 3:
        return P
    (ax, ay), (bx, by) = P[0], P[-1]
    L = math.hypot(bx - ax, by - ay) or 1e-9
    i, dm = 0, 0
    for j in range(1, len(P) - 1):
        dd = abs((bx - ax) * (ay - P[j][1]) - (ax - P[j][0]) * (by - ay)) / L
        if dd > dm:
            i, dm = j, dd
    return dp(P[: i + 1], eps)[:-1] + dp(P[i:], eps) if dm > eps else [P[0], P[-1]]


def trace(anneaux, eps, projeter=True):
    out = ""
    for r in anneaux:
        Q = [proj(x, y) if projeter else (x, y) for x, y in r][:-1]
        h = len(Q) // 2
        P = dp(Q[: h + 1], eps)[:-1] + dp(Q[h:] + [Q[0]], eps)[:-1]
        P = [(round(x), round(y)) for x, y in P]
        P = [p for k, p in enumerate(P) if k == 0 or p != P[k - 1]]
        if len(P) < 3:
            continue
        out += f"M{P[0][0]} {P[0][1]}" + "".join(f"l{x - px} {y - py}" for (px, py), (x, y) in zip(P, P[1:])) + "z"
    return out.replace(" -", "-")


def chemin(c, eps):
    return trace(anneaux_geo(c["contour"]), eps)


def anneaux_plan(g):
    polys = getattr(g, "geoms", [g])
    return [list(p.exterior.coords) for p in polys if p.geom_type == "Polygon"] + [list(i.coords) for p in polys if p.geom_type == "Polygon" for i in p.interiors]


garder = [c for c in communes if servie[c["code"]] or touche_la_carte(c)]
fond = [c for c in garder if not servie[c["code"]]]
avec_page = [c for c in garder if c["code"] in page]
sans_page = [c for c in garder if servie[c["code"]] and c["code"] not in page]

contour = {c["code"]: transform(lambda x, y, z=None: proj(x, y), geom[c["code"]]) for c in garder}
cx0, cy0 = proj(*CENTRE)
disque = Point(cx0, cy0).buffer(CADRE_KM * ECHELLE, 128)

# ----------------------------- noms écrits sur la carte -----------------------------
POLICES_PAGE = [17, 14.5, 12.5, 11]
MARGE_PAGE = 3.2
POLICE = 13
POLICES_SANS_PAGE = [POLICE, POLICE * 0.86]
POLICE_CENTRE = 30
MARGE = 1.2
POLICES = {False: ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 100),
           True: ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 100)}


def lignes_du_nom(nom):
    if len(nom) <= 11 or not any(ch in nom for ch in "- "):
        return [nom]
    k = min((k for k, ch in enumerate(nom) if ch in "- "), key=lambda k: abs(k - len(nom) / 2))
    return [nom[:k], nom[k + 1:]] if nom[k] == " " else [nom[: k + 1], nom[k + 1:]]


def boite(nom, x, y, police, gras):
    w = max(POLICES[gras].getlength(l) for l in lignes_du_nom(nom)) / 100 * police + police * 0.3
    h = len(lignes_du_nom(nom)) * police * 1.12 + police * 0.15
    return (x - w / 2, y - h / 2, x + w / 2, y + h / 2)


def chevauche(a, b):
    return a[0] < b[2] and b[0] < a[2] and a[1] < b[3] and b[1] < a[3]


R_DEDANS = CADRE_KM * ECHELLE - 10
centre_c = None
bx, by = proj(*CENTRE)
w_b = POLICES[True].getlength(NOM_CENTRE) / 100 * POLICE_CENTRE / 2 + 6
Y_NOM_CENTRE = by + 26
RESERVE = [(bx - w_b, Y_NOM_CENTRE - POLICE_CENTRE * 0.62, bx + w_b, Y_NOM_CENTRE + POLICE_CENTRE * 0.62), (bx - 14, by - 14, bx + 14, by + 14)]
a = math.pi * 0.78  # repère « 40 km » au sud-ouest, sur la France
r40x, r40y = cx0 + RAYON_KM * ECHELLE * math.cos(a), cy0 + RAYON_KM * ECHELLE * math.sin(a)
w40 = POLICES[True].getlength("40 km") / 100 * 26 / 2 + 8
RESERVE.append((r40x - w40, r40y - 20, r40x + w40, r40y + 20))


def place_dans(g, texte, police, gras=True):
    """Point d'une zone où un texte tient en entier, au plus près de son centre."""
    p = g.representative_point()
    dedans = prep(g.buffer(-police * 0.6))
    for rr in range(0, 400, 6):
        for k in range(0, 360, 20 if rr else 360):
            x, y = p.x + rr * math.cos(math.radians(k)), p.y + rr * math.sin(math.radians(k))
            b = boite(texte, x, y, police, gras)
            coins = [Point(u, v) for u in b[::2] for v in b[1::2]]
            if all(dedans.contains(q) for q in coins) and all(math.hypot(q.x - cx0, q.y - cy0) < R_DEDANS for q in coins) and not any(chevauche(b, q) for q in RESERVE):
                return round(x), round(y), b
    return None




def candidats(c, gras):
    g = contour[c["code"]]
    out = []
    for police in (POLICES_PAGE if gras else POLICES_SANS_PAGE):
        dedans = prep(g.buffer(police * (MARGE_PAGE if gras else MARGE)))
        pas = police * 0.4
        n = 14 if gras else 8
        decal = sorted({(dx * pas, dy * pas) for dx in range(-n, n + 1) for dy in range(-n * 3 // 4, n * 3 // 4 + 1)}, key=lambda d: math.hypot(*d))
        for ox, oy in ((g.representative_point().x, g.representative_point().y), (g.centroid.x, g.centroid.y)):
            for dx, dy in decal:
                x, y = ox + dx, oy + dy
                if not dedans.contains(Point(x, y)):
                    continue
                b = boite(c["nom"], x, y, police, gras)
                if all(math.hypot(px - cx0, py - cy0) < R_DEDANS for px in b[::2] for py in b[1::2]):
                    out.append((x, y, police, b))
    return out


def libre(b, place):
    return not any(chevauche(b, q) for q in RESERVE) and not any(chevauche(b, v[3]) for v in place.values())


a_nommer = sorted((c for c in sans_page if c["code"] != code_centre and (c.get("population") or 0) >= POP_MIN), key=lambda c: -(c.get("population") or 0))
CAND = {}
hasard = random.Random(49)
pages_a_placer = sorted((c for c in avec_page if c is not centre_c), key=lambda c: contour[c["code"]].area)
for tirage in range(400):
    ordre = pages_a_placer if tirage == 0 else hasard.sample(pages_a_placer, len(pages_a_placer))
    place, omis_pages = {}, []
    for c in ordre:
        cc = next((x for x in CAND.setdefault(c["code"], candidats(c, True)) if libre(x[3], place)), None)
        if cc:
            place[c["code"]] = cc
        else:
            omis_pages.append(c["nom"])
    if not omis_pages:
        break
assert not omis_pages, f"pages sans place pour leur nom : {omis_pages}"
omis = []
for c in a_nommer:
    cc = next((x for x in CAND.setdefault(c["code"], candidats(c, False)) if libre(x[3], place)), None)
    if cc:
        place[c["code"]] = cc
    else:
        omis.append(c["nom"])
print(f"noms : {len(place)} écrits ({len(avec_page)} pages), {len(omis)} sans place sur {len(a_nommer)} communes de {POP_MIN} habitants ou plus")


def etiquette(c):
    if c["code"] not in place:
        return "null"
    x, y, t, _ = place[c["code"]]
    return f"{{ x: {round(x)}, y: {round(y)}, taille: {round(t, 1):g}, lignes: {json.dumps(lignes_du_nom(c['nom']), ensure_ascii=False)} }}"


nb_servies = sum(1 for c in garder if servie[c["code"]])
R_CADRE = round(CADRE_KM * ECHELLE)
CLIP = f'<clipPath id="c"><circle cx="{round(cx0)}" cy="{round(cy0)}" r="{R_CADRE}"/></clipPath>'


def image(nom, contenu):
    (RACINE / "public/carte").mkdir(parents=True, exist_ok=True)
    f = RACINE / "public/carte" / nom
    f.write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}"><defs>{CLIP}</defs><g clip-path="url(#c)">{contenu}</g></svg>\n')
    return f.stat().st_size // 1024


servies_d = "".join(chemin(c, 2.0) for c in garder if servie[c["code"]])
fond_d = "".join(chemin(c, 3.0) for c in fond)
socle = f'<circle cx="{round(cx0)}" cy="{round(cy0)}" r="{R_CADRE}" fill="#FBFAF6"/>'
fond_svg = f'<path d="{fond_d}" fill="#EEEBE5" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/>' if fond_d else ""
ko_fond = image("secteur-fond.svg", socle + fond_svg)
ko_vert = image("secteur-vert.svg", f'<path d="{servies_d}" fill="#C4DFB9" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/>')


L = [
    "/**",
    f" * Secteur servi : toutes les communes dont le centre est à {RAYON_KM} km d'Angers ou moins, plus celles",
    " * qui ont leur page, sans aucune commune grise (Rémy, #R60). Contours : public/carte/secteur-*.svg.",
    f" * Sources : geo.api.gouv.fr (IGN Admin Express, départements {', '.join(DEPARTEMENTS)}) ;",
    f" * projection équirectangulaire centrée sur Angers, carte ronde de {CADRE_KM} km de rayon, simplifiée.",
    " * Généré par scripts/carte-secteur.py : ne pas éditer à la main.",
    " */",
    f"export const CARTE = {{ w: {W}, h: {H}, cx: {round(cx0)}, cy: {round(cy0)}, rayon: {round(RAYON_KM * ECHELLE)}, cadre: {R_CADRE}, km: {RAYON_KM}, servies: {nb_servies}, angle40: {a:.4f}, yNomCentre: {round(Y_NOM_CENTRE)} }}",
    "",
    "type Etiquette = { x: number; y: number; taille: number; lignes: string[] }",
    "",
    "/** Communes qui ont leur page : cliquables vers /zones/<slug>. */",
    "export const PAGES: { slug: string; nom: string; km: number; x: number; y: number; etiquette: Etiquette | null; d: string }[] = [",
]
for c in sorted(avec_page, key=dist):
    x, y = proj(*c["centre"]["coordinates"])
    L.append(f"  {{ slug: '{page[c['code']]}', nom: {json.dumps(c['nom'], ensure_ascii=False)}, km: {round(dist(c), 1)}, x: {round(x)}, y: {round(y)}, etiquette: {etiquette(c)}, d: '{chemin(c, 1.4)}' }},")
L += ["]", "", "/** Noms des autres communes servies (les plus peuplées, tant qu'il y a la place). */",
      "export const NOMS: { nom: string; etiquette: Etiquette }[] = ["]
for c in a_nommer:
    if c["code"] in place:
        L.append(f"  {{ nom: {json.dumps(c['nom'], ensure_ascii=False)}, etiquette: {etiquette(c)} }},")
L.append("]")
sortie = RACINE / "components/sections/carte-secteur-data.ts"
sortie.write_text("\n".join(L) + "\n")
print(f"{len(garder)} communes dessinées, {nb_servies} servies, {len(fond)} en fond ; données {sortie.stat().st_size // 1024} Ko, images {ko_fond} + {ko_vert} Ko")
