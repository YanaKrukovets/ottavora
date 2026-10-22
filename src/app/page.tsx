import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  Artists,
  BestSellers,
  Collections,
  Contact,
  CustomFraming,
  Faq,
  Features,
  Footer,
  Journal,
  NewArrivals,
  Philosophy,
  Testimonials,
  Ticker,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Features />
        <BestSellers />
        <Collections />
        <Philosophy />
        <Artists />
        <NewArrivals />
        <CustomFraming />
        <Journal />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
