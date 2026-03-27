import { motion } from "framer-motion";
import discoverImg from "@/assets/discover-scuba.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Dive into Adventure with{" "}
            <span className="gradient-text">Turtle Nest Scuba</span>
          </h2>
          <p className="font-body text-foreground/70 text-lg leading-relaxed mb-6">
            Turtle Nest Scuba is a trusted PADI-certified diving center offering world-class
            scuba diving experiences for beginners and professionals. Whether you're trying
            scuba diving for the first time or advancing your certification, our expert
            instructors ensure a safe, exciting, and unforgettable journey beneath the waves.
          </p>
          <p className="font-body text-foreground/60 leading-relaxed">
            With years of experience and a passion for marine conservation, we are dedicated
            to showing you the beauty of the underwater world while preserving it for future
            generations. Every dive with us is more than an adventure — it's a transformation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden glow-border">
            <img
              src={discoverImg}
              alt="Scuba diver exploring underwater coral reef"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1200}
              height={672}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl">
            <p className="font-heading text-3xl font-bold gradient-text">500+</p>
            <p className="font-body text-sm text-foreground/70">Happy Divers</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
