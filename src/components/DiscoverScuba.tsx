import { motion } from "framer-motion";
import { Check } from "lucide-react";
import discoverImg from "@/assets/discover-scuba.jpg";

const includes = [
  "Basic training session",
  "Confined water practice",
  "Optional open water dive",
  "All equipment provided",
  "Expert instructor guidance",
];

const DiscoverScuba = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden relative"
        >
          <img
            src={discoverImg}
            alt="Discover scuba diving beginner experience underwater"
            className="w-full h-auto object-cover rounded-2xl"
            loading="lazy"
            width={1200}
            height={672}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-body text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
            Featured Experience
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Try Scuba Diving –{" "}
            <span className="gradient-text">No Experience Needed</span>
          </h2>
          <p className="font-body text-foreground/70 text-lg leading-relaxed mb-8">
            Experience the magic of breathing underwater with our Discover Scuba Diving
            program. Perfect for beginners, this guided experience lets you explore the
            ocean safely under expert supervision.
          </p>
          <ul className="space-y-3 mb-8">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-foreground/70">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="text-primary" size={14} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="/courses/discover-scuba-diving"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg hover:shadow-[0_0_30px_hsl(187_80%_48%/0.5)] transition-all duration-500"
          >
            Start Your First Dive
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DiscoverScuba;
