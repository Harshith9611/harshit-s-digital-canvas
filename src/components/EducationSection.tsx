import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10 rounded-full" />

          <div className="glass p-6 sm:p-8 rounded-2xl hover-glow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bachelor Of Engineering</h3>
                <p className="text-primary text-sm font-medium">Cambridge Institute Of Technology, North-Campus</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1 mb-3">
                  <MapPin size={12} /> Devanahalli · Expected 2026
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Computer Science Engineering student with strong foundations in Java, Data Structures & Algorithms, and full-stack development. Passionate about building scalable software solutions and solving real-world problems through technology.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
