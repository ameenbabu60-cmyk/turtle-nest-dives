import { motion } from "framer-motion";
import funDivingImg from "@/assets/fun-diving.jpg";

const FunDiving = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Fun Diving for <span className="gradient-text">Certified Divers</span>
          </h2>
          <p className="font-body text-foreground/70 text-lg leading-relaxed mb-6">
            Already certified? Join our guided fun dives and explore vibrant coral reefs,
            exotic marine life, and crystal-clear waters. From sea turtles to manta rays,
            every dive is a new adventure.
          </p>
          <p className="font-body text-foreground/60 leading-relaxed mb-8">
            We offer single dives and multi-dive packages at some of the most breathtaking
            dive sites. Our experienced divemasters know every hidden gem beneath the surface.
          </p>
          <a
            href="#contact"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold hover:shadow-[0_0_30px_hsl(187_80%_48%/0.5)] transition-all duration-500"
          >
            Join a Fun Dive
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden glow-border"
        >
          <img
            src={funDivingImg}
            alt="Group of certified divers on a fun dive exploring coral reef"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1200}
            height={672}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default FunDiving;
