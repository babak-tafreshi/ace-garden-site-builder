import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-img.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Construction team working on residential project"
            className="rounded-xl shadow-2xl w-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-xl flex items-center justify-center shadow-lg">
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-accent-foreground">50+</p>
              <p className="text-accent-foreground/80 text-xs">Years Exp.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Who We Are</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            About Ace Garden Suite Inc.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Ace Garden Suite is a residential and commercial construction contractor in the GTA with over 50 years of combined experience. We deliver quality craftsmanship, innovative design, and reliable service to every project.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From garden suites and laneway homes to full renovations, our team handles every detail — permits, design, construction, and finishing — so you don't have to.
          </p>
          <a href="#contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
