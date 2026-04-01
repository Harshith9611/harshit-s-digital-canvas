import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  {
    name: "Python For Data Science",
    platform: "Infosys Spring Board",
    date: "April 2025",
    skills: "Python",
  },
  {
    name: "Oracle Generative AI",
    platform: "Oracle University",
    date: "June 2025",
    skills: "Gen AI",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass p-5 rounded-2xl hover-lift hover-glow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{cert.name}</h3>
                    <p className="text-xs text-primary mt-0.5">{cert.platform}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-muted/60 border border-border">
                      {cert.skills}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
