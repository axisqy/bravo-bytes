import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const footerLinks = [
  {
    title: "Racing",
    links: ["Formula 1", "IndyCar", "Extreme E", "Calendar"],
  },
  {
    title: "Innovation",
    links: ["Technology", "Sustainability", "Applied", "Partners"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "News", "Contact"],
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-black bg-gradient-primary bg-clip-text text-transparent mb-4">
                McLaren Racing
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Pushing the boundaries of speed, innovation, and engineering
                excellence on every corner of every circuit.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-secondary border border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-bold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">
            © 2024 McLaren Racing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
