import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../BookingModal.mobile.css";
import { courses } from "@/data/courses";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  defaultCourse?: string;
  defaultPackage?: string;
}

const countryCodes = [
  { code: "+91", country: "IN" },
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "AU" },
  { code: "+971", country: "AE" },
  { code: "+65", country: "SG" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+81", country: "JP" },
  { code: "+86", country: "CN" },
  { code: "+7", country: "RU" },
  { code: "+39", country: "IT" },
  { code: "+34", country: "ES" },
  { code: "+55", country: "BR" },
  { code: "+27", country: "ZA" },
  { code: "+66", country: "TH" },
  { code: "+60", country: "MY" },
  { code: "+62", country: "ID" },
  { code: "+82", country: "KR" },
  { code: "+64", country: "NZ" },
];

const BookingModal = ({ open, onClose, defaultCourse = "", defaultPackage = "" }: BookingModalProps) => {
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);
  const [selectedPackage, setSelectedPackage] = useState(defaultPackage);
  const [fullName, setFullName] = useState("");
  const [whatsappCode, setWhatsappCode] = useState("+91");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [altCode, setAltCode] = useState("+91");
  const [altNumber, setAltNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const currentCourse = courses.find((c) => c.id === selectedCourse);
  const packageOptions = currentCourse?.packages || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const whatsappFull = `${whatsappCode}${whatsappNumber}`.replace(/[^+\d]/g, "");
    const message = encodeURIComponent(
      `Hi! I'd like to enroll.\n\nCourse: ${currentCourse?.title || selectedCourse}\nPackage: ${selectedPackage}\nName: ${fullName}\nEmail: ${email}\nLocation: ${city}, ${state}, ${country}\nWhatsApp: ${whatsappFull}${altNumber ? `\nAlt Contact: ${altCode}${altNumber}` : ""}`
    );

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/919876543210?text=${message}`, "_blank", "noopener,noreferrer");
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 800);
  };

  // Reset form when modal opens with new defaults
  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  // Sync defaults when they change
  if (open && defaultCourse && selectedCourse !== defaultCourse) {
    setSelectedCourse(defaultCourse);
    setSelectedPackage(defaultPackage);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto glass-card rounded-t-2xl sm:rounded-2xl border border-border/50 shadow-[0_0_60px_hsl(var(--primary)/0.15)] booking-modal-mobile-hide-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-md px-5 py-4 border-b border-border/30 flex items-center justify-between rounded-t-2xl">
              <h2 className="font-heading text-lg font-bold">Book Your Dive</h2>
              <button onClick={handleClose} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                <X size={16} />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤿</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Booking Sent!</h3>
                <p className="font-body text-foreground/60 text-sm">We'll connect with you on WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                {/* Course */}
                <div>
                  <label className="font-body text-xs font-medium text-foreground/60 mb-1.5 block">Course *</label>
                  <div className="relative">
                    <select
                      value={selectedCourse}
                      onChange={(e) => { setSelectedCourse(e.target.value); setSelectedPackage(""); }}
                      required
                      className="w-full h-11 rounded-xl bg-muted/50 border border-border/50 px-3 pr-8 font-body text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a course</option>
                      {courses.map((c) => (
                        <option key={c.id} value={c.id}>{c.title}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
                  </div>
                </div>

                {/* Package */}
                {packageOptions.length > 0 && (
                  <div>
                    <label className="font-body text-xs font-medium text-foreground/60 mb-1.5 block">Package *</label>
                    <div className="relative">
                      <select
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        required
                        className="w-full h-11 rounded-xl bg-muted/50 border border-border/50 px-3 pr-8 font-body text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select a package</option>
                        {packageOptions.map((p) => (
                          <option key={p.name} value={p.name}>{p.name} — {p.price}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
                    </div>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="font-body text-xs font-medium text-foreground/60 mb-1.5 block">Full Name *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    maxLength={100}
                    placeholder="Enter your full name"
                    className="w-full h-11 rounded-xl bg-muted/50 border border-border/50 px-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="font-body text-xs font-medium text-foreground/60 mb-1.5 block">WhatsApp Number *</label>
                  <div className="flex gap-2">
                    <div className="relative w-24 flex-shrink-0">
                      <select
                        value={whatsappCode}
                        onChange={(e) => setWhatsappCode(e.target.value)}
                        className="w-full h-11 rounded-xl bg-muted/50 border border-border/50 px-2 pr-6 font-body text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        {countryCodes.map((cc) => (
                          <option key={cc.code + cc.country} value={cc.code}>{cc.code} {cc.country}</option>
                        ))}
                      </select>
                      <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
                    </div>
                    <input
                      type="tel"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value.replace(/\D/g, ""))}
                      required
                      maxLength={15}
                      placeholder="Phone number"
                      className="flex-1 h-11 rounded-xl bg-muted/50 border border-border/50 px-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-xs font-medium text-foreground/60 mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={255}
                    placeholder="your@email.com"
                    className="w-full h-11 rounded-xl bg-muted/50 border border-border/50 px-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Country / State / City */}
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground/60 mb-1.5 block">Country *</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      maxLength={60}
                      placeholder="Country"
                      className="w-full h-11 rounded-xl bg-muted/50 border border-border/50 px-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground/60 mb-1.5 block">State *</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                      maxLength={60}
                      placeholder="State"
                      className="w-full h-11 rounded-xl bg-muted/50 border border-border/50 px-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground/60 mb-1.5 block">City *</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      maxLength={60}
                      placeholder="City"
                      className="w-full h-11 rounded-xl bg-muted/50 border border-border/50 px-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                {/* Alternative Contact */}
                <div>
                  <label className="font-body text-xs font-medium text-foreground/60 mb-1.5 block">Alternative Contact Number</label>
                  <div className="flex gap-2">
                    <div className="relative w-24 flex-shrink-0">
                      <select
                        value={altCode}
                        onChange={(e) => setAltCode(e.target.value)}
                        className="w-full h-11 rounded-xl bg-muted/50 border border-border/50 px-2 pr-6 font-body text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        {countryCodes.map((cc) => (
                          <option key={`alt-${cc.code}${cc.country}`} value={cc.code}>{cc.code} {cc.country}</option>
                        ))}
                      </select>
                      <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
                    </div>
                    <input
                      type="tel"
                      value={altNumber}
                      onChange={(e) => setAltNumber(e.target.value.replace(/\D/g, ""))}
                      maxLength={15}
                      placeholder="Optional"
                      className="flex-1 h-11 rounded-xl bg-muted/50 border border-border/50 px-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-500 disabled:opacity-60 mt-2"
                >
                  {submitting ? "Sending..." : "Submit Booking Request"}
                </button>

                <p className="font-body text-foreground/30 text-[11px] text-center">
                  Your details will be sent via WhatsApp for quick confirmation.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
