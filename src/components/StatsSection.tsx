import { Star, MessageSquare, Clock } from "lucide-react";

const stats = [
  { icon: MessageSquare, value: "50+", label: "Client Reviews" },
  { icon: Star, value: "10/10", label: "Average Rating" },
  { icon: Clock, value: "50+", label: "Years Combined Experience" },
];

const StatsSection = () => (
  <section className="py-16 bg-charcoal">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-3 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <s.icon className="text-accent mb-3" size={32} />
            <p className="font-heading text-4xl md:text-5xl font-bold text-card mb-2">{s.value}</p>
            <p className="text-card/70 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
