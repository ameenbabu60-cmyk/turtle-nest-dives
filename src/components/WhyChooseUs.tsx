import { motion } from "framer-motion";
import { Award, Users, Shield, MapPin, Heart } from "lucide-react";

const reasons = [
  { icon: Award, title: "Certified PADI Professionals", desc: "All our instructors are PADI-certified with extensive underwater experience." },
  { icon: Users, title: "Small Groups", desc: "Personalized attention with small group sizes for the best learning experience." },
  { icon: Shield, title: "Safety-First Approach", desc: "Your safety is our top priority. We follow the highest international standards." },
  { icon: MapPin, title: "Stunning Dive Locations", desc: "Explore the most beautiful and biodiverse dive sites in India." },
  { icon: Heart, title: "Top-Quality Equipment", desc: "We use only the latest and best-maintained diving equipment." },
];

const WhyChooseUs = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Why Dive With <span className="gradient-text">Turtle Nest Scuba?</span>
        </h2>
        <p className="font-body text-foreground/60 text-lg max-w-2xl mx-auto">
          We deliver unforgettable underwater experiences backed by safety, expertise, and passion.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-xl text-center hover:shadow-[0_0_30px_hsl(187_80%_48%/0.15)] transition-all duration-500 group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <r.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{r.title}</h3>
            <p className="font-body text-foreground/60 text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
