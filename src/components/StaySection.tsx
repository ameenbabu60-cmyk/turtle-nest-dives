import { motion } from "framer-motion";
import stayImg from "@/assets/stay-resort.jpg";

const StaySection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden glow-border order-2 md:order-1"
        >
          <img
            src={stayImg}
            alt="Beachfront resort accommodation near dive spots"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1200}
            height={672}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Comfortable Stay <span className="gradient-text">Near Dive Spots</span>
          </h2>
          <p className="font-body text-foreground/70 text-lg leading-relaxed mb-6">
            Relax and recharge with our partner accommodations located close to prime
            diving locations. From budget-friendly stays to premium beachfront resorts,
            we'll help you find the perfect place to rest between dives.
          </p>
          <p className="font-body text-foreground/60 leading-relaxed">
            Wake up to ocean views, enjoy fresh seafood, and step straight onto the dive
            boat — it doesn't get better than this.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StaySection;
