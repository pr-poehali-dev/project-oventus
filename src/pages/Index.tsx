import Header from "@/components/fmksk/Header";
import Hero from "@/components/fmksk/Hero";
import About from "@/components/fmksk/About";
import Disciplines from "@/components/fmksk/Disciplines";
import Calendar from "@/components/fmksk/Calendar";
import Projects from "@/components/fmksk/Projects";
import Youth from "@/components/fmksk/Youth";
import Documents from "@/components/fmksk/Documents";
import Partners from "@/components/fmksk/Partners";
import Contacts from "@/components/fmksk/Contacts";
import SiteFooter from "@/components/fmksk/SiteFooter";

export default function Index() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Disciplines />
      <Calendar />
      <Projects />
      <Youth />
      <Documents />
      <Partners />
      <Contacts />
      <SiteFooter />
    </div>
  );
}
