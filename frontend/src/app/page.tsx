import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Cases from '@/components/home/Cases';
import News from '@/components/home/News';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Cases />
        <News />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
