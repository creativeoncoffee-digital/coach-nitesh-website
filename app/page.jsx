import Background from '../components/Background';
import Hero from '../components/Hero';
import Why from '../components/Why';
import Courses from '../components/Courses';
import AiTools from '../components/AiTools';
import Curriculum from '../components/Curriculum';
import Testimonials from '../components/Testimonials';
import AboutFAQ from '../components/AboutFAQ';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <>
      {/* Fixed Background */}
      <Background />
      
      {/* Scrollable Content overlay */}
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <Why />
        <Courses />
        <Curriculum />
        <AiTools />
        <Testimonials />
        <AboutFAQ />
      </main>
    </>
  );
}