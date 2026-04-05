import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Modern Kitchen Renovation" },
  { img: project2, title: "Luxury Bathroom Design" },
  { img: project3, title: "Exterior Transformation" },
  { img: project4, title: "Basement Living Space" },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Our Work</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="group relative rounded-xl overflow-hidden cursor-pointer">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              width={640}
              height={512}
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-300 flex items-end">
              <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-xl font-bold text-card">{p.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
