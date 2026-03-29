import { Link } from "react-router-dom";
import logo from "@/assets/turtle_nest_logo.png";

const Footer = () => (
  <footer className="relative border-t border-border/30 pt-16 pb-24 md:pb-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <img src={logo} alt="Turtle Nest Scuba" className="h-16 w-auto mb-4" />
          <p className="font-body text-foreground/60 leading-relaxed max-w-md">
            Turtle Nest Scuba offers top-rated scuba diving courses, PADI certifications,
            and unforgettable underwater experiences in Havelock Island, Andaman. Book your
            dive today and explore the ocean like never before.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 font-body text-foreground/60">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Popular Courses</h4>
          <ul className="space-y-2 font-body text-foreground/60">
            <li><Link to="/courses/padi-open-water" className="hover:text-primary transition-colors">Open Water Diver</Link></li>
            <li><Link to="/courses/padi-advanced-open-water" className="hover:text-primary transition-colors">Advanced Open Water</Link></li>
            <li><Link to="/courses/rescue-diver" className="hover:text-primary transition-colors">Rescue Diver</Link></li>
            <li><Link to="/courses/divemaster" className="hover:text-primary transition-colors">Divemaster</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/20 pt-6">
        <div className="font-body text-foreground/40 text-sm mb-4 leading-relaxed">
          <h3 className="font-heading text-foreground/50 font-semibold mb-2">Best Scuba Diving in Andaman & Nicobar Islands</h3>
          <p>
            Turtle Nest Scuba is your premier PADI-certified dive center in Havelock Island, Andaman.
            We offer beginner scuba diving courses, advanced PADI certifications, discover scuba diving
            experiences, and guided fun dives. Experience the best scuba diving in India with crystal-clear
            waters, vibrant coral reefs, and expert instructors. Book your scuba diving adventure today.
          </p>
        </div>
        <p className="font-body text-foreground/30 text-sm text-center">
          © {new Date().getFullYear()} Turtle Nest Scuba. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
