import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
  onClick: () => void;
  layout?: 'large' | 'medium' | 'mobile';
}

export function ProjectCard({ title, description, image, tags, index, onClick, layout = 'large' }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [mounted, setMounted] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Parallax for image - moves opposite to cursor
  const imageX = useMotionValue(0);
  const imageY = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const imageXSpring = useSpring(imageX, { stiffness: 150, damping: 20 });
  const imageYSpring = useSpring(imageY, { stiffness: 150, damping: 20 });

  // 3D tilt for card
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  // Scroll-triggered animations
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    amount: 0.3
  });

  useEffect(() => {
    setMounted(true);
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
    
    // Card tilt
    x.set(xPct);
    y.set(yPct);
    
    // Image parallax - opposite direction, reduced intensity
    imageX.set(-xPct * 20);
    imageY.set(-yPct * 20);
    
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
    imageX.set(0);
    imageY.set(0);
    setIsHovered(false);
  };

  // Mobile layout - simple stacking
  if (layout === 'mobile') {
    return (
      <div className="space-y-6">
        <div 
          className="relative overflow-hidden rounded-lg aspect-[16/10] bg-secondary cursor-pointer"
          onClick={onClick}
        >
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        
        <div>
          <h3 
            className="text-3xl mb-4 cursor-pointer" 
            style={{ fontWeight: 700 }}
            onClick={onClick}
          >
            {title}
          </h3>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 bg-secondary border border-border rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout - asymmetric grid with animations
  return (
    <motion.div
      ref={ref}
      className="relative group cursor-hover"
      style={isMobile ? {} : {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ 
        opacity: 0, 
        scale: 0.98,
        rotateZ: -1
      }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1,
        rotateZ: 0
      } : {
        opacity: 0, 
        scale: 0.98,
        rotateZ: -1
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      whileHover={isMobile ? {} : { scale: 1.02 }}
    >
      {/* Image container with parallax */}
      <motion.div 
        ref={imageRef}
        className="relative overflow-hidden rounded-lg bg-secondary"
        style={{
          aspectRatio: layout === 'large' ? '16/10' : '4/5',
        }}
      >
        <motion.div
          className="w-full h-full"
          style={{
            x: imageXSpring,
            y: imageYSpring,
          }}
        >
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{
              transformOrigin: 'center center',
            }}
            loading="eager"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Explore Cursor - Desktop only */}
        {isHovered && !isMobile && (
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
                background: 'radial-gradient(circle, rgba(168, 230, 163, 0.4) 0%, transparent 70%)',
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
      </motion.div>

      {/* Border effect */}
      <div className="absolute inset-0 rounded-lg border border-accent/0 group-hover:border-accent transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(168,230,163,0.3)]" />

      {/* Text content overlay - appears on hover for desktop */}
      <motion.div 
        className="mt-6 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 
          className={`cursor-hover group ${layout === 'large' ? 'text-5xl' : 'text-4xl'}`}
          style={{ fontWeight: 700, lineHeight: 1.1 }}
        >
          <span className="inline-block transition-colors duration-300 group-hover:text-accent">
            {title}
          </span>
        </h3>
        
        <p className={`text-muted-foreground leading-relaxed ${layout === 'large' ? 'text-lg' : 'text-base'}`}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
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
    </motion.div>
  );
}
