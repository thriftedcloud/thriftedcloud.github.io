import { useState } from 'react'
import StarCursor from './components/StarCursor.jsx'
import TreatGrid from './components/TreatGrid.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import AboutBubble from './components/AboutBubble.jsx'
import { projects } from './data/projects.js'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="app">
      <StarCursor />

      {/* ASCII frame around the whole viewport */}
      <div className="ascii-frame">
        {/* Decorative corner characters */}
        <span className="corner tl" aria-hidden="true">✦</span>
        <span className="corner tr" aria-hidden="true">✦</span>
        <span className="corner bl" aria-hidden="true">✦</span>
        <span className="corner br" aria-hidden="true">✦</span>

        {/* Header */}
        <header className="app-header">
          <span className="header-deco" aria-hidden="true">~ ✦ ~</span>
          <h1 className="app-title">sugar atelier</h1>
          <span className="header-deco" aria-hidden="true">~ ✦ ~</span>
        </header>
        <p className="app-subtitle">a portfolio of sweet creative work</p>

        {/* Treat grid */}
        <main className="app-main">
          <TreatGrid projects={projects} onSelect={setSelectedProject} />
        </main>

        {/* About bubble */}
        <AboutBubble />
      </div>

      {/* Project modal */}
      {selectedProject !== null && (
        <ProjectModal
          projects={projects}
          index={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNavigate={setSelectedProject}
        />
      )}
    </div>
  )
}
