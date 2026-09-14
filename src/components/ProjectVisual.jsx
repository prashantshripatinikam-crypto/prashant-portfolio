export default function ProjectVisual({ project, className = '' }) {
  return (
    <div className={`project-visual ${project.tone} ${className}`} style={{ '--accent': project.accent }} role="img" aria-label={`${project.title} project artwork placeholder`}>
      <span className="visual-index">{project.id}</span>
      <div className="visual-orbit" />
      <div className="visual-form"><i /><i /><i /></div>
      <p>{project.category}</p>
      <strong>{project.title}</strong>
      <small>REPLACE WITH YOUR PROJECT ARTWORK</small>
    </div>
  )
}
