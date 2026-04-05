import { Wrench, Hammer, ShieldCheck, TreePine } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Comprehensive Repair",
    desc: "Plumbing, HVAC, electrical, and carpentry — all under one roof.",
  },
  {
    icon: Hammer,
    title: "Design & Construction",
    desc: "Renovations, new builds, framing, foundations, and excavation.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Electrical",
    desc: "Security systems, cameras, and full electrical installations.",
  },
  {
    icon: TreePine,
    title: "Garden Suites",
    desc: "Custom backyard homes and laneway suites built to code.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Services</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-xl p-8 hover-lift border border-border cursor-default"
          >
            <div className="w-14 h-14 rounded-lg bg-gold-light flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
              <s.icon className="text-accent group-hover:text-accent-foreground transition-colors" size={28} />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
