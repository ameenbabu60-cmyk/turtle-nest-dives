import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic Explorer",
    price: "₹6,000",
    features: ["Discover Scuba Diving", "Equipment included", "1 guided dive", "Underwater photos", "Certificate of completion"],
    popular: false,
  },
  {
    name: "Premium Adventurer",
    price: "₹9,000",
    features: ["2 guided dives", "Equipment included", "Underwater photos & video", "Marine life briefing", "Refreshments included", "Extended bottom time"],
    popular: true,
  },
  {
    name: "Elite Diver",
    price: "₹12,000",
    features: ["3 guided dives", "Premium equipment", "Professional photo & video", "Private instructor", "Boat diving experience", "Lunch included", "Priority booking"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Affordable Scuba Diving <span className="gradient-text">Packages</span>
        </h2>
        <p className="font-body text-foreground/60 text-lg">
          Choose the perfect diving experience for your adventure level.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`glass-card rounded-2xl p-8 relative ${
              plan.popular ? "ring-2 ring-primary shadow-[0_0_40px_hsl(187_80%_48%/0.2)] scale-105" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground font-body text-xs font-bold flex items-center gap-1">
                <Star size={12} /> Most Popular
              </div>
            )}
            <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="font-heading text-4xl font-bold gradient-text">{plan.price}</span>
              <span className="font-body text-foreground/50 text-sm ml-1">/ person</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 font-body text-foreground/70 text-sm">
                  <Check className="text-primary flex-shrink-0" size={16} /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`block text-center py-3 rounded-full font-body font-semibold transition-all duration-300 ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(187_80%_48%/0.4)]"
                  : "border border-primary/40 text-foreground hover:bg-primary/10"
              }`}
            >
              Book Now
            </a>
          </motion.div>
        ))}
      </div>
      <p className="text-center font-body text-foreground/40 text-sm mt-8">
        * Prices exclude 18% GST. Group discounts available.
      </p>
    </div>
  </section>
);

export default PricingSection;
