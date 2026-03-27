import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
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

const CoursesPage = () => (
  <div className="min-h-screen ocean-section relative">
    <Bubbles />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            PADI <span className="gradient-text">Diving Courses</span>
          </h1>
          <p className="font-body text-foreground/60 text-lg max-w-2xl mx-auto">
            From your first breath underwater to professional-level training. Choose your path to becoming a certified diver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/courses/${course.id}`}
                className="block glass-card rounded-xl overflow-hidden group hover:shadow-[0_0_40px_hsl(187_80%_48%/0.15)] transition-all duration-500 h-full"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={imageMap[course.image]}
                    alt={`${course.title} - PADI certification course`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={544}
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-body text-xs font-semibold">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{course.title}</h2>
                  <div className="flex items-center gap-2 text-foreground/50 text-sm font-body mb-3">
                    <Clock size={14} /> {course.duration}
                    <span className="ml-auto font-semibold text-primary">{course.price}</span>
                  </div>
                  <p className="font-body text-foreground/60 text-sm leading-relaxed mb-4">{course.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-body text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CoursesPage;
