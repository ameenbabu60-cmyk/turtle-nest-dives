import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="font-body text-foreground/60 text-lg">
          Ready to dive? Contact us to book your underwater adventure.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
            { icon: Mail, label: "Email", value: "info@turtlenestscuba.com", href: "mailto:info@turtlenestscuba.com" },
            { icon: MapPin, label: "Location", value: "Havelock Island, Andaman & Nicobar, India", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-start gap-4 glass-card p-5 rounded-xl hover:shadow-[0_0_20px_hsl(187_80%_48%/0.1)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-body text-foreground/50 text-sm">{item.label}</p>
                <p className="font-body font-medium text-foreground">{item.value}</p>
              </div>
            </a>
          ))}

          <a
            href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20book%20a%20dive"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[hsl(142_70%_45%)] text-[hsl(0_0%_100%)] font-body font-semibold text-lg hover:shadow-[0_0_20px_hsl(142_70%_45%/0.4)] transition-all duration-300"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden glow-border h-80 md:h-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31134.04!2d92.95!3d11.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x308f4c5e3e6e4b7b%3A0x1d2b3f4e5a6b7c8d!2sHavelock%20Island!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Turtle Nest Scuba location on Google Maps"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
