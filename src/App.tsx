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
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
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
