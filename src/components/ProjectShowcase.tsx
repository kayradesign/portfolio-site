import { useState } from 'react';
import { ProjectDetail } from './ProjectDetail';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  detailedDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  additionalImages: string[];
}

const projects: Project[] = [
  {
    title: "LUXE STORE",
    description: "A premium e-commerce experience with micro-interactions and seamless checkout flow. Focused on conversion optimization and brand storytelling.",
    tags: ["UI/UX", "Figma", "Prototyping"],
    image: "https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTUxNTMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "Luxe Store is a sophisticated e-commerce platform designed for high-end fashion brands. The project focuses on creating an immersive shopping experience that combines elegant aesthetics with intuitive functionality.",
    challenge: "The main challenge was to create a digital shopping experience that matches the luxury of physical boutique shopping, while maintaining fast load times and seamless performance across all devices.",
    solution: "I designed a minimalist interface with carefully crafted micro-interactions, smooth transitions, and an intelligent product recommendation system. The checkout flow was streamlined to reduce cart abandonment while maintaining brand sophistication.",
    results: [
      "42% increase in conversion rate",
      "67% decrease in cart abandonment",
      "95% positive user feedback on checkout experience"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop"
    ]
  },
  {
    title: "MOTION LAB",
    description: "Interactive 3D product configurator enabling real-time customization. Built with performance and visual fidelity in mind.",
    tags: ["3D Design", "WebGL", "Animation"],
    image: "https://images.unsplash.com/photo-1649371568175-701146e6801f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByb2R1Y3QlMjBkZXNpZ258ZW58MXx8fHwxNzYxNTE1MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "Motion Lab revolutionizes product customization with a fully interactive 3D configurator that allows users to personalize products in real-time with photorealistic rendering.",
    challenge: "Creating a 3D configurator that runs smoothly on mid-range devices while maintaining high visual quality and supporting complex product variations.",
    solution: "Implemented an optimized WebGL rendering pipeline with progressive loading, LOD (Level of Detail) systems, and smart asset compression. The interface was designed to be intuitive even for users unfamiliar with 3D tools.",
    results: [
      "60% increase in customer engagement time",
      "35% boost in customization adoption",
      "Runs at 60fps on 90% of target devices"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop"
    ]
  },
  {
    title: "NEURO SYNC",
    description: "AI-powered dashboard for data visualization and analytics. Designed to handle complex information architecture with clarity.",
    tags: ["Dashboard", "Data Viz", "SaaS"],
    image: "https://images.unsplash.com/photo-1758411898049-4de9588be514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNTEzMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "Neuro Sync is an advanced analytics platform that transforms complex data into actionable insights through intelligent visualization and AI-powered recommendations.",
    challenge: "Presenting vast amounts of complex data in an accessible way without overwhelming users, while maintaining real-time performance and customization options.",
    solution: "Developed a modular dashboard system with customizable widgets, smart data filtering, and contextual insights. Used progressive disclosure to present information hierarchically and implemented efficient data streaming for real-time updates.",
    results: [
      "78% faster data interpretation time",
      "92% user satisfaction rating",
      "45% reduction in training time for new users"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
    ]
  },
  {
    title: "PULSE APP",
    description: "Mobile-first fitness tracking application with gamification elements. Emphasis on user engagement and habit formation.",
    tags: ["Mobile", "UI/UX", "Prototyping"],
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxNDMzNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "Pulse App combines fitness tracking with behavioral psychology to help users build lasting healthy habits through engaging gamification and social features.",
    challenge: "Creating a fitness app that users actually stick with long-term, avoiding the common problem of early drop-off after initial enthusiasm wanes.",
    solution: "Designed an achievement system based on habit formation research, incorporating social accountability features and personalized challenges. The UI emphasizes progress over perfection with celebration of small wins.",
    results: [
      "85% 30-day retention rate",
      "3.5x industry average daily active usage",
      "4.8/5.0 app store rating across 50k+ reviews"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=800&fit=crop"
    ]
  },
  {
    title: "PAPAYA",
    description: "Bold brand identity and packaging design for a tropical beverage startup. Vibrant colors meet minimal design language.",
    tags: ["Branding", "Packaging", "Identity"],
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NjE1MTUzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "A comprehensive brand identity system for Papaya, a tropical beverage company targeting health-conscious millennials. The project included logo design, packaging, and brand guidelines.",
    challenge: "Standing out in an oversaturated beverage market while maintaining a premium, organic perception and appealing to environmentally conscious consumers.",
    solution: "Created a bold, minimalist identity using vibrant tropical colors paired with clean typography. The packaging design emphasizes sustainability with recyclable materials and a modern, Instagram-worthy aesthetic.",
    results: [
      "200% increase in brand recognition in 6 months",
      "Featured in 15+ design publications",
      "30% higher shelf appeal in A/B testing"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=800&fit=crop"
    ]
  },
  {
    title: "FINTECH PRO",
    description: "Next-generation banking app with focus on financial literacy and smart budgeting tools. Accessible design for all age groups.",
    tags: ["FinTech", "Mobile", "Design System"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwfGVufDF8fHx8MTc2MTUxNTMzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "A comprehensive financial management platform designed to make banking accessible and educational for users of all financial literacy levels.",
    challenge: "Simplifying complex financial concepts and making them approachable while maintaining security and trust in the interface design.",
    solution: "Developed a progressive disclosure system that gradually introduces financial concepts through contextual education. Created a comprehensive design system ensuring consistency across all platforms.",
    results: [
      "4.7/5.0 user satisfaction score",
      "50% increase in savings goal completion",
      "Awarded Best FinTech UX Design 2024"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1554224311-beee460ae6ba?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=800&fit=crop"
    ]
  }
];

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section id="projects" className="relative min-h-screen py-20 md:py-32">
        {/* Subtle overlay for better readability */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] pointer-events-none" />
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="mb-12 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-5xl md:text-7xl lg:text-8xl text-white mb-4"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              SELECTED
              <br />
              <span className="text-accent">WORKS</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              A curated collection of digital experiences that blend creativity, technology, and strategic thinking.
            </p>
          </motion.div>

          {/* Pinterest-style Grid - 2 Column Layout (Mobil + Desktop) */}
          <div className="grid grid-cols-2 gap-3 md:gap-8 auto-rows-[60px] md:auto-rows-[100px]">
            {projects.map((project, index) => {
              // Pattern: Sol sütun eşit, Sağ sütun (uzun, kısa, kısa)
              // Mobil: Sol 3+3+3=9, Sağ 5+2+2=9 ✅ | Desktop: Sol 4+4+4=12, Sağ 6+3+3=12 ✅
              const rowSpan = 
                index === 0 ? 'row-span-3 md:row-span-4' :   // LUXE STORE (Sol - orta)
                index === 1 ? 'row-span-5 md:row-span-6' :   // MOTION LAB (Sağ - uzun) ✅
                index === 2 ? 'row-span-3 md:row-span-4' :   // NEURO SYNC (Sol - orta)
                index === 3 ? 'row-span-2 md:row-span-3' :   // PULSE APP (Sağ - kısa) ✅
                index === 4 ? 'row-span-3 md:row-span-4' :   // PAPAYA (Sol - orta)
                'row-span-2 md:row-span-3';                  // FINTECH PRO (Sağ - kısa) ✅

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative cursor-pointer ${rowSpan}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedProject(project)}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl md:rounded-2xl bg-secondary h-full w-full"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glowing Border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl md:rounded-2xl border-2"
                    animate={{
                      borderColor: hoveredIndex === index 
                        ? "rgba(168, 230, 163, 0.6)" 
                        : "transparent",
                      boxShadow: hoveredIndex === index
                        ? "0 0 40px rgba(168, 230, 163, 0.3)"
                        : "0 0 0px rgba(168, 230, 163, 0)"
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-end">
                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 20
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 md:px-3 md:py-1 bg-secondary/80 backdrop-blur-sm border border-accent/30 rounded-full text-[10px] md:text-xs text-accent"
                          style={{ fontWeight: 500 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-sm md:text-2xl lg:text-3xl text-white mb-1 md:mb-2"
                      style={{ fontWeight: 700, lineHeight: 1.2 }}
                      animate={{
                        y: hoveredIndex === index ? 0 : 10,
                        opacity: hoveredIndex === index ? 1 : 0.9
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="hidden md:block text-sm text-muted-foreground line-clamp-2 mb-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? "auto" : 0
                      }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* View Project CTA */}
                    <motion.div
                      className="hidden md:flex items-center gap-2 text-accent"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        x: hoveredIndex === index ? 0 : -10
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="text-sm" style={{ fontWeight: 600 }}>
                        View Project
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Project Number Badge */}
                  <motion.div
                    className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-md border"
                    animate={{
                      backgroundColor: hoveredIndex === index 
                        ? "rgba(168, 230, 163, 0.2)" 
                        : "rgba(26, 26, 26, 0.6)",
                      borderColor: hoveredIndex === index
                        ? "rgba(168, 230, 163, 0.4)"
                        : "rgba(168, 230, 163, 0.2)",
                      scale: hoveredIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span 
                      className="text-xs md:text-sm"
                      style={{ 
                        fontWeight: 700,
                        color: hoveredIndex === index ? "#A8E6A3" : "#A8E6A3"
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
