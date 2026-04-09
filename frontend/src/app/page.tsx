import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Cases from "@/components/home/Cases";
import News from "@/components/home/News";
import CTA from "@/components/home/CTA";
import { getNewsList, getCasesList } from '@/lib/actions';

export default async function Home() {
  const news = await getNewsList();
  const cases = await getCasesList();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Cases cases={cases} />
        <News news={news} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
