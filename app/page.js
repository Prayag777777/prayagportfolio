import HeroSection from './components/homepage/hero-section';
import AboutSection from './components/homepage/about';
import Experience from './components/homepage/experience';
import Skills from './components/homepage/skills';
import Projects from './components/homepage/projects';
import Education from './components/homepage/education';
import ContactSection from './components/homepage/contact';
import Certificates from './components/homepage/certificate/Certificates';
import { certificates } from '@/utils/data/certificates-data';

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certificates blogs={certificates} />
      <ContactSection />
    </div>
  );
}
