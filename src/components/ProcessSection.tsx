import { motion, useScroll, useTransform } from 'motion/react';
import { Search, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'RESEARCH',
    description: 'Deep dive into user needs, market trends, and competitive analysis'
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'IDEATE',
    description: 'Brainstorm creative solutions and craft wireframes & prototypes'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'DESIGN',
    description: 'Build high-fidelity designs with pixel-perfect precision'
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'DELIVER',
    description: 'Test, iterate, and hand off production-ready assets'
  }
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-32 px-4 md:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl mb-8 text-white" style={{ fontWeight: 700 }}>
            MY CREATIVE
            <br />
            <span className="text-accent">PROCESS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const cardY = useTransform(scrollYProgress, [0, 1], [60 + index * 15, -60 - index * 15]);
            
            return (
              <motion.div
                key={index}
                style={{ y: cardY }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-hover h-full"
              >
            
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-24 left-full w-full h-px bg-gradient-to-r from-accent/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}

              <div className="relative h-full bg-secondary/30 border border-border rounded-2xl p-8 flex flex-col hover:border-accent transition-all duration-500 hover:shadow-[0_0_40px_rgba(143,190,159,0.2)]">
                <motion.div
                  className="mb-6"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative w-20 h-20 mx-auto">
                    {/* Icon container */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center"
                      style={{
                        boxShadow: '0 0 20px rgba(143, 190, 159, 0.3)',
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <step.icon className="w-10 h-10 text-accent drop-shadow-[0_0_10px_rgba(143,190,159,0.8)]" />
                    </motion.div>

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-accent/30 blur-xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>

                <div className="text-center flex-1 flex flex-col">
                  <motion.div
                    className="text-5xl mb-4 text-accent/30"
                    style={{ fontWeight: 700 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-xl mb-3 text-white" style={{ fontWeight: 700 }}>
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/30 transition-all duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
