import { useState } from 'react'

/**
 * The "About" pop-up — a small chat-bubble styled window in the bottom-right corner.
 * Toggles open/closed. Contains an ASCII portrait and a short bio.
 */
export default function AboutBubble() {
  const [open, setOpen] = useState(false)

  return (
    <div className={`about-bubble ${open ? 'open' : ''}`}>
      {open ? (
        <div className="about-content">
          <button className="about-close" onClick={() => setOpen(false)} aria-label="Close about window">
            [ x ]
          </button>
          <pre className="about-art" aria-hidden="true">{`  ✿  ♡  ✿
 (◕‿◕)
  ╰───╯`}</pre>
          <p className="about-text">
            hi! i'm a creative developer who loves sweet treats &amp; cute code.
            welcome to my sugar atelier ♡
          </p>
          <div className="about-links">
            <a href="mailto:hello@sugaratelier.dev" className="about-link">~ email ~</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="about-link">~ github ~</a>
          </div>
        </div>
      ) : (
        <button className="about-toggle" onClick={() => setOpen(true)}>
          ✿ about me ✿
        </button>
      )}
    </div>
  )
}
