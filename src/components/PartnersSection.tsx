import company1 from "@/assets/company1.png";
import company2 from "@/assets/company2.png";
import company3 from "@/assets/company3.jpg";
import company4 from "@/assets/company4.png";

const partners = [
  { name: "Company 1", logo: company1 },
  { name: "Company 2", logo: company2 },
  { name: "Company 3", logo: company3 },
  { name: "Company 4", logo: company4 },
];

const PartnersSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Trusted By</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Partners</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {partners.map((p) => (
          <div
            key={p.name}
            className="bg-card rounded-lg border border-border h-32 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <img src={p.logo} alt={p.name} className="w-full h-full object-contain p-4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
