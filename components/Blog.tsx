const ARTICLES = [
  {
    title: "Comment detecter une fuite d'eau cachee dans votre maison",
    excerpt: "Les signes revelateurs d'une fuite invisible et les etapes pour la localiser rapidement sans casse...",
    category: 'Conseils',
    readTime: '4 min',
    icon: '💧',
  },
  {
    title: "Degat des eaux : comment declarer le sinistre a son assurance ?",
    excerpt: "Guide pratique pour faciliter votre declaration et maximiser votre indemnisation avec un rapport technique...",
    category: 'Assurance',
    readTime: '6 min',
    icon: '📋',
  },
  {
    title: "Fuite sur canalisation enterree : gaz traceur ou acoustique ?",
    excerpt: "Comparatif des deux techniques pour les fuites sous dalle ou sous jardin — avantages et limites...",
    category: 'Technique',
    readTime: '5 min',
    icon: '🔬',
  },
]

const CATEGORY_BADGES: Record<string, string> = {
  Conseils: 'badge-teal',
  Assurance: 'badge-peach',
  Technique: 'badge',
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 section-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Blog</span>
          <h2 className="section-title mt-3">Conseils & actualites</h2>
          <p className="section-subtitle">
            Articles de reference sur la recherche de fuite et les degats des eaux a Angers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <div key={article.title} className="card-hover overflow-hidden group">
              {/* Article hero placeholder */}
              <div className="h-36 bg-cream-100 flex items-center justify-center text-5xl border-b border-line-200 group-hover:bg-teal-50 transition-colors">
                {article.icon}
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className={CATEGORY_BADGES[article.category]}>{article.category}</span>
                  <span className="text-ink-400 text-xs">{article.readTime} de lecture</span>
                </div>
                <h3 className="font-bold text-ink-900 text-lg leading-snug group-hover:text-teal-500 transition-colors">
                  {article.title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-teal-500 text-sm font-semibold pt-1">
                  <span>Bientot disponible</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
