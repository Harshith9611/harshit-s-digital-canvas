import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: <Code2 size={20} />, title: "Full Stack Dev", desc: "React, Spring Boot, Node.js" },
    { icon: <Server size={20} />, title: "Backend Focus", desc: "REST APIs, Scalable Systems" },
    { icon: <Database size={20} />, title: "Databases", desc: "MySQL, MongoDB" },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10 rounded-full" />

          <div className="glass p-6 sm:p-10 rounded-2xl hover-glow">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Computer Science undergraduate with experience in full-stack software development using Java, Spring Boot, React.js, and MySQL. Developed real-world financial workflow applications during internship experience. Strong understanding of Object-Oriented Programming, REST API development, and database management.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Passionate about backend development, scalable systems, and problem solving. Possesses exceptional skills in algorithmic problem-solving and writing efficient, optimized code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="glass p-4 rounded-xl text-center hover-lift"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {h.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{h.title}</h3>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
