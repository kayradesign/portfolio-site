import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from './ProjectShowcase';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 overflow-y-auto p-4 md:p-8"
        onClick={onClose}
      >
        <div className="min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto py-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="cursor-hover sticky top-8 left-full ml-auto w-14 h-14 rounded-full border-2 border-accent/50 bg-background/90 backdrop-blur-sm flex items-center justify-center group z-50 shadow-lg mb-8"
              whileHover={{ scale: 1.1, rotate: 90, borderColor: 'rgba(143, 190, 159, 1)' }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
            </motion.button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent"
                    style={{ fontWeight: 600 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <h2 className="text-5xl md:text-7xl text-white mb-6" style={{ fontWeight: 700 }}>
                {project.title}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {project.description}
              </p>
            </motion.div>

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-lg overflow-hidden mb-16 border border-accent/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Detailed sections */}
            <div className="space-y-16 mb-16">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl text-white mb-4" style={{ fontWeight: 700 }}>
                  Overview
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.detailedDescription}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-secondary/30 border border-border rounded-lg p-8"
              >
                <h3 className="text-3xl md:text-4xl text-white mb-4" style={{ fontWeight: 700 }}>
                  The Challenge
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl md:text-4xl text-white mb-4" style={{ fontWeight: 700 }}>
                  The Solution
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Additional Images Grid */}
              {project.additionalImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {project.additionalImages.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="aspect-video rounded-lg overflow-hidden border border-accent/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={img}
                        alt={`${project.title} detail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-accent/5 border border-accent/20 rounded-lg p-8"
              >
                <h3 className="text-3xl md:text-4xl text-white mb-6" style={{ fontWeight: 700 }}>
                  Key Results
                </h3>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-center py-8"
            >
              <motion.button
                onClick={onClose}
                className="cursor-hover px-8 py-4 border border-accent/30 rounded-full hover:bg-accent/10 transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-accent" style={{ fontWeight: 600 }}>
                  BACK TO PROJECTS
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
