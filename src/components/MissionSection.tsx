import { motion } from "framer-motion";
import { Target, Zap, Trophy, Users } from "lucide-react";

const missions = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every component optimized for maximum performance and reliability on the world's most demanding circuits.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Pioneering technologies that push the boundaries of what's possible in motorsport and beyond.",
  },
  {
    icon: Trophy,
    title: "Championship DNA",
    description: "Decades of racing heritage driving us toward excellence in every competition we enter.",
  },
  {
    icon: Users,
    title: "Team Excellence",
    description: "The world's finest engineers, drivers, and strategists working as one unstoppable force.",
  },
];

export const MissionSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Built for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Victory
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our mission is simple: win. Everything we do is designed to deliver
            championship-winning performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              className="group relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-intense"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <mission.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {mission.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform translate-x-8 translate-y-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
