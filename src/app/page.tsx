import Hero from "@/components/common/Hero";
import AfterHero from "@/components/common/AfterHero";
import CourcesCarosel from "@/components/common/CourcesCarosel";
import Services from "@/components/common/Services";
import AnnocAndNotice from "@/components/common/AnnocAndNotice";
import Testimonials from "@/components/common/Testimonials";
import Contact from "@/components/common/contact";

export default function Home() {
  return (
    <>
    <Hero/>
    <AfterHero/>
    <CourcesCarosel/>
    <Services/>
    <AnnocAndNotice/>
    <Testimonials/>
    <Contact/>
    </>
  )
}