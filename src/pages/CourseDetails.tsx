import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BarChart3, Check, ArrowRight, AlertCircle, BookOpen, ListChecks, Info } from "lucide-react";
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

          {/* Hero Section */}
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
              <div className="font-heading text-3xl font-bold gradient-text mb-2">Starting from {course.price}</div>
              {course.pricingNote && (
                <p className="font-body text-foreground/50 text-sm mb-6">{course.pricingNote}</p>
              )}
              <p className="font-body text-foreground/70 text-lg leading-relaxed mb-8">{course.longDescription}</p>

              <a
                href="/#contact"
                className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-500"
              >
                Enroll Now
              </a>
            </motion.div>
          </div>

          {/* Course Structure Section */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <BookOpen className="text-primary" size={20} />
              </div>
              <h2 className="font-heading text-3xl font-bold">
                Course <span className="gradient-text">Structure</span>
              </h2>
            </motion.div>

            <div className="grid gap-6">
              {course.courseStructure.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                      <p className="font-body text-foreground/70 leading-relaxed">{step.description}</p>
                      {step.details && (
                        <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 font-body text-foreground/60 text-sm">
                              <Check className="text-primary flex-shrink-0" size={14} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Duration Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 glass-card rounded-xl p-5 flex items-start gap-3 border border-primary/20"
            >
              <Info className="text-primary flex-shrink-0 mt-0.5" size={18} />
              <p className="font-body text-foreground/60 text-sm leading-relaxed">{course.durationNote}</p>
            </motion.div>
          </div>

          {/* Packages Section */}
          <div className="mt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl font-bold mb-8 text-center"
            >
              Choose Your <span className="gradient-text">Package</span>
            </motion.h2>
            <div className={`grid gap-8 ${course.packages.length === 1 ? 'max-w-md mx-auto' : course.packages.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-3'}`}>
              {course.packages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card rounded-xl p-8 relative flex flex-col ${pkg.tag ? 'ring-2 ring-primary shadow-[0_0_30px_hsl(var(--primary)/0.2)]' : ''}`}
                >
                  {pkg.tag && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground font-body text-xs font-semibold">
                      {pkg.tag}
                    </div>
                  )}
                  <h3 className="font-heading text-xl font-bold mb-1">{pkg.name}</h3>
                  <div className="font-heading text-3xl font-bold gradient-text mb-6">{pkg.price}</div>
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 font-body text-foreground/70 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-primary" size={12} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    className={`mt-6 inline-flex justify-center px-6 py-3 rounded-full font-body font-semibold text-sm transition-all duration-500 ${
                      pkg.tag
                        ? 'bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]'
                        : 'border border-primary/40 text-foreground hover:bg-primary/10'
                    }`}
                  >
                    Choose {pkg.name}
                  </a>
                </motion.div>
              ))}
            </div>
            {course.pricingNote && (
              <p className="text-center font-body text-foreground/40 text-sm mt-6">* {course.pricingNote}</p>
            )}
          </div>

          {/* Prerequisites & What's Included */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <AlertCircle className="text-accent" size={16} />
                </div>
                <h2 className="font-heading text-2xl font-bold">Prerequisites</h2>
              </div>
              <ul className="space-y-3">
                {course.prerequisites.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-foreground/70">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-accent" size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <ListChecks className="text-primary" size={16} />
                </div>
                <h2 className="font-heading text-2xl font-bold">What's Included</h2>
              </div>
              <ul className="space-y-3">
                {course.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-foreground/70">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-primary" size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Explore More Courses */}
          <div className="mt-24">
            <h2 className="font-heading text-3xl font-bold mb-8">Explore More <span className="gradient-text">Courses</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {otherCourses.map((c) => (
                <Link key={c.id} to={`/courses/${c.id}`} className="glass-card rounded-xl overflow-hidden group hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-500">
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
