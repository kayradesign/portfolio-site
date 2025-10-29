import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
  onClick: () => void;
}

export function ProjectCard({ title, description, image, tags, index, onClick }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    
    // Update mouse position for explore cursor
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px", amount: 0.3 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-32 ${isEven ? '' : 'md:grid-flow-dense'}`}
    >
      <motion.div
        ref={ref}
        className={`relative group cursor-hover ${isEven ? '' : 'md:col-start-2'}`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        whileHover={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-secondary">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Explore Cursor */}
          {isHovered && (
            <motion.div
              className="absolute pointer-events-none z-50"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                x: '-50%',
                y: '-50%',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Gradient glow */}
              <motion.div
                className="absolute inset-0 w-32 h-32 rounded-full blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(143, 190, 159, 0.4) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* White circle with text */}
              <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span 
                  className="text-background text-lg tracking-wide"
                  style={{ fontWeight: 600 }}
                >
                  Explore
                </span>
              </div>
            </motion.div>
          )}
        </div>
        <div className="absolute inset-0 rounded-lg border border-accent/0 group-hover:border-accent transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(143,190,159,0.3)]" />
      </motion.div>

      <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 
            className="text-3xl md:text-7xl mb-6 cursor-hover group" 
            style={{ fontWeight: 700 }}
            onClick={onClick}
          >
            <span className="inline-block transition-colors duration-300 group-hover:text-accent">
              {title}
            </span>
          </h3>
          <p className="text-base md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-secondary border border-border rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
