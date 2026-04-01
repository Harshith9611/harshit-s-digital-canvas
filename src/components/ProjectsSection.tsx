import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "IPO Web Application and REST API Development",
    status: "Completed",
    category: "Web Application",
    description:
      "Developed a full-stack IPO subscription and allotment tracking platform simulating real-world financial workflows. Designed a React.js UI for displaying IPO info including price band, issue size, and listing gains. Built backend services using REST API architecture. Implemented features for CMP, return percentage, and listing performance tracking.",
    tech: ["React.js"],
    github: "https://github.com/Harshith9611/BlueStock-front-end",
  },
  {
    title: "Smart AI Car",
    status: "Completed",
    category: "IOT",
    description:
      "An intelligent autonomous vehicle system designed to enhance road safety and driving efficiency using artificial intelligence and IoT technologies. The system is capable of real-time decision-making by analyzing its surroundings through sensors and AI-based algorithms.",
    tech: ["Arduino IDE"],
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />

          {/* Filter */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-200 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary glow-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="glass p-6 rounded-2xl hover-lift hover-glow group flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono text-primary px-2 py-0.5 rounded-md bg-primary/10">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-accent">
                    <CheckCircle size={12} /> {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded bg-muted/60 text-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
