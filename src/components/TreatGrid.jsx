/**
 * The portfolio grid — a 3×2 arrangement of "treat" cards.
 * Each card represents a project. Clicking opens the project modal.
 */
export default function TreatGrid({ projects, onSelect }) {
  return (
    <nav className="treat-grid" aria-label="Project Menu">
      {projects.map((project, index) => (
        <button
          key={project.id}
          className="treat-card"
          onClick={() => onSelect(index)}
          aria-label={`Open project: ${project.name}`}
        >
          <span className="treat-emoji" aria-hidden="true">{project.treat}</span>
          <span className="treat-name">{project.name}</span>
          <span className="treat-hint" aria-hidden="true">~ click ~</span>
        </button>
      ))}
    </nav>
  )
}
