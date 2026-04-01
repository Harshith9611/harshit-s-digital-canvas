import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-foreground font-medium">Harshit S</span>. All rights reserved.
      </p>
      <div className="flex items-center gap-3">
        {[
          { icon: <GithubIcon size={16} />, href: "https://github.com/Harshith9611" },
          { icon: <LinkedinIcon size={16} />, href: "https://www.linkedin.com/in/harshith-yadav-dev/" },
          { icon: <Mail size={16} />, href: "mailto:harshithyadav662@gmail.com" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors hover:bg-muted/50"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
