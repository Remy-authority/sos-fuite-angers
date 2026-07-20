import { SITE } from '@/lib/config'

const faqs = [
  {
    q: `Comment savoir si j'ai une fuite d'eau a ${SITE.commune} ?`,
    a: `Plusieurs signes revelent une fuite cachee : facture d'eau elevee, traces d'humidite sur murs/plafonds, odeur de moisissure, ou compteur qui tourne robinets fermes. Si vous constatez l'un de ces signes a ${SITE.commune}, appelez-nous immediatement.`,
  },
  {
    q: "Mon assurance habitation couvre-t-elle la recherche de fuite ?",
    a: "Oui, dans la grande majorite des cas. Les contrats MRH prennent en charge la recherche de fuite et les degats consecutifs. Nous fournissons le rapport technique complet pour votre declaration de sinistre — sans frais supplementaire.",
  },
  {
    q: `Combien coute une recherche de fuite a ${SITE.commune} ?`,
    a: `Le cout depend de la complexite et de la technique utilisee. Devis gratuit et transparent avant toute intervention. Souvent rembourse par votre assurance. Nous affichons nos tarifs en toute transparence — la ou la concurrence les cache.`,
  },
  {
    q: "Faut-il casser les murs pour trouver une fuite ?",
    a: "Non. Nos techniques (camera thermique, gaz traceur, acoustique) sont 100% non-destructives. Nous localisons la fuite avec precision centimetrique avant toute intervention physique.",
  },
  {
    q: `Intervenez-vous en urgence a ${SITE.commune} ?`,
    a: `Oui, disponibles 7j/7 pour les urgences a ${SITE.commune} et dans tout le secteur Angers. Nous nous engageons a intervenir en moins de 2h sur ${SITE.commune} pour les urgences.`,
  },
  {
    q: "Qu'est-ce que le gaz traceur ?",
    a: "Melange inerte d'azote et d'hydrogene totalement inoffensif. Injecte dans la canalisation defaillante, il est detecte en surface avec un capteur ultra-sensible. Technique de reference pour les fuites enterrees.",
  },
  {
    q: "Combien de temps dure une intervention ?",
    a: "1h a 3h selon la configuration du logement. La detection thermique est la plus rapide. Rapport complet remis en fin d'intervention. Transmission assurance le jour meme si necessaire.",
  },
  {
    q: "Que se passe-t-il apres avoir trouve la fuite ?",
    a: "Nous remettons un rapport de localisation precis avec coordonnees GPS. Vous pouvez faire intervenir votre plombier sur la zone identifiee, ou nous confier la reparation sur devis.",
  },
  {
    q: "Comment declarer un degat des eaux a mon assurance ?",
    a: "Declarez dans les 5 jours ouvres avec notre rapport technique. Nous vous guidons dans la demarche et pouvons contacter directement votre assureur si besoin.",
  },
  {
    q: "Intervenez-vous aussi dans les communes voisines d'Angers ?",
    a: `Oui : ${SITE.communesVoisines.join(', ')} et tout le secteur Anjou dans un rayon de 30 km. Meme tarif, meme qualite.`,
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 section-cream">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">FAQ</span>
          <h2 className="section-title mt-3">Questions frequentes</h2>
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur la recherche de fuite a {SITE.commune}.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="card group open:border-teal-300">
              <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none select-none">
                <span className="flex items-start gap-4 font-semibold text-ink-700 group-hover:text-ink-900 transition-colors group-open:text-ink-900">
                  <span className="text-teal-500 font-black text-sm shrink-0 mt-0.5 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{faq.q}</span>
                </span>
                <span className="text-ink-400 shrink-0 text-lg mt-0.5 transition-transform duration-200 group-open:rotate-180 group-open:text-teal-500">
                  ▾
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-ink-500 leading-relaxed pl-9">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
