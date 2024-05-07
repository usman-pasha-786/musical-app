import FeatureCourses from "@/components/featureCourses";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Instructors from "@/components/instructors";
import TestimonialCards from "@/components/testimonialCards";
import UpCommingWebinar from "@/components/upCommingWebinar";
import WhyChooseUs from "@/components/whyChooseUs";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeatureCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpCommingWebinar/>
    {/* <Contact/> */}
    <Instructors/>
    <Footer/>
    </main>
  );
}
