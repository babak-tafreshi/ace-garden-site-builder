const Footer = () => (
  <footer className="bg-charcoal py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <span className="font-heading text-accent-foreground font-bold">A</span>
            </div>
            <span className="font-heading font-bold text-card text-lg">Ace Garden Suite</span>
          </div>
          <p className="text-card/60 text-sm leading-relaxed">
            Building trust through quality construction across the Greater Toronto Area.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-card mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Services", "Garden Suites", "About Us", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/ /g, "").replace("gardensuites", "models").replace("aboutus", "about")}`}
                  className="text-card/60 hover:text-accent transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-card mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-card/60">
            <li>Garden Suites</li>
            <li>Renovations</li>
            <li>New Construction</li>
            <li>Electrical & Security</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-card mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-card/60">
            <li>+1 (416) 602-8070</li>
            <li>info@acegardensuite.com</li>
            <li>Toronto, ON, Canada</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-card/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-card/50 text-sm">© {new Date().getFullYear()} Ace Garden Suite Inc. All rights reserved.</p>
        <a href="#" className="text-card/50 text-sm hover:text-accent transition-colors">
          Terms and Conditions
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
