import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Garden Suites", href: "#models" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/logo.png" alt="Ace Garden Suite" className="w-10 h-10 rounded-lg" />
          <span className={`font-heading font-bold text-lg ${scrolled ? "text-foreground" : "text-card"}`}>
            Ace Garden Suite
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-card"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6">
              Get a Quote
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-card"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-card"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md shadow-lg mt-2 mx-4 rounded-lg p-6 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-foreground font-medium hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Get a Quote
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
