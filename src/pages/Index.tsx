import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection";
import DiscoverScuba from "@/components/DiscoverScuba";
// import PricingSection from "@/components/PricingSection";
import FunDiving from "@/components/FunDiving";
import StaySection from "@/components/StaySection";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen ocean-section relative">
      <Bubbles />
      <Navbar onBookNow={() => setBookingOpen(true)} />
      <main className="pb-14 md:pb-0">
        <Hero onBookNow={() => setBookingOpen(true)} />
        <AboutSection />
        <WhyChooseUs />
        <CoursesSection />
        <DiscoverScuba />
        {/* <PricingSection /> */}
        <FunDiving />
        <StaySection />
        <TestimonialsPreview />
        <ContactSection />
      </main>
      <Footer />
      <MobileBottomNav />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default Index;
