const ARTICLES = [
  { title: "Comment détecter une fuite d'eau cachée dans votre maison", excerpt: "Les signes révélateurs d'une fuite invisible et les étapes pour la localiser rapidement...", category: 'Conseils' },
  { title: "Dégât des eaux : comment déclarer le sinistre à son assurance ?", excerpt: "Guide pratique pour faciliter votre déclaration et maximiser votre indemnisation...", category: 'Assurance' },
  { title: "Fuite sur canalisation enterrée : gaz traceur ou acoustique ?", excerpt: "Comparatif des deux techniques pour les fuites sous dalle ou sous jardin...", category: 'Technique' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Conseils &amp; actualités</h2>
          <p className="section-subtitle">Articles de référence sur la recherche de fuite et les dégâts des eaux.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <div key={article.title} className="card p-6 opacity-60">
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">{article.category}</div>
              <h3 className="font-bold text-navy-900 text-lg mb-3 leading-snug">{article.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{article.excerpt}</p>
              <span className="text-blue-500 text-sm font-semibold">Bientôt disponible →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
