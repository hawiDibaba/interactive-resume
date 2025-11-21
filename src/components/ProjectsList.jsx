export default function ProjectsList({ projects }) {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <article key={project.name} className="project-item">
          <div className="project-content">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
            </div>

            {/* string OR array description */}
            {Array.isArray(project.description) ? (
              <ul className="project-description-list">
                {project.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            ) : project.description ? (
              <p className="project-description">{project.description}</p>
            ) : null}

            {(project.demo || project.github) && (
              <div
                className="project-links"
                aria-label={`Project links for ${project.name}`}
              >
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-link"
                    aria-label={`Live demo of ${project.name}`}
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-link"
                    aria-label={`Source code for ${project.name}`}
                  >
                    Source Code
                  </a>
                )}
              </div>
            )}

            {project.tech && project.tech.length > 0 && (
              <div className="chip-list" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
