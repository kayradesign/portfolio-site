import { ProjectCard } from './ProjectCard';
import { useState, useRef } from 'react';
import { ProjectDetail } from './ProjectDetail';
import { motion, useScroll, useTransform } from 'motion/react';

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
  }
];

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <>
      <section ref={sectionRef} id="projects" className="relative py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            style={{ y: titleY, opacity: titleOpacity }}
            className="mb-24 text-center"
          >
            <h2 className="text-6xl md:text-8xl mb-6 text-white" style={{ fontWeight: 700 }}>
              SELECTED
              <br />
              <span className="text-accent">WORKS</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
