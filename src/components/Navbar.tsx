import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/turtle_nest_logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Turtle Nest Scuba Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to.startsWith("/#") ? "/" : link.to}
              onClick={() => handleNavClick(link.to)}
              className="font-body text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#pricing"
            onClick={() => handleNavClick("/#pricing")}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:shadow-[0_0_20px_hsl(187_80%_48%/0.4)] transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/30 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to.startsWith("/#") ? "/" : link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="font-body text-sm font-medium tracking-wide text-foreground/80 hover:text-primary py-2 uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#pricing"
                onClick={() => handleNavClick("/#pricing")}
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm text-center"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
