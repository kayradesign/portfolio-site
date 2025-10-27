import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <motion.a
          href="#"
          className="cursor-hover flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          {/* Logo */}
          <motion.div
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center relative overflow-hidden"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-background text-xl relative z-10" style={{ fontWeight: 800 }}>
              K
            </span>
          </motion.div>
          
          <span className="text-lg text-white" style={{ fontWeight: 700 }}>
            KAYRA
          </span>
        </motion.a>

        <div className="flex items-center gap-6">
          {['Work', 'About', 'Contact'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="cursor-hover text-sm text-muted-foreground hover:text-accent transition-colors"
              style={{ fontWeight: 500 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          
          <motion.a
            href="https://drive.google.com/file/d/1YuHfV85aAYdB9jqhKnmbNgFK2GmKv-Kr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover flex items-center gap-2 px-4 py-2 border border-accent/30 rounded-full text-sm text-accent hover:bg-accent/10 transition-all hover:shadow-[0_0_20px_rgba(143,190,159,0.4)]"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
