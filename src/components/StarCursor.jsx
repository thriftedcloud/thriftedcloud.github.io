import { useEffect, useRef } from 'react'

/**
 * Custom ASCII falling-star cursor with a physics-based trail.
 * Renders the cursor as a text element and the trail on a canvas overlay.
 * Respects prefers-reduced-motion (no trail) and pointer:coarse (disabled entirely).
 */
export default function StarCursor() {
  const cursorRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    // Skip on touch devices — no custom cursor there
    if (window.matchMedia('(pointer: coarse)').matches) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cursor = cursorRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let mouseX = -100
    let mouseY = -100
    let trail = []
    const chars = ['.', '+', '*', '°', '·', '✦']

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function onMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'

      if (!reduceMotion) {
        trail.push({
          x: mouseX + (Math.random() - 0.5) * 8,
          y: mouseY + (Math.random() - 0.5) * 8,
          char: chars[Math.floor(Math.random() * chars.length)],
          life: 1,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 0.6 + 0.15, // gentle downward drift
        })
        // cap trail length
        if (trail.length > 60) trail.shift()
      }
    }

    document.addEventListener('mousemove', onMove)

    let raf
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (!reduceMotion) {
        trail = trail.filter((p) => p.life > 0)
        for (const p of trail) {
          p.x += p.vx
          p.y += p.vy
          p.life -= 0.025
          ctx.font = '14px "JetBrains Mono", monospace'
          ctx.fillStyle = `rgba(255, 105, 180, ${p.life * 0.8})`
          ctx.fillText(p.char, p.x, p.y)
        }
      }

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="star-trail" aria-hidden="true" />
      <div ref={cursorRef} className="star-cursor" aria-hidden="true">
        ( ✦ )
      </div>
    </>
  )
}
