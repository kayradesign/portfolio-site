import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Palette, Terminal, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const skills = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually stunning user interfaces',
    stats: '50+ Projects'
  },
  {
    icon: Code2,
    title: 'Interactive Prototyping',
    description: 'Building high-fidelity prototypes with advanced interactions',
    stats: '100+ Prototypes'
  },
  {
    icon: Terminal,
    title: 'Front End Development',
    description: 'Building responsive and performant web applications',
    stats: '200+ Components'
  },
  {
    icon: TrendingUp,
    title: 'Brand Strategy',
    description: 'Developing cohesive brand identities and visual systems',
    stats: '5+ Years'
  }
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-8xl mb-8 text-white" style={{ fontWeight: 700 }}>
            EXPERTISE &<br />
            <span className="text-accent">CAPABILITIES</span>
          </h2>
          <p className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            An aspiring UI/UX designer at the beginning of his journey, eager to learn and grow. Endlessly curious, with a clear focus on developing through every project.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const cardY = useTransform(scrollYProgress, [0, 1], [50 + index * 20, -50 - index * 20]);
            
            return (
              <motion.div
                key={index}
                style={{ y: cardY }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-hover"
              >
            
              <div className="relative h-full min-h-[320px] flex flex-col p-8 md:p-10 bg-secondary/30 border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-500 hover:shadow-[0_0_40px_rgba(143,190,159,0.3)]">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(143, 190, 159, 0.15) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="relative z-10 flex flex-col h-full"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="w-16 h-16 mb-6 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0"
                    style={{
                      boxShadow: '0 0 20px rgba(143, 190, 159, 0.3)',
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className="w-8 h-8 text-accent drop-shadow-[0_0_10px_rgba(143,190,159,0.8)]" />
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl mb-4 text-white flex-shrink-0" style={{ fontWeight: 700 }}>
                    {skill.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-base md:text-lg flex-grow">
                    {skill.description}
                  </p>
                </motion.div>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                />
              </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 pr-8" style={{ width: 'max-content' }}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
                style={{ width: '240px', flexShrink: 0 }}
              >
                <div className="relative h-full min-h-[260px] flex flex-col p-5 bg-secondary/30 border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-500">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(143, 190, 159, 0.15) 0%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div
                      className="w-12 h-12 mb-4 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0"
                      style={{
                        boxShadow: '0 0 20px rgba(143, 190, 159, 0.3)',
                      }}
                    >
                      <skill.icon className="w-6 h-6 text-accent drop-shadow-[0_0_10px_rgba(143,190,159,0.8)]" />
                    </div>

                    <h3 className="text-lg mb-2 text-white flex-shrink-0" style={{ fontWeight: 700 }}>
                      {skill.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs leading-relaxed flex-grow">
                      {skill.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
