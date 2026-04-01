import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS", "TypeScript"],
    color: "from-primary to-primary/60",
  },
  {
    title: "Backend",
    skills: ["Node.js", "FastAPI"],
    color: "from-secondary to-secondary/60",
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
    color: "from-accent to-accent/60",
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS"],
    color: "from-primary to-accent",
  },
  {
    title: "AI Tools",
    skills: ["GitHub Copilot"],
    color: "from-secondary to-primary",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass p-5 rounded-2xl hover-lift hover-glow group"
              >
                <div className={`text-xs font-mono uppercase tracking-widest mb-3 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted/60 text-foreground border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
