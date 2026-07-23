function BodySection({ title = "", children = null }) {
  return (
    <section className="bodySection px-0 py-3">
      <h2 className="mb-1 text-[12px] font-bold">{title}</h2>

      <div className="text-[10px] leading-tight">{children}</div>
    </section>
  );
}

export default BodySection;
