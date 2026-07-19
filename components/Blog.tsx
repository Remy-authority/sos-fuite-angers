const ARTICLES = [
  {
    title: "Comment détecter une fuite d'eau cachée dans votre maison",
    excerpt: "Les signes révélateurs d'une fuite invisible et les étapes pour la localiser rapidement sans casse...",
    category: 'Conseils',
    readTime: '4 min',
    icon: '💧',
  },
  {
    title: "Dégât des eaux : comment déclarer le sinistre à son assurance ?",
    excerpt: "Guide pratique pour faciliter votre déclaration et maximiser votre indemnisation avec un rapport technique...",
    category: 'Assurance',
    readTime: '6 min',
    icon: '📋',
  },
  {
    title: "Fuite sur canalisation enterrée : gaz traceur ou acoustique ?",
    excerpt: "Comparatif des deux techniques pour les fuites sous dalle ou sous jardin — avantages et limites...",
    category: 'Technique',
    readTime: '5 min',
    icon: '🔬',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  Conseils: 'badge-trust',
  Assurance: 'badge-gold',
  Technique: 'badge-red',
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-ch-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-red mb-4 inline-flex">Blog</span>
          <h2 className="section-title mt-3">Conseils &amp; actualités</h2>
          <div className="red-line mx-auto mt-5" />
          <p className="section-subtitle">
            Articles de référence sur la recherche de fuite et les dégâts des eaux à Angers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <div key={article.title} className="dark-card overflow-hidden group hover:border-rouge-600/30 hover:-translate-y-1 transition-all duration-300">
              {/* Article hero placeholder */}
              <div className="h-36 bg-ch-800 flex items-center justify-center text-5xl border-b border-ch-600 group-hover:bg-ch-700 transition-colors">
                {article.icon}
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className={CATEGORY_COLORS[article.category]}>{article.category}</span>
                  <span className="text-gray-600 text-xs">{article.readTime} de lecture</span>
                </div>
                <h3 className="font-bold text-white text-lg leading-snug group-hover:text-rouge-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-rouge-500 text-sm font-semibold pt-1">
                  <span>Bientôt disponible</span>
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
