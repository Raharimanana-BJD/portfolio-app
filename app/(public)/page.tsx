import FAQs from '@/components/co-public/FAQs';
import Footer from '@/components/co-public/Footer';
import Header from '@/components/co-public/Header';
import Hero from '@/components/co-public/Hero';
import Intro from '@/components/co-public/intro';
import Project from '@/components/co-public/project';
import Testimonials from '@/components/co-public/Testimonials';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <Project />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  );
}
