import { useEffect } from 'react'

/**
 * Frosted-glass project window overlay.
 * Two-column layout: ASCII stats (left) + description & visual (right).
 * Prev/Next cycling, Escape to close.
 */
export default function ProjectModal({ projects, index, onClose, onNavigate }) {
  const project = projects[index]

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + projects.length) % projects.length)
      if (e.key === 'ArrowRight') onNavigate((index + 1) % projects.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, projects.length, onClose, onNavigate])

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${project.name} project details`}>
      <div className="project-window" onClick={(e) => e.stopPropagation()}>
        {/* Window header */}
        <div className="window-header">
          <span className="window-dots" aria-hidden="true">○ ○ ○</span>
          <span className="window-title">{project.treat} {project.name}</span>
          <button className="window-close" onClick={onClose} aria-label="Close project window">
            [ x ]
          </button>
        </div>

        {/* Window body */}
        <div className="window-body">
          {/* Left: ASCII stats */}
          <aside className="window-stats" aria-label="Project statistics">
            <div className="stat-block">
              <span className="stat-label">~ year ~</span>
              <span className="stat-value">{project.year}</span>
            </div>
            <div className="stat-block">
              <span className="stat-label">~ role ~</span>
              <span className="stat-value">{project.role}</span>
            </div>
            <div className="stat-block">
              <span className="stat-label">~ stack ~</span>
              <div className="stat-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="stat-tag">{tag}</span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right: content */}
          <div className="window-content">
            <div className="project-visual" style={{ background: `linear-gradient(135deg, ${project.color}, #FFF5F7)` }}>
              <span className="visual-emoji" aria-hidden="true">{project.treat}</span>
            </div>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-desc">{project.description}</p>
          </div>
        </div>

        {/* Window navigation */}
        <div className="window-nav">
          <button
            className="nav-btn"
            onClick={() => onNavigate((index - 1 + projects.length) % projects.length)}
          >
            [ &lt; prev ]
          </button>
          <span className="nav-counter" aria-hidden="true">
            {index + 1} / {projects.length}
          </span>
          <button
            className="nav-btn"
            onClick={() => onNavigate((index + 1) % projects.length)}
          >
            [ next &gt; ]
          </button>
        </div>
      </div>
    </div>
  )
}
