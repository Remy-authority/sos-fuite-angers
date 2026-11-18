'use client'

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'

/**
 * Pose data-attente sur son élément tant qu'il n'est pas entré dans l'écran
 * (classes .glisse, .trace, .surgit, .tombe de globals.css). Rendu serveur sans
 * l'attribut : sans JavaScript, ou pour un robot, tout est visible.
 */
export default function Apparition({
  as: Balise = 'div',
  className,
  children,
  id,
  style,
  ...reste
}: {
  as?: ElementType
  className?: string
  children: ReactNode
  id?: string
  style?: CSSProperties
  'aria-labelledby'?: string
}) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight * 0.9 && r.bottom > 0) return
    el.setAttribute('data-attente', '')
    const io = new IntersectionObserver(
      (entrees) => {
        if (entrees.some((e) => e.isIntersecting)) {
          el.removeAttribute('data-attente')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Balise ref={ref} className={className} id={id} style={style} {...reste}>
      {children}
    </Balise>
  )
}
