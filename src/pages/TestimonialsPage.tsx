import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";

const testimonials = [
  { name: "Priya Sharma", location: "Mumbai", text: "Amazing experience! The instructors were so patient and professional. Perfect for beginners like me. I felt safe every second underwater. This was hands down the highlight of my Andaman trip!", rating: 5 },
  { name: "Rahul Mehta", location: "Delhi", text: "Professional instructors and great safety standards. I completed my Open Water course here and it was the best decision of my life! The team went above and beyond to make sure I was comfortable.", rating: 5 },
  { name: "Sarah Johnson", location: "London, UK", text: "Best scuba diving experience ever! The coral reefs were breathtaking and the team made everything so easy and enjoyable. Highly recommend Turtle Nest Scuba to anyone visiting the Andamans!", rating: 5 },
  { name: "Arjun Patel", location: "Bangalore", text: "Completed my Advanced Open Water course with Turtle Nest Scuba. The deep dive and night dive were absolutely incredible. The instructors are knowledgeable and passionate about what they do.", rating: 5 },
  { name: "Emily Chen", location: "Singapore", text: "I was nervous about my first dive but the team at Turtle Nest Scuba made me feel completely at ease. The Discover Scuba Diving experience was magical — I saw turtles, colorful fish, and stunning corals!", rating: 5 },
  { name: "Vikram Singh", location: "Chandigarh", text: "Did the Zero to Hero program and it changed my life. From a complete beginner to a Divemaster in 10 weeks. The training was rigorous but fun. Now I'm living my dream as a dive professional!", rating: 5 },
  { name: "Maria Garcia", location: "Barcelona, Spain", text: "The fun dives were spectacular! We saw manta rays, reef sharks, and the most beautiful soft corals. The divemasters knew all the best spots and were incredibly friendly.", rating: 5 },
  { name: "Deepak Kumar", location: "Chennai", text: "Great value for money. The equipment was top-notch and well-maintained. The underwater photography service was a lovely bonus — we got amazing photos to remember our dives by!", rating: 5 },
  { name: "Lisa Thompson", location: "Sydney, Australia", text: "I've dived all over the world and Turtle Nest Scuba ranks among the best dive centers I've experienced. Professional, safe, and incredibly fun. The Andaman waters are truly spectacular.", rating: 5 },
];

const TestimonialsPage = () => (
  <div className="min-h-screen ocean-section relative">
    <Bubbles />
    <Navbar />
    <main className="pt-24 pb-20 md:pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Diver <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="font-body text-foreground/60 text-lg max-w-2xl mx-auto">
            Hear from our amazing community of divers who've explored the underwater world with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-8 rounded-xl relative"
            >
              <Quote className="absolute top-4 right-4 text-primary/20" size={32} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="fill-primary text-primary" size={16} />
                ))}
              </div>
              <p className="font-body text-foreground/70 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-foreground/50 text-sm">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TestimonialsPage;
