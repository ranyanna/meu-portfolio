function ProjectCard({ project }) {
  const {
    name,
    description,
    image,
    tags,
    languages,
    status,
    demoUrl,
    repoUrl,
  } = project;

  const languagesLabel = languages
    .map((lang) => `${lang.name} ${lang.percent}%`)
    .join(", ");

  return (
    <article className="project-card">
      <div className="window-bar" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <img
        src={image}
        alt={`Prévia do projeto ${name}`}
        className="project-image"
      />

      <div className="project-body">
        <div className="project-heading">
          <h3 className="project-name">{name}</h3>
          {status && <span className="project-status">{status}</span>}
        </div>

        <p className="project-description">{description}</p>

        {tags.length > 0 && (
          <ul className="project-tags">
            {tags.map((tag) => (
              <li key={tag} className="project-tag">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="project-footer">
          {languages.length > 0 && (
            <div
              className="language-bar"
              role="img"
              aria-label={languagesLabel}
            >
              {languages.map((lang) => (
                <span
                  key={lang.name}
                  style={{ width: `${lang.percent}%` }}
                ></span>
              ))}
            </div>
          )}

          <div className="project-links">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer">
                demo ↗
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noreferrer">
                código ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;