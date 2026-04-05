import { Button } from "@/components/ui/button";
import modelJasmine from "@/assets/model-jasmine.jpg";
import modelOrchid from "@/assets/model-orchid.jpg";
import modelSunflower from "@/assets/model-sunflower.jpg";
import modelIris from "@/assets/model-iris.jpg";
import modelRose from "@/assets/model-rose.jpg";

const models = [
  { name: "JASMINE", spec: "1 Floor Studio", sqft: "~400 sq ft", img: modelJasmine },
  { name: "ORCHID", spec: "1 Bedroom", sqft: "~500 sq ft", img: modelOrchid },
  { name: "SUNFLOWER", spec: "2 Bed, 2 Bath", sqft: "~600 sq ft", img: modelSunflower },
  { name: "IRIS", spec: "1 Bed, 2 Bath, 2 Stories", sqft: "~1,000 sq ft", img: modelIris },
  { name: "ROSE", spec: "2 Bed, 2 Bath, 3 Stories", sqft: "~1,200 sq ft", img: modelRose },
];

const ModelsSection = () => (
  <section id="models" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Our Models</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Garden Suite Collection</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((m) => (
          <div key={m.name} className="group bg-card rounded-xl overflow-hidden hover-lift border border-border">
            <div className="relative overflow-hidden h-56">
              <img
                src={m.img}
                alt={`${m.name} garden suite model`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={640}
                height={512}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{m.name}</h3>
              <p className="text-muted-foreground text-sm mb-1">{m.spec}</p>
              <p className="text-accent font-semibold text-sm mb-4">{m.sqft}</p>
              <a href="#contact">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Start Now
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ModelsSection;
