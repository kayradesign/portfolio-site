import { motion } from 'motion/react';

interface MarqueeTextProps {
  text: string[];
}

export function MarqueeText({ text }: MarqueeTextProps) {
  // Calculate the width of one complete set of text items
  const itemWidth = text.length * 200; // Approximate width per item
  
  return (
    <div className="relative py-4 border-y border-border overflow-hidden bg-secondary/30">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [-itemWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {text.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-xl md:text-2xl mx-6 text-white" style={{ fontWeight: 700 }}>
                  {item}
                </span>
                <span className="text-xl md:text-2xl mx-6 text-accent">•</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
