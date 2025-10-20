import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const cars = [
  {
    name: "MCL38",
    year: "2024",
    description: "Our latest Formula 1 contender featuring groundbreaking aerodynamics and hybrid power.",
    specs: ["1000+ HP", "740kg", "0-200 in 4.5s"],
  },
  {
    name: "MCL60",
    year: "2023",
    description: "Championship-winning innovation with next-generation downforce management.",
    specs: ["950 HP", "735kg", "360+ km/h"],
  },
  {
    name: "765LT",
    year: "2023",
    description: "Road-legal supercar pushing the boundaries of performance and luxury.",
    specs: ["765 HP", "1339kg", "0-100 in 2.8s"],
  },
];

export const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Engineering{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each machine represents years of innovation, testing, and refinement
          </p>
        </motion.div>

        <div className="space-y-32">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
                style={{ y: index % 2 === 0 ? y : undefined }}
              >
                <motion.div
                  className="flex-1"
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl" />
                    <div className="relative aspect-video bg-gradient-to-br from-secondary to-muted rounded-3xl overflow-hidden border border-primary/10">
                      <motion.div
                        className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-black text-primary/20">
                          {car.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1 space-y-6"
                  initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div>
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
                      {car.year}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-4">
                      {car.name}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {car.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {car.specs.map((spec) => (
                      <div
                        key={spec}
                        className="px-6 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-colors duration-300"
                      >
                        <div className="font-bold text-primary">{spec}</div>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="bg-gradient-primary text-primary-foreground font-bold hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
