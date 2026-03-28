import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";
import BookingModal from "@/components/BookingModal";
import { courses } from "@/data/courses";

import courseScubaDiver from "@/assets/course-scuba-diver.jpg";
import courseOpenWater from "@/assets/course-open-water.jpg";
import courseAdvanced from "@/assets/course-advanced.jpg";
import courseEfr from "@/assets/course-efr.jpg";
import courseRescue from "@/assets/course-rescue.jpg";
import courseDivemaster from "@/assets/course-divemaster.jpg";

const imageMap: Record<string, string> = {
  "course-scuba-diver": courseScubaDiver,
  "course-open-water": courseOpenWater,
  "course-advanced": courseAdvanced,
  "course-efr": courseEfr,
  "course-rescue": courseRescue,
  "course-divemaster": courseDivemaster,
};

const CoursesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen ocean-section relative">
      <Bubbles />
      <Navbar />
      <main className="pt-24 pb-20 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 md:mb-16">
            <h1 className="font-heading text-3xl md:text-6xl font-bold mb-3">
              PADI <span className="gradient-text">Diving Courses</span>
            </h1>
            <p className="font-body text-foreground/60 text-sm md:text-lg max-w-2xl mx-auto">
              From your first breath underwater to professional-level training. Choose your path.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/courses/${course.id}`}
                  className="block glass-card rounded-xl overflow-hidden group hover:shadow-[0_0_40px_hsl(187_80%_48%/0.15)] transition-all duration-500 h-full"
                >
                  <div className="relative overflow-hidden h-28 md:h-48">
                    <img
                      src={imageMap[course.image]}
                      alt={`${course.title} - PADI certification course`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={544}
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-primary/90 text-primary-foreground font-body text-[9px] md:text-xs font-semibold">
                      {course.level}
                    </div>
                  </div>
                  <div className="p-3 md:p-6">
                    <h2 className="font-heading text-xs md:text-xl font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {course.title}
                    </h2>
                    <div className="flex items-center gap-1 text-foreground/50 text-[10px] md:text-sm font-body mb-1 md:mb-3">
                      <Clock size={10} className="md:w-3.5 md:h-3.5" /> {course.duration}
                    </div>
                    <div className="font-semibold text-primary text-xs md:text-sm font-body mb-1 md:mb-3">
                      {course.price}
                    </div>
                    <p className="font-body text-foreground/60 text-[10px] md:text-sm leading-relaxed mb-2 md:mb-4 line-clamp-2 hidden md:block">
                      {course.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary font-body text-[10px] md:text-sm font-semibold group-hover:gap-2 transition-all">
                      Details <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default CoursesPage;
