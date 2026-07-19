import { SITE } from '@/lib/config'

const faqs = [
  { q: `Comment savoir si j'ai une fuite d'eau à ${SITE.commune} ?`, a: `Plusieurs signes révèlent une fuite cachée : facture d'eau élevée, traces d'humidité sur murs/plafonds, odeur de moisissure, ou compteur qui tourne robinets fermés. Si vous constatez l'un de ces signes, appelez-nous rapidement.` },
  { q: "Mon assurance habitation couvre-t-elle la recherche de fuite ?", a: "Oui, dans la grande majorité des cas. Les contrats MRH prennent en charge la recherche de fuite et les dégâts consécutifs. Nous fournissons le rapport technique pour votre déclaration de sinistre." },
  { q: `Combien coûte une recherche de fuite à ${SITE.commune} ?`, a: `Entre ${SITE.prixRechercheMin}€ et ${SITE.prixRechercheMax}€ selon la complexité et la technique utilisée. Ce tarif est souvent remboursé par votre assurance. Nous affichons nos prix en toute transparence.` },
  { q: "Faut-il casser les murs pour trouver une fuite ?", a: "Non. Nos techniques (caméra thermique, gaz traceur, acoustique) sont non-destructives. Nous localisons la fuite avec précision avant toute intervention." },
  { q: `Intervenez-vous en urgence à ${SITE.commune} ?`, a: `Oui, disponibles 7j/7 pour les urgences à ${SITE.commune} et dans toute la zone Angers. Nous nous engageons à intervenir dans les 2h sur ${SITE.commune}.` },
  { q: "Qu'est-ce que le gaz traceur ?", a: "Mélange inerte d'azote et d'hydrogène, totalement inoffensif. Injecté dans la canalisation défaillante, détecté en surface avec un capteur ultra-sensible." },
  { q: "Combien de temps dure une intervention ?", a: "1h à 3h selon la configuration du logement. La détection thermique est la plus rapide. Rapport complet remis en fin d'intervention." },
  { q: "Que se passe-t-il après avoir trouvé la fuite ?", a: "Nous remettons un rapport de localisation précis. Vous pouvez faire intervenir votre plombier sur la zone identifiée, ou nous confier la réparation." },
  { q: "Comment déclarer un dégât des eaux à mon assurance ?", a: "Déclarez dans les 5 jours ouvrés. Notre rapport technique facilite la déclaration. Nous vous guidons dans cette démarche si nécessaire." },
  { q: "Intervenez-vous aussi dans les communes voisines ?", a: `Oui : ${SITE.communesVoisines.join(', ')} et tout le secteur Anjou dans un rayon de 30 km.` },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-subtitle">Tout ce que vous devez savoir sur la recherche de fuite à {SITE.commune}.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="card group">
              <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none select-none">
                <span className="flex items-start gap-3 font-semibold text-navy-900">
                  <span className="text-blue-500 font-bold text-base shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <span>{faq.q}</span>
                </span>
                <span className="text-slate-400 shrink-0 text-xl mt-0.5 transition-transform duration-200 group-open:rotate-180">▾</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-slate-600 leading-relaxed pl-9">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
