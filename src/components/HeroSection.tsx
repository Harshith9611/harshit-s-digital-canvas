import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MapPin, Briefcase, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden">
      {/* BG Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[150px] animate-pulse-glow" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-primary font-mono text-sm mb-3 tracking-wider">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Harshit S</span>
            </h1>

            <div className="text-xl sm:text-2xl font-medium text-muted-foreground mb-6 h-8">
              <TypeAnimation
                sequence={["Software Developer", 2000, "Developer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-foreground"
              />
            </div>

            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 text-balance">
              Building Scalable Applications · DSA Enthusiast
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><MapPin size={14} className="text-primary" /> Bengaluru</span>
              <span className="flex items-center gap-1"><Briefcase size={14} className="text-primary" /> Fresher</span>
            </div>

            {/* Social */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              {[
                { icon: <Github size={18} />, href: "https://github.com/Harshith9611" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/harshith-yadav-dev/" },
                { icon: <Mail size={18} />, href: "mailto:harshithyadav662@gmail.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass hover-lift hover-glow text-muted-foreground hover:text-primary transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-spin-slow opacity-60 blur-sm" />
              <div className="absolute inset-1 rounded-full bg-background" />
              <img
                src={profileImg}
                alt="Harshit S"
                className="absolute inset-2 rounded-full object-cover w-[calc(100%-16px)] h-[calc(100%-16px)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
