import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  { name: "Priya Sharma", text: "Amazing experience! The instructors were so patient and professional. Perfect for beginners like me. I felt safe every second underwater.", rating: 5 },
  { name: "Rahul Mehta", text: "Professional instructors and great safety standards. I completed my Open Water course and it was the best decision of my life!", rating: 5 },
  { name: "Sarah Johnson", text: "Best scuba diving experience ever! The coral reefs were breathtaking and the team made everything so easy. Highly recommend!", rating: 5 },
];

const TestimonialsPreview = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          What Our <span className="gradient-text">Divers Say</span>
        </h2>
        <p className="font-body text-foreground/60 text-lg">
          Real experiences from real adventurers who dove with us.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 rounded-xl"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="fill-primary text-primary" size={16} />
              ))}
            </div>
            <p className="font-body text-foreground/70 leading-relaxed mb-6 italic">"{t.text}"</p>
            <p className="font-heading font-semibold text-foreground">{t.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all"
        >
          Read All Reviews <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default TestimonialsPreview;
