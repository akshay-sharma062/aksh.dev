import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { Services } from '@/components/Services';
import { WhySection } from '@/components/WhySection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { TechMarquee } from '@/components/TechMarquee';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { AutomationSection } from '@/components/AutomationSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      {/* Sections – placeholders for now; each component will be built later */}
      <ProjectShowcase />
      <Services />
      <WhySection />
      <AboutSection />
      <ExperienceTimeline />
      <TechMarquee />
      <ProcessTimeline />
      <AutomationSection />
      <ContactForm />
      <Footer />
    </>
  );
}
