export default function ExperienceItem({ item }) {
  const experienceLabel =
    item.role && item.company
      ? `${item.role} at ${item.company}`
      : item.role || item.company || "Experience item";

  return (
    <article className="experience-item" aria-label={experienceLabel}>
      <div
        className="experience-header"
        aria-label="Role, company, period, and location"
      >
        <div>
          <h3 className="experience-role">{item.role}</h3>
          <p className="experience-company">{item.company}</p>
        </div>
        <div>
          <p className="experience-period">{item.period}</p>
          <p className="experience-location">{item.location}</p>
        </div>
      </div>

      <ul
        className="experience-bullets"
        aria-label="Responsibilities and accomplishments"
      >
        {item.bullets.map((bullet, idx) => {
          // format: { text: "...", details: [...] }
          if (typeof bullet === "object" && bullet !== null) {
            return (
              <li className="mainProj" key={idx}>
                {bullet.text}

                {Array.isArray(bullet.details) && bullet.details.length > 0 && (
                  <ul className="experience-sub-bullets">
                    {bullet.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }

          // format: "some string"
          return (
            <li className="mainProj" key={idx}>
              {bullet}
            </li>
          );
        })}
      </ul>

      {item.tech && item.tech.length > 0 && (
        <div className="chip-list" aria-label="Technologies used">
          {item.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
