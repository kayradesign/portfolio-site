import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

export function FloatingOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll to opacity and scale
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.15], [100, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;

    let rotation = 0;
    let pulse = 0;

    const drawOrb = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 200 + Math.sin(pulse) * 20;

      // Outer glow layers - sage green with copper accent
      for (let i = 0; i < 5; i++) {
        const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius + i * 30);
        glowGradient.addColorStop(0, `rgba(200, 215, 203, ${0.1 - i * 0.02})`);
        glowGradient.addColorStop(1, 'rgba(200, 215, 203, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + i * 30, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw multiple rotating rings - brighter sage green
      for (let i = 0; i < 5; i++) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation + (i * Math.PI / 4));
        
        // Ring with gradient
        const ringGradient = ctx.createLinearGradient(-radius, 0, radius, 0);
        ringGradient.addColorStop(0, 'rgba(143, 190, 159, 0)');
        ringGradient.addColorStop(0.5, `rgba(143, 190, 159, ${0.7 - i * 0.1})`);
        ringGradient.addColorStop(1, 'rgba(143, 190, 159, 0)');
        
        ctx.strokeStyle = ringGradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * (0.9 - i * 0.15), radius * (0.3 - i * 0.05), 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      }

      // Rotating dots - vibrant green accent matching cursor
      for (let i = 0; i < 8; i++) {
        const angle = rotation * 2 + (i * Math.PI / 4);
        const x = centerX + Math.cos(angle) * (radius * 0.7);
        const y = centerY + Math.sin(angle) * (radius * 0.7);
        
        const dotGradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
        dotGradient.addColorStop(0, 'rgba(143, 190, 159, 1)');
        dotGradient.addColorStop(0.5, 'rgba(143, 190, 159, 0.6)');
        dotGradient.addColorStop(1, 'rgba(143, 190, 159, 0)');
        
        ctx.fillStyle = dotGradient;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      }

      // Center sphere with pulsing effect - sage green
      const sphereGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 80);
      sphereGradient.addColorStop(0, `rgba(200, 215, 203, ${0.6 + Math.sin(pulse * 2) * 0.2})`);
      sphereGradient.addColorStop(0.5, 'rgba(200, 215, 203, 0.3)');
      sphereGradient.addColorStop(1, 'rgba(200, 215, 203, 0)');
      
      ctx.fillStyle = sphereGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.fill();

      rotation += 0.008;
      pulse += 0.05;
      requestAnimationFrame(drawOrb);
    };

    drawOrb();
  }, []);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
      style={{
        opacity,
        scale,
        y,
      }}
    >
      <motion.div
        animate={{
          y: [-30, 30, -30],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }
        }}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </motion.div>
    </motion.div>
  );
}
