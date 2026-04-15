import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Modern garden suite with landscaped backyard"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/80" />

    <div className="relative z-10 container mx-auto text-center px-4">
      <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
        Toronto's Trusted Builder
      </p>
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-card leading-tight mb-6 animate-fade-up-delay">
        Building Trust Through
        <br />
        <span className="text-gradient">Quality Construction</span>
      </h1>
      <p className="text-card/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
        Innovative designs, sustainable solutions, and expert craftsmanship across the GTA
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
        <a href="#contact">
          <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 text-base px-8 py-6 font-semibold">
            Contact Us
          </Button>
        </a>
        <a href="#projects">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-semibold">
            View Projects
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
