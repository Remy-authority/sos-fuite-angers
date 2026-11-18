import Link from 'next/link'
import { LIBELLE_DEVIS } from '@/lib/cta'

export default function NotFound() {
  return (
    <section className="container-site section flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="text-5xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl">Page introuvable</h1>
      <p className="mt-2 text-slate-600">Rien ne correspond à ce lien chez nous : vérifiez l'orthographe ou repartez de l'accueil pour retrouver nos conseils sur les fuites d'eau.</p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">Retour à l&apos;accueil</Link>
        <Link href="/contact" className="btn-accent">{LIBELLE_DEVIS}</Link>
      </div>
    </section>
  )
}
