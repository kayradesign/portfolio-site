import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated text background - Desktop */}
      <motion.div
        className="hidden md:flex absolute inset-0 items-center justify-center opacity-5"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-[20vw] text-white" style={{ fontWeight: 900 }}>
          KAYRA
        </span>
      </motion.div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <motion.div
            className="inline-block px-6 py-2 mb-8 border border-accent/30 rounded-full bg-accent/5"
            animate={{
              boxShadow: [
                '0 0 20px rgba(143, 190, 159, 0.3)',
                '0 0 40px rgba(143, 190, 159, 0.6)',
                '0 0 20px rgba(143, 190, 159, 0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-accent text-sm" style={{ fontWeight: 600 }}>
              ✦ AVAILABLE FOR WORK
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-8xl lg:text-9xl tracking-tight mb-6 text-white relative" 
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Mobile KAYRA background - positioned between DIGITAL and DESIGNER */}
            <motion.span
              className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] opacity-5 whitespace-nowrap pointer-events-none"
              style={{ fontWeight: 900 }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              KAYRA
            </motion.span>

            <motion.span
              className="inline-block relative z-10"
              animate={{
                textShadow: [
                  '0 0 20px rgba(143, 190, 159, 0)',
                  '0 0 40px rgba(143, 190, 159, 0.4)',
                  '0 0 20px rgba(143, 190, 159, 0)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              DIGITAL
            </motion.span>
            <br />
            <motion.span 
              className="text-accent inline-block relative z-10"
              animate={{
                textShadow: [
                  '0 0 30px rgba(143, 190, 159, 0.6)',
                  '0 0 50px rgba(143, 190, 159, 0.8)',
                  '0 0 30px rgba(143, 190, 159, 0.6)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              DESIGNER
            </motion.span>
          </motion.h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 px-4"
        >
          Crafting premium digital experiences through{' '}
          <span className="text-white" style={{ fontWeight: 600 }}>UI/UX Design</span>,{' '}
          <span className="text-white" style={{ fontWeight: 600 }}>Creative Design</span> &{' '}
          <span className="text-white" style={{ fontWeight: 600 }}>Front End Development</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <motion.a 
            href="#projects" 
            className="cursor-hover inline-flex items-center gap-2 px-8 py-4 bg-accent text-background rounded-full relative overflow-hidden group"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a 
            href="#contact" 
            className="cursor-hover inline-block px-8 py-4 border-2 border-accent text-accent rounded-full hover:bg-accent/10 transition-all"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground cursor-hover"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm tracking-wider" style={{ fontWeight: 600 }}>SCROLL</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </motion.div>
    </div>
  );
}
