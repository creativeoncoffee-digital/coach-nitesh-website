import Background from '../components/Background';
import Hero from '../components/Hero';
import Modules from "../components/Modules";
import Courses from '../components/Courses';
// import AiTools from '../components/AiTools';
// import Curriculum from '../components/Curriculum';
import Testimonials from '../components/Testimonials';
import AboutFAQ from '../components/AboutFAQ';
import HowItWorks from '../components/HowItWorks';
import Certification from '@/components/Certifications';
import TechStack from '@/components/TechStack';
import TargetAudience from '@/components/TargetAudience';


export default function Home() {
  return (
    <>
      {/* Fixed Background */}
      <Background />
      
      {/* Scrollable Content overlay */}
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <TargetAudience />
        <Modules/>
        <Courses />
        {/* <Curriculum /> */}
        {/* <AiTools /> */}
        <Testimonials />
       < TechStack />
        

        <Certification />
        <AboutFAQ />
      </main>
    </>
  );
}