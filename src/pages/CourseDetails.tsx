import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  Clock,
  Info,
  ListChecks,
} from "lucide-react";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";
import Navbar from "@/components/Navbar";
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

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState("");

  const openBooking = (pkgName?: string) => {
    setSelectedPkg(pkgName || "");
    setModalOpen(true);
  };

  if (!course) {
    return (
      <div className="min-h-screen ocean-section flex items-center justify-center px-4">
        <div className="glass-card w-full max-w-lg rounded-[28px] p-8 text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold">Course Not Found</h1>
          <p className="mb-6 font-body text-foreground/65">
            The course you are looking for is not available right now.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body font-semibold text-primary-foreground"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const courseImage = imageMap[course.image];
  const otherCourses = courses.filter((c) => c.id !== courseId).slice(0, 3);
  return (
    <div className="min-h-screen ocean-section relative overflow-x-hidden">
      <Bubbles />
      <Navbar />

      <main className="relative z-10 pb-20 pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8"
          >
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/30 px-4 py-2 font-body text-sm font-medium text-foreground/85 backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft size={16} />
              Back to Courses
            </Link>
          </motion.div>

          <section className="lg:hidden">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-background/20 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <img
                  src={courseImage}
                  alt={`${course.title} - PADI scuba diving course`}
                  className="h-[280px] w-full object-cover"
                  width={800}
                  height={544}
                />
              </div>

              <div className="mt-6">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  {course.level}
                </span>
                <h1 className="mt-3 font-heading text-3xl font-bold leading-tight">
                  {course.title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-4 font-body text-sm text-foreground/65">
                  <span className="flex items-center gap-2">
                    <Clock size={15} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <BarChart3 size={15} />
                    {course.level}
                  </span>
                </div>
                <div className="mt-5 font-heading text-3xl font-bold gradient-text">
                  Starting from {course.price}
                </div>
                {course.pricingNote ? (
                  <p className="mt-1 font-body text-xs text-foreground/50">{course.pricingNote}</p>
                ) : null}
                <p className="mt-5 font-body text-sm leading-7 text-foreground/72">
                  {course.longDescription}
                </p>
                <button
                  onClick={() => openBooking()}
                  className="mt-6 inline-flex rounded-full bg-primary px-8 py-3.5 font-body font-semibold text-primary-foreground transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.45)]"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          </section>

          <section className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]"
            >
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-background/15 shadow-[0_32px_90px_rgba(0,0,0,0.34)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-primary/10" />
                <img
                  src={courseImage}
                  alt={`${course.title} - PADI scuba diving course`}
                  className="h-full min-h-[540px] w-full object-cover"
                  width={1200}
                  height={900}
                />
                <div className="absolute inset-x-0 bottom-0 p-10">
                  <div className="max-w-2xl rounded-[28px] border border-white/10 bg-background/50 p-8 backdrop-blur-xl">
                    <span className="font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                      {course.level}
                    </span>
                    <h1 className="mt-3 font-heading text-5xl font-bold leading-tight">
                      {course.title}
                    </h1>
                    <p className="mt-4 max-w-xl font-body text-base leading-8 text-foreground/75">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="glass-card rounded-[32px] p-8">
                  <p className="font-body text-sm uppercase tracking-[0.35em] text-primary/80">
                    Course Overview
                  </p>
                  <div className="mt-4 flex items-center gap-6 font-body text-sm text-foreground/70">
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <BarChart3 size={16} />
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-6 font-heading text-4xl font-bold gradient-text">
                    {course.price}
                  </div>
                  {course.pricingNote ? (
                    <p className="mt-2 font-body text-xs text-foreground/50">{course.pricingNote}</p>
                  ) : null}
                  <p className="mt-6 font-body text-base leading-8 text-foreground/72">
                    {course.longDescription}
                  </p>
                  <button
                    onClick={() => openBooking()}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.45)]"
                  >
                    Enroll in This Course
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="glass-card rounded-[28px] p-6">
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-foreground/45">
                      Includes
                    </p>
                    <p className="mt-3 font-heading text-3xl font-bold">
                      {course.includes.length}
                    </p>
                    <p className="mt-2 font-body text-sm text-foreground/65">
                      guided elements and included services
                    </p>
                  </div>
                  <div className="glass-card rounded-[28px] p-6">
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-foreground/45">
                      Steps
                    </p>
                    <p className="mt-3 font-heading text-3xl font-bold">
                      {course.courseStructure.length}
                    </p>
                    <p className="mt-2 font-body text-sm text-foreground/65">
                      progressive training stages in the course
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <div className="mt-14 lg:mt-20 lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
            <div className="space-y-14 lg:space-y-20">
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6 flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20">
                    <BookOpen className="text-primary" size={18} />
                  </div>
                  <h2 className="font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                    Course <span className="gradient-text">Structure</span>
                  </h2>
                </motion.div>

                <div className="grid gap-4 lg:gap-5">
                  {course.courseStructure.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="glass-card relative overflow-hidden rounded-[24px] p-5 md:p-8 lg:p-9"
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent" />
                      <div className="flex gap-4 md:gap-6">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 font-heading text-base font-bold text-primary md:h-12 md:w-12 md:text-lg">
                          {index + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-heading text-xl font-bold md:text-2xl">
                            {step.title}
                          </h3>
                          <p className="mt-2 font-body text-sm leading-7 text-foreground/72 md:text-base">
                            {step.description}
                          </p>
                          {step.details ? (
                            <ul className="mt-4 grid gap-2 md:grid-cols-2">
                              {step.details.map((detail) => (
                                <li
                                  key={detail}
                                  className="flex items-start gap-2 font-body text-sm text-foreground/65"
                                >
                                  <Check className="mt-0.5 flex-shrink-0 text-primary" size={14} />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-4 flex items-start gap-3 rounded-[24px] border border-primary/20 bg-background/35 p-4 backdrop-blur-xl md:p-5"
                >
                  <Info className="mt-0.5 flex-shrink-0 text-primary" size={18} />
                  <p className="font-body text-xs leading-6 text-foreground/65 md:text-sm">
                    {course.durationNote}
                  </p>
                </motion.div>
              </section>

              <section>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6 font-heading text-2xl font-bold md:text-3xl lg:text-4xl"
                >
                  Choose Your <span className="gradient-text">Package</span>
                </motion.h2>

                <div
                  className={`grid gap-4 lg:gap-6 ${
                    course.packages.length === 1
                      ? "max-w-md"
                      : course.packages.length === 2
                        ? "md:grid-cols-2"
                        : "md:grid-cols-2 xl:grid-cols-3"
                  }`}
                >
                  {course.packages.map((pkg, index) => (
                    <motion.div
                      key={pkg.name}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className={`glass-card relative flex flex-col rounded-[28px] p-5 md:p-7 lg:min-h-[430px] ${
                        pkg.tag
                          ? "border-primary/40 shadow-[0_0_36px_hsl(var(--primary)/0.16)]"
                          : ""
                      }`}
                    >
                      {pkg.tag ? (
                        <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-foreground">
                          {pkg.tag}
                        </div>
                      ) : null}
                      <p className="font-heading text-xl font-bold md:text-2xl">{pkg.name}</p>
                      <p className="mt-3 font-heading text-3xl font-bold gradient-text">{pkg.price}</p>
                      <ul className="mt-5 flex-1 space-y-3">
                        {pkg.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 font-body text-sm leading-6 text-foreground/70"
                          >
                            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                              <Check className="text-primary" size={12} />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => openBooking(pkg.name)}
                        className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 font-body text-sm font-semibold transition-all duration-500 ${
                          pkg.tag
                            ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.45)]"
                            : "border border-primary/30 text-foreground hover:bg-primary/10"
                        }`}
                      >
                        Choose {pkg.name}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section className="grid gap-4 md:grid-cols-2 lg:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-[28px] p-5 md:p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent/20">
                      <AlertCircle className="text-accent" size={16} />
                    </div>
                    <h2 className="font-heading text-xl font-bold md:text-2xl">Prerequisites</h2>
                  </div>
                  <ul className="space-y-3">
                    {course.prerequisites.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-sm leading-6 text-foreground/70"
                      >
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                          <Check className="text-accent" size={12} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="glass-card rounded-[28px] p-5 md:p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/20">
                      <ListChecks className="text-primary" size={16} />
                    </div>
                    <h2 className="font-heading text-xl font-bold md:text-2xl">What's Included</h2>
                  </div>
                  <ul className="space-y-3">
                    {course.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-sm leading-6 text-foreground/70"
                      >
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                          <Check className="text-primary" size={12} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              <section>
                <h2 className="mb-6 font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                  Explore More <span className="gradient-text">Courses</span>
                </h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:gap-6">
                  {otherCourses.map((relatedCourse) => (
                    <Link
                      key={relatedCourse.id}
                      to={`/courses/${relatedCourse.id}`}
                      className="glass-card group overflow-hidden rounded-[24px] transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.18)]"
                    >
                      <div className="h-28 overflow-hidden md:h-40 lg:h-48">
                        <img
                          src={imageMap[relatedCourse.image]}
                          alt={relatedCourse.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          width={800}
                          height={544}
                        />
                      </div>
                      <div className="p-3 md:p-5">
                        <h3 className="font-heading text-sm font-semibold transition-colors group-hover:text-primary md:text-lg">
                          {relatedCourse.title}
                        </h3>
                        <p className="mt-2 font-body text-[11px] text-foreground/55 md:text-sm">
                          {relatedCourse.duration} · {relatedCourse.level}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 font-body text-xs font-semibold text-primary md:text-sm">
                          View course
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <aside className="mt-14 hidden lg:block lg:mt-0">
              <div className="sticky top-28 space-y-6">
                <div className="glass-card rounded-[30px] p-7">
                  <p className="font-body text-xs uppercase tracking-[0.35em] text-primary/80">
                    Desktop Quick View
                  </p>
                  <h2 className="mt-4 font-heading text-2xl font-bold">Before You Book</h2>
                  <ul className="mt-5 space-y-4">
                    {course.prerequisites.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-sm leading-6 text-foreground/68"
                      >
                        <Check className="mt-1 flex-shrink-0 text-primary" size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openBooking()}
                    className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.45)]"
                  >
                    Reserve Your Spot
                  </button>
                </div>

                <div className="glass-card rounded-[30px] p-7">
                  <h3 className="font-heading text-xl font-bold">Package Snapshot</h3>
                  <div className="mt-4 space-y-3">
                    {course.packages.map((pkg) => (
                      <button
                        key={pkg.name}
                        onClick={() => openBooking(pkg.name)}
                        className="flex w-full items-center justify-between rounded-2xl border border-white/8 bg-background/20 px-4 py-3 text-left transition-colors hover:border-primary/30 hover:bg-primary/8"
                      >
                        <span>
                          <span className="block font-body text-sm font-semibold text-foreground">
                            {pkg.name}
                          </span>
                          <span className="block font-body text-xs text-foreground/55">
                            {pkg.features.length} inclusions
                          </span>
                        </span>
                        <span className="font-heading text-xl font-bold gradient-text">
                          {pkg.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={course.id}
        defaultPackage={selectedPkg}
      />
    </div>
  );
};

export default CourseDetails;
