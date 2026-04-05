const partners = Array.from({ length: 6 }, (_, i) => `Partner Logo ${i + 1}`);

const PartnersSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Trusted By</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Partners</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {partners.map((p) => (
          <div
            key={p}
            className="bg-card rounded-lg border border-border h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <span className="text-muted-foreground text-xs font-medium">{p}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
