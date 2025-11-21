export default function SkillsList({ title, items = [] }) {
  return (
    <section className="skills-section">
      <h3 className="skills-title">{title}</h3>

      <ul className="skills-list" aria-label={`${title} skills`}>
        {items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
