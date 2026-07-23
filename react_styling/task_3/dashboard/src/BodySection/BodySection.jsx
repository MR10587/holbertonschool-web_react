function BodySection({ title = "", children = null }) {
  return (
    <section className="bodySection px-8 py-2">
      <h2 className="mb-0 mt-5 text-[17px] font-bold">{title}</h2>

      <div className="text-[10px] leading-tight">{children}</div>
    </section>
  );
}

export default BodySection;
