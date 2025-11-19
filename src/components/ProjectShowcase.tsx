import { useState, useEffect } from 'react';
import { ProjectDetail } from './ProjectDetail';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

// Placeholder images - replace with actual project images
const imgBluesenseMainCover = "https://images.unsplash.com/photo-1734120273696-596f96658db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGFpJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1NzYwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgBluesenseMobileCover = "https://images.unsplash.com/photo-1734120273696-596f96658db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGFpJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1NzYwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgBluesenseHeader = "https://images.unsplash.com/photo-1734120273696-596f96658db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGFpJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1NzYwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgBluesenseDetail1 = "https://images.unsplash.com/photo-1734120273696-596f96658db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGFpJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1NzYwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgBluesenseDetail3 = "https://images.unsplash.com/photo-1734120273696-596f96658db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGFpJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1NzYwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgBluesenseMap = "https://images.unsplash.com/photo-1734120273696-596f96658db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGFpJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1NzYwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgAlnixAgroCover = "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzU3NjAzMnww&ixlib=rb-4.1.0&q=80&w=1080";
const imgAlnixAgroMobileCover = "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzU3NjAzMnww&ixlib=rb-4.1.0&q=80&w=1080";
const imgAlnixAgroSolutions = "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzU3NjAzMnww&ixlib=rb-4.1.0&q=80&w=1080";
const imgAlnixAgroAbout = "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzU3NjAzMnww&ixlib=rb-4.1.0&q=80&w=1080";
const imgAlnixAgroMobile = "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzU3NjAzMnww&ixlib=rb-4.1.0&q=80&w=1080";
const imgStilistCover = "https://images.unsplash.com/photo-1675845929869-011079187b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2MzU3NjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const imgSocialMediaCover = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1NzEyODV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgSocialMediaMobileCover = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1NzEyODV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgOzelGunGonderisi = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1NzEyODV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgProductHighlight = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1NzEyODV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgVizyonVeKultur1 = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1NzEyODV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgNewsItem1 = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1NzEyODV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const img41 = "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzYzNTE3OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgFrame710 = "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzYzNTE3OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgFoodMore11 = "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzYzNTE3OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgAaaaaa1 = "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNTYwNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080";

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
    title: "BLUESENSE",
    description: "AI-powered skincare application and corporate web design for a Canada-based AI company. Completed during a remote internship.",
    tags: ["UI/UX", "Digital Design", "Mobile", "AI"],
    image: imgBluesenseMainCover,
    detailedDescription: "Bluesense is a cutting-edge AI company specializing in smart beauty solutions. During my remote internship, I contributed to the design of their flagship Smart Beauty App—an AI-powered skincare application that provides personalized skin analysis and treatment recommendations. I designed user-centric web and mobile interfaces, actively participating in wireframing and prototyping processes using Figma. Throughout the project, I created both low and high-fidelity designs and iteratively revised them based on user feedback, gaining hands-on experience in collaborative workflows and modern design practices. I also designed the header section and key visual components for their corporate website at bluesense.ai.",
    challenge: "The challenge was to create an intuitive mobile experience for a complex AI-driven skincare analysis tool while ensuring the web presence communicated the brand's technological sophistication and trustworthiness to B2B clients.",
    solution: "For the Smart Beauty App, I designed a clean, modern interface that simplifies complex AI recommendations into digestible insights. The dermatologist finder feature uses interactive maps for seamless navigation. For the website, I created a futuristic header design with neural network visuals that immediately conveys the company's AI expertise.",
    results: [
      "Contributed to product development cycle",
      "Designed core features for AI-powered mobile app",
      "Created corporate web assets for bluesense.ai",
      "Collaborated remotely with international team"
    ],
    additionalImages: [
      "video:https://drive.google.com/file/d/1ppM1v-LV44-wdxzXpWOf5sOfLJDUXOD8/preview",
      imgBluesenseDetail1,
      imgBluesenseMap,
      imgBluesenseDetail3
    ]
  },
  {
    title: "STILIST APP",
    description: "Fashion social media app designed for Juniors company. A platform for sharing outfit ideas and getting style support from the community.",
    tags: ["UI/UX", "Mobile App", "UX Research", "Social Media"],
    image: imgStilistCover,
    detailedDescription: "During my role as Jr UI/UX Designer at Juniors company, I actively contributed to the Stilist mobile app project from concept to design. This comprehensive project involved conducting market research to understand user needs in the fashion social space, performing UX research to define user flows and pain points, selecting a cohesive color palette that resonated with our target audience, and designing the entire application from scratch. Stilist is a social media platform designed to help users share their outfit choices, get fashion advice, receive style recommendations, and connect with a community passionate about personal style and fashion.",
    challenge: "Creating an engaging social media platform specifically for fashion enthusiasts where users could comfortably share their daily outfits, ask for styling advice, and receive constructive feedback from a supportive community, while ensuring the interface remained intuitive and visually appealing to fashion-conscious users.",
    solution: "Through comprehensive market and UX research, I designed a user-friendly mobile interface that prioritizes visual content sharing and community interaction. The color palette was carefully selected to feel modern and fashion-forward, while the typography and layout emphasized clarity and easy navigation. I created wireframes and user flows that streamlined the process of posting outfits, browsing community content, and engaging with other users' style choices.",
    results: [
      "Completed full mobile app design from research to final UI",
      "Conducted comprehensive market and UX research",
      "Developed brand-aligned color palette and design system",
      "Designed user flows for outfit sharing and community engagement",
      "Contributed to design decisions as part of Juniors team"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop"
    ]
  },
  {
    title: "SOCIAL MEDIA",
    description: "High-impact social media content designs for diverse brands and campaigns across Instagram, TikTok, and LinkedIn platforms.",
    tags: ["Social Media", "Graphic Design", "Content Creation", "Branding"],
    image: imgSocialMediaCover,
    detailedDescription: "This portfolio showcases my expertise in developing high-impact social media designs that drive engagement and build brand identity. Using industry-standard tools including Adobe Photoshop, Canva, and Figma, I've created scroll-stopping visuals for various platforms, translating strategic goals into compelling content. The work demonstrates my proficiency across different formats—from conceptualization to final execution—including posts, stories, reels, carousels, and video content for Instagram, TikTok, LinkedIn, and other social platforms. Each design is carefully crafted to resonate with target audiences while maintaining brand consistency and maximizing engagement metrics.",
    challenge: "Creating visually compelling social media content that cuts through platform noise, captures attention within seconds, maintains brand identity across diverse campaigns, and adapts seamlessly to different platform requirements and aspect ratios while driving measurable engagement and conversion results.",
    solution: "Leveraged Adobe Photoshop for advanced photo manipulation and retouching, Canva for rapid content iteration and template creation, and Figma for collaborative design workflows and design system management. Developed a strategic approach combining dynamic visual storytelling with platform-specific best practices, utilizing bold typography, eye-catching color schemes, and motion graphics to create thumb-stopping content that encourages sharing and interaction.",
    results: [
      "Created 200+ social media designs across multiple platforms",
      "Mastered Adobe Photoshop, Canva, and Figma workflows",
      "Designed content for both real campaigns and ghost projects",
      "Developed platform-specific templates for consistent branding",
      "Expertise in posts, stories, reels, carousels, and video content"
    ],
    additionalImages: [
      img41,
      imgNewsItem1,
      imgVizyonVeKultur1,
      imgOzelGunGonderisi,
      imgProductHighlight,
      imgAaaaaa1,
      imgFoodMore11,
      imgFrame710
    ]
  },
  {
    title: "ALNIX AGRO",
    description: "Website design concept for agricultural technology company. Created as a conceptual project at Studiorea digital design agency.",
    tags: ["Web Design", "UI/UX", "Branding"],
    image: imgAlnixAgroCover,
    detailedDescription: "This was a conceptual web design project I created while working at Studiorea digital design agency. Alnix Agro is an agricultural technology company specializing in turnkey agricultural processing solutions and cutting-edge food technology systems. I was tasked with developing a modern website design concept to present to the client as a creative pitch. Throughout the process, I conducted UX research to understand the agricultural technology sector and their target audience, created comprehensive wireframes to establish clear information architecture, and designed the complete website interface with full mobile responsiveness and attention to usability and visual appeal. I selected a cohesive color palette that reflected the company's innovative yet trustworthy brand positioning, choosing typography that balanced technical professionalism with accessibility, and crafted a visual design language that would resonate with both traditional farmers and modern agri-tech decision-makers.",
    challenge: "Creating a professional web presence for a B2B agricultural technology company that would appeal to both traditional farmers and modern agri-tech professionals, while effectively communicating complex technological solutions in an accessible way without overwhelming the user.",
    solution: "Through comprehensive UX research and systematic wireframing, I developed a fully responsive website design that balances technical sophistication with user-friendly navigation across all devices. I selected a color palette featuring natural blues and greens that reflect both technological innovation and agricultural heritage. The typography system combines modern sans-serif fonts for exceptional clarity with strategic use of hierarchy to guide users through complex information. The design emphasizes visual storytelling through clean layouts, strategic use of whitespace, and carefully chosen imagery that connects technology with agriculture, all while maintaining seamless functionality from desktop to mobile.",
    results: [
      "Completed full website design concept and presentation",
      "Developed comprehensive wireframes and UX user flow",
      "Created brand-aligned color palette and typography system",
      "Presented conceptual design to client stakeholders at Studiorea"
    ],
    additionalImages: [
      imgAlnixAgroSolutions,
      imgAlnixAgroAbout,
      imgAlnixAgroMobile,
      imgAlnixAgroMobileCover
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
                index === 0 ? 'row-span-3 md:row-span-4' :   // BLUESENSE (Sol - orta)
                index === 1 ? 'row-span-5 md:row-span-6' :   // STILIST APP (Sağ - uzun) ✅
                index === 2 ? 'row-span-3 md:row-span-4' :   // SOCIAL MEDIA (Sol - orta)
                index === 3 ? 'row-span-2 md:row-span-3' :   // ALNIX AGRO (Sağ - kısa) ✅
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
                      style={{ imageRendering: 'high-quality' }}
                      loading="lazy"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Mobile Cover Image for Bluesense (index 0) */}
                    {index === 0 && (
                      <motion.img
                        src={imgBluesenseMobileCover}
                        alt={project.title}
                        className="md:hidden w-full h-full object-cover absolute inset-0"
                        style={{ objectPosition: 'center' }}
                        loading="lazy"
                        animate={{
                          scale: hoveredIndex === index ? 1.05 : 1
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    )}
                    
                    {/* Mobile Cover Image for Social Media (index 2) */}
                    {index === 2 && (
                      <motion.img
                        src={imgSocialMediaMobileCover}
                        alt={project.title}
                        className="md:hidden w-full h-full object-cover absolute inset-0"
                        style={{ imageRendering: 'high-quality' }}
                        loading="lazy"
                        animate={{
                          scale: hoveredIndex === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    )}
                    
                    {/* Mobile Cover Image for Alnix Agro (index 3) */}
                    {index === 3 && (
                      <motion.img
                        src={imgAlnixAgroMobileCover}
                        alt={project.title}
                        className="md:hidden w-full h-full object-cover absolute inset-0"
                        style={{ objectPosition: 'center' }}
                        loading="lazy"
                        animate={{
                          scale: hoveredIndex === index ? 1.05 : 1
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    )}

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