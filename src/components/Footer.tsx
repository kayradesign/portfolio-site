import { motion, useScroll, useTransform } from 'motion/react';
import { Linkedin, Mail, ArrowUpRight, Phone } from 'lucide-react';
import { useRef } from 'react';

// Behance icon as SVG
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 4.5h3.75c1.85 0 3.35 1.5 3.35 3.35s-1.5 3.35-3.35 3.35H6.5V4.5zm0 8.7h4.35c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6H6.5v-7.2zM3 2v20h7.85c3.45 0 6.25-2.8 6.25-6.25 0-2.15-1.1-4.05-2.75-5.2.95-1.1 1.5-2.5 1.5-4.05C15.85 3.6 13.25 1 10.35 1H3v1zm12.5 3.5h6v1.5h-6V5.5z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);

  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:connect@kayra.me' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/yasin-kayra-ciftci' },
    { icon: BehanceIcon, label: 'Behance', href: 'https://www.behance.net/ysnkayra' },
  ];

  return (
    <footer ref={footerRef} id="contact" className="relative py-20 px-4 md:px-8 border-t border-border overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          style={{ y, opacity }}
          className="grid md:grid-cols-2 gap-12 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h3 
              className="text-3xl md:text-7xl mb-6 text-white" 
              style={{ fontWeight: 700 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              LET'S WORK
              <br />
              <span className="text-accent">TOGETHER</span>
            </motion.h3>
            <motion.p 
              className="text-muted-foreground text-lg mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Available for freelance projects and full-time opportunities
            </motion.p>

            {/* Availability badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(200, 215, 203, 0.2)',
                  '0 0 40px rgba(200, 215, 203, 0.4)',
                  '0 0 20px rgba(200, 215, 203, 0.2)',
                ],
              }}
            >
              <motion.div
                className="w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-accent text-sm" style={{ fontWeight: 600 }}>
                AVAILABLE NOW
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end"
          >
            <div className="flex gap-4 mb-8">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="cursor-hover relative w-14 h-14 rounded-xl border border-border flex items-center justify-center group overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="absolute inset-0 bg-accent"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon className="w-5 h-5 relative z-10 group-hover:text-background transition-colors" />
                </motion.a>
              ))}
            </div>
            
            <div className="space-y-4">
              <motion.a 
                href="mailto:connect@kayra.me"
                className="cursor-hover group flex items-center gap-3 text-lg md:text-3xl hover:text-accent transition-colors"
                style={{ fontWeight: 600 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 5 }}
              >
                connect@kayra.me
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              
              <motion.a 
                href="tel:+905451763389"
                className="cursor-hover group flex items-center gap-3 text-base md:text-xl text-muted-foreground hover:text-accent transition-colors"
                style={{ fontWeight: 500 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                +90 545 176 33 89
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm mb-8">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              © {currentYear} Kayra. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Designed & Developed with <span className="text-accent">★</span> precision
            </motion.p>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-hover mx-auto flex items-center gap-2 px-6 py-3 border border-accent/30 rounded-full hover:bg-accent/10 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-accent text-sm" style={{ fontWeight: 600 }}>BACK TO TOP</span>
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUpRight className="w-4 h-4 text-accent rotate-45" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
