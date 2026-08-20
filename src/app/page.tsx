import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { AI } from "@/components/AI";
import { Products } from "@/components/Products";
import { Differentials } from "@/components/Differentials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <AI />
        <Products />
        <Differentials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
