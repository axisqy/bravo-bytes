import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatCardProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

const StatCard = ({ end, label, suffix = "", prefix = "", delay = 0 }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <motion.div
      id={`stat-${label}`}
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-secondary border border-primary/10 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-glow">
        <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <motion.div
            className="text-5xl md:text-6xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2"
            key={count}
          >
            {prefix}{count.toLocaleString()}{suffix}
          </motion.div>
          <div className="text-muted-foreground font-semibold">{label}</div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Dominating the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Circuit
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pushing the limits of performance with cutting-edge technology and
            relentless innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard end={372} label="Top Speed" suffix=" KM/H" delay={0} />
          <StatCard end={58} label="Race Wins" delay={0.1} />
          <StatCard end={12} label="Championships" delay={0.2} />
          <StatCard end={850} label="Horsepower" suffix=" HP" delay={0.3} />
        </div>
      </div>
    </section>
  );
};
