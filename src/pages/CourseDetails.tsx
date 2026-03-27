import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BarChart3, Check, ArrowRight } from "lucide-react";
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

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen ocean-section flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-24">
          <h1 className="font-heading text-3xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-primary font-body">← Back to Courses</Link>
        </div>
      </div>
    );
  }

  const otherCourses = courses.filter((c) => c.id !== courseId).slice(0, 3);

  return (
    <div className="min-h-screen ocean-section relative">
      <Bubbles />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/courses" className="inline-flex items-center gap-2 text-primary font-body mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={18} /> Back to All Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="rounded-2xl overflow-hidden glow-border">
                <img
                  src={imageMap[course.image]}
                  alt={`${course.title} - PADI scuba diving course`}
                  className="w-full h-auto object-cover"
                  width={800}
                  height={544}
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="font-body text-primary font-semibold text-sm uppercase tracking-widest">{course.level}</span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-4">{course.title}</h1>
              <div className="flex items-center gap-6 mb-6 font-body text-foreground/60">
                <span className="flex items-center gap-2"><Clock size={16} /> {course.duration}</span>
                <span className="flex items-center gap-2"><BarChart3 size={16} /> {course.level}</span>
              </div>
              <div className="font-heading text-3xl font-bold gradient-text mb-6">{course.price}</div>
              <p className="font-body text-foreground/70 text-lg leading-relaxed mb-8">{course.longDescription}</p>

              <a
                href="/#contact"
                className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg hover:shadow-[0_0_30px_hsl(187_80%_48%/0.5)] transition-all duration-500"
              >
                Enroll Now
              </a>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-xl">
              <h2 className="font-heading text-2xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-3">
                {course.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-foreground/70">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-primary" size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-xl">
              <h2 className="font-heading text-2xl font-bold mb-6">Requirements</h2>
              <ul className="space-y-3">
                {course.requirements.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-foreground/70">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-accent" size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-24">
            <h2 className="font-heading text-3xl font-bold mb-8">Explore More <span className="gradient-text">Courses</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {otherCourses.map((c) => (
                <Link key={c.id} to={`/courses/${c.id}`} className="glass-card rounded-xl overflow-hidden group hover:shadow-[0_0_30px_hsl(187_80%_48%/0.15)] transition-all duration-500">
                  <div className="h-40 overflow-hidden">
                    <img src={imageMap[c.image]} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={544} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold group-hover:text-primary transition-colors">{c.title}</h3>
                    <p className="font-body text-foreground/50 text-sm mt-1">{c.duration} · {c.level}</p>
                    <span className="inline-flex items-center gap-1 text-primary font-body text-sm font-semibold mt-3">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;
