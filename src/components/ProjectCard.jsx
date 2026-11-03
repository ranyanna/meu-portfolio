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

  const cardLink = demoUrl || repoUrl;

  const CardWrapper = cardLink ? "a" : "div";
  const wrapperProps = cardLink
    ? {
        href: cardLink,
        target: "_blank",
        rel: "noreffer",
        className: "project-card-link",
      }
    : { className: "project-card-link" };

  return (
    <CardWrapper {...wrapperProps}>
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
          </div>
        </div>
      </article>
    </CardWrapper>
  );
}

export default ProjectCard;
