import { CustomCursor } from './components/CustomCursor';
import { FloatingOrb } from './components/FloatingOrb';
import { GridBackground } from './components/GridBackground';
import { ParticleField } from './components/ParticleField';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { MarqueeText } from './components/MarqueeText';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  // Set favicon
  useEffect(() => {
    // Create SVG favicon with same design as logo
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="8" fill="#A8E6A3"/>
        <text x="32" y="45" text-anchor="middle" font-family="League Spartan, sans-serif" font-weight="700" font-size="42" fill="#0a0a0a">K</text>
      </svg>
    `;
    
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    favicon.type = 'image/svg+xml';
    favicon.rel = 'shortcut icon';
    favicon.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
    
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(favicon);
    }

    // Also set title
    document.title = 'KAYRA - Digital Designer';
  }, []);
  const skills = [
    "CREATIVE DESIGN",
    "VISUAL IDENTITY",
    "UI/UX DESIGN",
    "INTERACTIVE PROTOTYPING",
    "FRONT END DEVELOPMENT",
    "MOTION GRAPHICS",
    "BRAND STRATEGY",
    "DIGITAL EXPERIENCES"
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      <GridBackground />
      <ParticleField />
      <FloatingOrb />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        
        <section className="relative">
          <MarqueeText text={skills} />
        </section>

        <AboutSection />

        <ProcessSection />

        <ProjectShowcase />

        <Footer />
      </main>
    </div>
  );
}
