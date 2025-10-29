import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // Add a small delay to ensure mobile menu closes first
    setTimeout(() => {
      const element = document.querySelector(sectionId);
      if (element) {
        const navHeight = 80; // Approximate navigation height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const navItems = [
    { name: 'Work', id: '#projects' },
    { name: 'About', id: '#about' },
    { name: 'Contact', id: '#contact' }
  ];

  return (
    <>
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="cursor-hover text-sm text-muted-foreground hover:text-accent transition-colors"
                style={{ fontWeight: 500 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
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
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-64 bg-background border-l border-border z-50 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full p-6 pt-20">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.id}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="text-lg text-muted-foreground hover:text-accent transition-colors"
                      style={{ fontWeight: 500 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  
                  <motion.a
                    href="https://drive.google.com/file/d/1YuHfV85aAYdB9jqhKnmbNgFK2GmKv-Kr/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 border border-accent/30 rounded-full text-sm text-accent hover:bg-accent/10 transition-all mt-4"
                    style={{ fontWeight: 600 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
