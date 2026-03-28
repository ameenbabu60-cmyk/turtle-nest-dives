import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
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

const CoursesSection = () => {
  const displayCourses = courses.filter(c => c.id !== "discover-scuba-diving").slice(0, 6);

  return (
    <section id="courses" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-heading text-2xl md:text-5xl font-bold mb-3">
            PADI Scuba Diving Courses <span className="gradient-text">for All Levels</span>
          </h2>
          <p className="font-body text-foreground/60 text-sm md:text-lg max-w-2xl mx-auto">
            Explore globally recognized scuba certifications designed for beginners to professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {displayCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/courses/${course.id}`}
                className="block glass-card rounded-xl overflow-hidden group hover:shadow-[0_0_40px_hsl(187_80%_48%/0.15)] transition-all duration-500 h-full"
              >
                <div className="relative overflow-hidden h-28 md:h-48">
                  <img
                    src={imageMap[course.image]}
                    alt={`${course.title} - PADI scuba diving course`}
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
                  <h3 className="font-heading text-xs md:text-xl font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-foreground/50 text-[10px] md:text-sm font-body mb-1 md:mb-3">
                    <Clock size={10} className="md:w-3.5 md:h-3.5" /> {course.duration}
                  </div>
                  <div className="font-semibold text-primary text-xs md:text-sm font-body mb-1 md:mb-3">
                    {course.price}
                  </div>
                  <p className="font-body text-foreground/60 text-[10px] md:text-sm leading-relaxed mb-2 md:mb-4 line-clamp-2 hidden md:block">{course.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-body text-[10px] md:text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-primary/40 text-foreground font-body font-semibold text-sm hover:bg-primary/10 transition-all duration-300"
          >
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
