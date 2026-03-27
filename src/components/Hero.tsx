import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source src="https://cdn1.simplotel.com/generic_uploads/production/ALD9Mw6n/homepage_video_1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />

      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 animate-ray"
            style={{
              left: `${15 + i * 18}%`,
              width: `${40 + i * 10}px`,
              height: "120%",
              background: `linear-gradient(180deg, hsl(187 80% 70% / 0.06) 0%, transparent 80%)`,
              transform: `rotate(${-10 + i * 5}deg)`,
              transformOrigin: "top center",
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Scuba Diving in India{" "}
            <span className="block gradient-text">Turtle Nest Scuba</span>
            <span className="block text-lg md:text-2xl font-body font-light text-foreground/70 mt-4">
              PADI Certified Dive Center
            </span>
          </h1>
          <p className="font-body text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover the underwater world with expert instructors, crystal-clear waters,
            and unforgettable diving experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg tracking-wide hover:shadow-[0_0_30px_hsl(187_80%_48%/0.5)] transition-all duration-500 hover:scale-105"
            >
              Book Your Dive
            </a>
            <a
              href="#courses"
              className="px-8 py-4 rounded-full border border-primary/40 text-foreground font-body font-semibold text-lg tracking-wide hover:bg-primary/10 transition-all duration-500"
            >
              Explore Courses
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-primary/60" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
