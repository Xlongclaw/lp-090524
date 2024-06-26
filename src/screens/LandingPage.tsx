import AboutUsSection from "../components/about-us-section";
import AchievementStrip from "../components/achievement-strip";
import FAQSection from "../components/faq-section";
import Features from "../components/features";
import Footer from "../components/footer";
import GetInTouch from "../components/get-in-touch";
import HeroSection from "../components/hero-section";
import IntegratedTools from "../components/integrated-tools";
import LetsStartContainer from "../components/lets-start-container";
import Navbar from "../components/navbar";
import FloatingNavBar from "../components/navbar/FloatingNavBar";
import OurCulture from "../components/our-culture";
import OurExpertise from "../components/our-expertise";
import OurFinishedProjects from "../components/our-finished-projects";
import OurServicesSection from "../components/our-services-section";
import WhatOurClientSays from "../components/what-our-client-says";
import WhatWeDoSection from "../components/what-we-do-section";
import WhyChooseRicoz from "../components/why-choose-ricoz";

export default function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <FloatingNavBar/>
      <HeroSection />
      <OurExpertise/>
      <WhatWeDoSection/>
      <AboutUsSection/>
      <Features/>
      <WhyChooseRicoz/>
      <IntegratedTools/>
      <OurServicesSection/>
      <OurCulture/>
      <AchievementStrip/>
      <OurFinishedProjects/>
      <GetInTouch/>
      <WhatOurClientSays/>
      <FAQSection/>
      <LetsStartContainer/>
      <Footer/>
    </div>
  );
}
