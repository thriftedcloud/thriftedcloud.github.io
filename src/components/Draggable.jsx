import { useState, useRef, useEffect } from 'react'

/**
 * Reusable wrapper that makes any child element freely draggable.
 * Uses pointer events for cross-device support (mouse + touch).
 * Position is controlled via CSS transform on this wrapper;
 * pass initial placement through the `style` prop (e.g. left/top).
 */
export default function Draggable({ children, className = '', style = {} }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef({ startX: 0, startY: 0, offsetX: 0, offsetY: 0 })

  function handlePointerDown(e) {
    // Only left mouse button or touch
    if (e.button !== undefined && e.button !== 0) return
    e.preventDefault()
    setDragging(true)
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      offsetX: offset.x,
      offsetY: offset.y,
    }
  }

  useEffect(() => {
    if (!dragging) return

    function handleMove(e) {
      const dx = e.clientX - dragRef.current.startX
      const dy = e.clientY - dragRef.current.startY
      setOffset({
        x: dragRef.current.offsetX + dx,
        y: dragRef.current.offsetY + dy,
      })
    }

    function handleUp() {
      setDragging(false)
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [dragging])

  return (
    <div
      className={`draggable ${dragging ? 'is-dragging' : ''} ${className}`}
      style={{
        ...style,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
    >
      {children}
    </div>
  )
}
