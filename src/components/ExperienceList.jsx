import ExperienceItem from "./ExperienceItem.jsx";

export default function ExperienceList({ items }) {
  // Generate an ID for screen readers
  const headingId = "experience-list-heading";

  return (
    <section aria-labelledby={headingId}>
      <h3 id={headingId} className="visually-hidden">
        Work Experience
      </h3>

      {items.map((item) => (
        <ExperienceItem
          key={`${item.company}-${item.role}-${item.period}`}
          item={item}
        />
      ))}
    </section>
  );
}
