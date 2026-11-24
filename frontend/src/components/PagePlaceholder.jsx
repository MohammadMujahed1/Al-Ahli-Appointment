// Temporary page body until the user story is implemented.
export default function PagePlaceholder({ title, story, children }) {
  return (
    <section className="page">
      <h1>{title}</h1>
      <p className="muted">قيد التطوير ({story})</p>
      {children}
    </section>
  );
}
