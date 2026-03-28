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

interface NavbarProps {
  onBookNow?: () => void;
}

const Navbar = ({ onBookNow }: NavbarProps) => {
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
    <nav className="fixed left-0 right-0 top-0 z-[70] border-b border-white/10 bg-background/78 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/62">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
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
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onBookNow?.();
            }}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:shadow-[0_0_20px_hsl(187_80%_48%/0.4)] transition-all duration-300"
          >
            Book Now
          </button>
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
            className="overflow-hidden border-t border-white/10 bg-background/95 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl md:hidden"
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
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onBookNow?.();
                }}
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm text-center"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
