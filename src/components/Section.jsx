export default function Section({ title, children }) {
  // Create an ID-friendly version of the title
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}
