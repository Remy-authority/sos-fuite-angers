import { SITE } from '@/lib/config'

const faqs = [
  {
    q: `Comment savoir si j'ai une fuite d'eau à ${SITE.commune} ?`,
    a: `Plusieurs signes révèlent une fuite cachée : facture d'eau élevée, traces d'humidité sur murs/plafonds, odeur de moisissure, ou compteur qui tourne robinets fermés. Si vous constatez l'un de ces signes à ${SITE.commune}, appelez-nous immédiatement.`,
  },
  {
    q: "Mon assurance habitation couvre-t-elle la recherche de fuite ?",
    a: "Oui, dans la grande majorité des cas. Les contrats MRH prennent en charge la recherche de fuite et les dégâts consécutifs. Nous fournissons le rapport technique complet pour votre déclaration de sinistre — sans frais supplémentaire.",
  },
  {
    q: `Combien coûte une recherche de fuite à ${SITE.commune} ?`,
    a: `Entre ${SITE.prixRechercheMin}€ et ${SITE.prixRechercheMax}€ selon la complexité et la technique utilisée. Ce tarif est souvent remboursé par votre assurance. Nous affichons nos prix en toute transparence — là où la concurrence les cache.`,
  },
  {
    q: "Faut-il casser les murs pour trouver une fuite ?",
    a: "Non. Nos techniques (caméra thermique, gaz traceur, acoustique) sont 100% non-destructives. Nous localisons la fuite avec précision centimétrique avant toute intervention physique.",
  },
  {
    q: `Intervenez-vous en urgence à ${SITE.commune} ?`,
    a: `Oui, disponibles 7j/7 pour les urgences à ${SITE.commune} et dans tout le secteur Angers. Nous nous engageons à intervenir en moins de 2h sur ${SITE.commune} pour les urgences.`,
  },
  {
    q: "Qu'est-ce que le gaz traceur ?",
    a: "Mélange inerte d'azote et d'hydrogène totalement inoffensif. Injecté dans la canalisation défaillante, il est détecté en surface avec un capteur ultra-sensible. Technique de référence pour les fuites enterrées.",
  },
  {
    q: "Combien de temps dure une intervention ?",
    a: "1h à 3h selon la configuration du logement. La détection thermique est la plus rapide. Rapport complet remis en fin d'intervention. Transmission assurance le jour même si nécessaire.",
  },
  {
    q: "Que se passe-t-il après avoir trouvé la fuite ?",
    a: "Nous remettons un rapport de localisation précis avec coordonnées GPS. Vous pouvez faire intervenir votre plombier sur la zone identifiée, ou nous confier la réparation sur devis.",
  },
  {
    q: "Comment déclarer un dégât des eaux à mon assurance ?",
    a: "Déclarez dans les 5 jours ouvrés avec notre rapport technique. Nous vous guidons dans la démarche et pouvons contacter directement votre assureur si besoin.",
  },
  {
    q: "Intervenez-vous aussi dans les communes voisines d'Angers ?",
    a: `Oui : ${SITE.communesVoisines.join(', ')} et tout le secteur Anjou dans un rayon de 30 km. Même tarif, même qualité.`,
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-ch-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-red mb-4 inline-flex">FAQ</span>
          <h2 className="section-title mt-3">Questions fréquentes</h2>
          <div className="red-line mx-auto mt-5" />
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur la recherche de fuite à {SITE.commune}.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="dark-card group open:border-rouge-600/40">
              <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none select-none">
                <span className="flex items-start gap-4 font-semibold text-gray-300 group-hover:text-white transition-colors group-open:text-white">
                  <span className="text-rouge-600 font-black text-sm shrink-0 mt-0.5 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{faq.q}</span>
                </span>
                <span className="text-gray-600 shrink-0 text-lg mt-0.5 transition-transform duration-200 group-open:rotate-180 group-open:text-rouge-500">
                  ▾
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-gray-500 leading-relaxed pl-9">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
