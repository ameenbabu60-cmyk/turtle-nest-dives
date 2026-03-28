export interface CoursePackage {
  name: string;
  price: string;
  tag?: string;
  features: string[];
}

export interface CourseStructureStep {
  title: string;
  description: string;
  details?: string[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  price: string;
  description: string;
  longDescription: string;
  includes: string[];
  prerequisites: string[];
  courseStructure: CourseStructureStep[];
  durationNote: string;
  pricingNote?: string;
  image: string;
  packages: CoursePackage[];
}

export const courses: Course[] = [
  {
    id: "discover-scuba-diving",
    title: "PADI Discover Scuba Diving",
    duration: "Half Day",
    level: "Experience",
    price: "₹6,000",
    description: "A fun, introductory experience that lets you try scuba diving under the direct supervision of a PADI Professional. No certification needed.",
    longDescription: "This program is a fun, introductory experience that lets you try scuba diving under the direct supervision of a PADI Professional. It's perfect for those who want to experience the thrill of diving without committing to a full certification course. While this is not a certification, it gives you a glimpse into the underwater world and is a great way to determine if you'd like to pursue further dive training.",
    includes: [
      "Basic dive theory briefing",
      "Equipment usage training",
      "Confined water dive practice",
      "Optional open water dive (up to 12m)",
      "All equipment provided",
      "Expert PADI instructor guidance",
      "Underwater photos & videos",
    ],
    prerequisites: [
      "Minimum age: 10 years old",
      "Basic comfort in the water (no formal swim test)",
      "PADI Medical Statement must be completed",
      "Physician clearance if any medical conditions",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Briefing",
        description: "Learn basic dive theory from a PADI Instructor, including safety guidelines, equipment usage, equalizing pressure, and basic underwater communication.",
        details: ["Can be completed online via PADI eLearning system", "Review materials and gain basic understanding before dive day"],
      },
      {
        title: "Confined Water Dive",
        description: "Practice key skills in a pool or shallow water environment under close supervision.",
        details: ["Breathing underwater", "Regulator clearing", "Mask clearing", "Basic buoyancy control"],
      },
      {
        title: "Optional Open Water Dive",
        description: "After successfully completing the confined water dive, take part in a supervised open water dive up to 12 meters/40 feet to experience real-world scuba diving conditions.",
      },
    ],
    durationNote: "The program typically takes half a day, including the briefing and confined water dive, with the option to add an open water dive. PADI eLearning is available for the theory portion.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-scuba-diver",
    packages: [
      {
        name: "Basic Explorer",
        price: "₹6,000",
        features: ["1 shore dive of 45 minutes", "Underwater videos & photos", "All equipment included", "PADI instructor supervision"],
      },
      {
        name: "Premium Adventurer",
        price: "₹9,000",
        tag: "Popular",
        features: ["1 shore dive of 45 minutes", "1 boat dive of 45 minutes", "Underwater videos & photos", "All equipment included", "PADI instructor supervision"],
      },
      {
        name: "Elite Diver",
        price: "₹12,000",
        features: ["2 boat dives of 45 minutes each", "Underwater videos & photos", "All equipment included", "PADI instructor supervision", "Premium boat experience"],
      },
    ],
  },
  {
    id: "padi-scuba-diver",
    title: "PADI Scuba Diver",
    duration: "2–3 Days",
    level: "Beginner",
    price: "₹17,000",
    description: "An entry-level certification for those who want to experience scuba diving. Qualifies you to dive under professional supervision to 12 metres.",
    longDescription: "The PADI Scuba Diver course is an entry level certification for those who want to experience scuba diving but may not have the time to complete the full Open Water Diver certification. It qualifies you to dive under professional supervision to a depth of 12 meters (40 feet), making it ideal for vacation divers or those wanting a quick start.",
    includes: [
      "PADI eLearning access",
      "Knowledge development sessions",
      "Confined water dives",
      "2 open water dives",
      "All equipment rental",
      "PADI Scuba Diver certification card",
    ],
    prerequisites: [
      "Minimum age: 10 years (Junior Scuba Diver), 15 years (full certification)",
      "Basic swimming ability required",
      "PADI Medical Statement must be completed",
      "Physician clearance if any medical conditions",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description: "Learn the fundamentals of scuba diving, such as equipment use, dive planning, and underwater communication.",
      },
      {
        title: "Confined Water Dives",
        description: "Practice basic scuba skills in a pool or confined water setting.",
        details: ["Mask clearing", "Regulator recovery", "Buoyancy control", "Emergency procedures"],
      },
      {
        title: "Open Water Dives",
        description: "Complete two open water dives under the supervision of a PADI Professional to apply your skills in real-world conditions. Dives are conducted in a lake, ocean, or similar open water environment.",
      },
    ],
    durationNote: "Typically takes 2–3 days. PADI eLearning allows you to complete the theory portion online before arriving at the dive center, saving time on-site.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-scuba-diver",
    packages: [
      {
        name: "Basic Explorer",
        price: "₹17,000",
        features: ["2 shore dives", "PADI eLearning access", "All equipment rental", "PADI certification card"],
      },
      {
        name: "Premium Adventurer",
        price: "₹22,000",
        tag: "Popular",
        features: ["1 shore dive + 1 boat dive", "PADI eLearning access", "All equipment rental", "PADI certification card", "Underwater photos & videos"],
      },
      {
        name: "Elite Diver",
        price: "₹27,000",
        features: ["1 shore dive + 1 boat dive", "Sunset kayaking (1.5 hours)", "PADI eLearning access", "All equipment rental", "PADI certification card", "Underwater photos & videos"],
      },
    ],
  },
  {
    id: "padi-open-water",
    title: "PADI Open Water Diver",
    duration: "3–4 Days",
    level: "Beginner",
    price: "₹27,000",
    description: "The world's most popular scuba diving certification. Dive independently with a buddy to a maximum depth of 18 metres anywhere in the world.",
    longDescription: "The PADI Open Water Diver Course is the world's most popular scuba diving certification course. It teaches you the basic knowledge and skills needed to dive safely. Upon completion, you'll be certified to dive independently with a buddy to a maximum depth of 18 meters (60 feet).",
    includes: [
      "PADI eLearning access",
      "Knowledge development sessions",
      "Confined water dives",
      "4 open water dives",
      "All equipment rental",
      "PADI Open Water Diver certification card",
    ],
    prerequisites: [
      "Minimum age: 10 years (Junior OWD), 15 years (full certification)",
      "Swim 200m (or 300m with mask, fins & snorkel)",
      "Tread water for 10 minutes",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description: "Complete the theory portion via PADI eLearning or in-person sessions covering dive safety, equipment, and basic diving principles.",
      },
      {
        title: "Confined Water Dives",
        description: "Practice essential skills in a controlled environment, such as mask clearing and regulator recovery.",
      },
      {
        title: "Open Water Dives",
        description: "Perform four dives in open water to apply your skills under the supervision of a PADI Instructor.",
      },
    ],
    durationNote: "Typically takes 3–4 days. Completing the theory portion via PADI eLearning allows for faster progression in the practical segments.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-open-water",
    packages: [
      {
        name: "Basic Explorer",
        price: "₹27,000",
        features: ["4 shore dives", "PADI eLearning access", "All equipment rental", "PADI certification card"],
      },
      {
        name: "Premium Adventurer",
        price: "₹32,000",
        tag: "Best Value",
        features: ["3 shore dives + 1 boat dive", "PADI eLearning access", "All equipment rental", "PADI certification card", "Underwater photos & videos"],
      },
      {
        name: "Elite Diver",
        price: "₹36,000",
        features: ["2 shore dives + 2 boat dives", "PADI eLearning access", "All equipment rental", "PADI certification card", "Underwater photos & videos"],
      },
    ],
  },
  {
    id: "padi-advanced-open-water",
    title: "PADI Advanced Open Water Diver",
    duration: "2 Days",
    level: "Intermediate",
    price: "₹22,000",
    description: "Enhance your diving skills and confidence with five adventure dives including mandatory Deep Diving and Underwater Navigation.",
    longDescription: "The PADI Advanced Open Water Diver Course enhances your diving skills and confidence by introducing you to new types of diving. This course focuses on practical experience and includes five adventure dives, two of which are mandatory: Deep Diving and Underwater Navigation.",
    includes: [
      "5 adventure dives",
      "Deep dive (mandatory)",
      "Underwater navigation dive (mandatory)",
      "3 elective adventure dives",
      "All equipment rental",
      "PADI Advanced OWD certification card",
    ],
    prerequisites: [
      "Minimum age: 12 years (Junior AOWD), 15 years (full certification)",
      "Certified PADI Open Water Diver (or equivalent)",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description: "Study materials accessed through PADI eLearning or in-person sessions, covering dive planning, navigation, and deeper dives.",
      },
      {
        title: "Adventure Dives",
        description: "Complete five dives including the mandatory Deep Dive and Underwater Navigation Dive, plus three elective dives.",
        details: ["Deep Dive (mandatory)", "Navigation Dive (mandatory)", "Night Diving (elective)", "Wreck Diving (elective)", "Other specialties available"],
      },
    ],
    durationNote: "Typically 2 days, with PADI eLearning facilitating quicker theory completion.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-advanced",
    packages: [
      {
        name: "Basic Explorer",
        price: "₹22,000",
        features: ["3 shore dives + 2 boat deep dives", "PADI eLearning access", "All equipment rental", "PADI certification card"],
      },
      {
        name: "Premium Adventurer",
        price: "₹32,000",
        tag: "Popular",
        features: ["2 shore dives + 3 boat dives", "PADI eLearning access", "All equipment rental", "PADI certification card", "Underwater photos & videos"],
      },
      {
        name: "Elite Diver",
        price: "₹38,000",
        features: ["2 shore dives + 3 boat dives", "1 additional fun dive", "PADI eLearning access", "All equipment rental", "PADI certification card", "Underwater photos & videos"],
      },
    ],
  },
  {
    id: "emergency-first-responder",
    title: "Emergency First Responder (EFR)",
    duration: "1 Day",
    level: "All Levels",
    price: "₹11,000",
    description: "Learn to respond to medical emergencies with CPR and First Aid training. Essential for divers and non-divers alike.",
    longDescription: "The EFR course is designed to teach participants how to respond to medical emergencies and perform CPR and First Aid. This course is essential for divers and non-divers alike and is a prerequisite for the PADI Rescue Diver course.",
    includes: [
      "Primary care (CPR) training",
      "Secondary care (First Aid) training",
      "Rescue breathing techniques",
      "Hands-on practical skills",
      "EFR certification card",
      "EFR manual",
    ],
    prerequisites: [
      "No age or diving prerequisites",
      "Open to everyone, including non-divers",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description: "Theory completed via PADI eLearning, covering CPR, first aid, and emergency response techniques.",
      },
      {
        title: "Practical Skills",
        description: "Hands-on practice of CPR, rescue breathing, and first aid techniques in realistic scenarios.",
      },
    ],
    durationNote: "Typically completed in one day, with PADI eLearning allowing flexibility for theory study.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-efr",
    packages: [
      {
        name: "Standard",
        price: "₹11,000",
        features: ["CPR training", "First Aid training", "Rescue breathing", "EFR certification card", "EFR manual", "Hands-on practical sessions"],
      },
    ],
  },
  {
    id: "rescue-diver",
    title: "PADI Rescue Diver",
    duration: "3–4 Days",
    level: "Intermediate",
    price: "₹20,000",
    description: "Learn to recognise and manage diving emergencies. Focuses on self-rescue skills and assisting others in distress.",
    longDescription: "The Rescue Diver Course teaches divers how to recognise and manage diving emergencies. It focuses on self-rescue skills and assisting others in distress, making it vital for any serious diver.",
    includes: [
      "Self-rescue techniques",
      "Recognising diver stress",
      "Emergency management training",
      "Confined water training",
      "Open water rescue scenarios",
      "PADI Rescue Diver certification card",
    ],
    prerequisites: [
      "Minimum age: 12 years (Junior), 15 years (full certification)",
      "Certified PADI Advanced Open Water Diver (or equivalent)",
      "EFR certification within the last 24 months",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description: "Theory completed via PADI eLearning or in-person, covering dive safety, emergency procedures, and rescue techniques.",
      },
      {
        title: "Practical Exercises",
        description: "Participate in confined water training and open water rescue scenarios, including assisting distressed divers and managing emergencies.",
      },
    ],
    durationNote: "Typically 3–4 days, with PADI eLearning available to expedite the theoretical portion.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-rescue",
    packages: [
      {
        name: "Basic Explorer",
        price: "₹20,000",
        features: ["Complete rescue training", "No extra fun dives", "All equipment rental", "PADI certification card"],
      },
      {
        name: "Premium Adventurer",
        price: "₹23,000",
        tag: "Popular",
        features: ["Complete rescue training", "1 additional shore fun dive", "All equipment rental", "PADI certification card", "Underwater photos"],
      },
      {
        name: "Elite Diver",
        price: "₹26,000",
        features: ["Complete rescue training", "2 additional shore fun dives", "All equipment rental", "PADI certification card", "Underwater photos & videos"],
      },
    ],
  },
  {
    id: "divemaster",
    title: "PADI Divemaster",
    duration: "4–6 Weeks",
    level: "Professional",
    price: "₹70,000",
    description: "The first professional level in scuba diving. Train to lead dives, assist instructors, and supervise dive activities.",
    longDescription: "The PADI Divemaster Course is the first professional level in scuba diving. It trains divers to lead dives, assist instructors, and supervise dive activities, focusing on leadership and dive management skills.",
    includes: [
      "Comprehensive dive theory",
      "Water skills assessments",
      "Practical training scenarios",
      "Assisting instructor experience",
      "Leading dives training",
      "PADI Divemaster certification",
    ],
    prerequisites: [
      "Minimum age: 18 years old",
      "Certified PADI Rescue Diver (or equivalent)",
      "EFR certification within the last 24 months",
      "At least 40 logged dives to start, 60 to complete",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description: "Theory completed via PADI eLearning or in-person sessions, covering dive theory, leadership skills, and dive management.",
      },
      {
        title: "Practical Application",
        description: "Involves assisting instructors, leading dives, and managing dive activities in real-world scenarios.",
      },
    ],
    durationNote: "Typically takes 4–6 weeks, with PADI eLearning available to streamline the theory portion. Divemaster internship also available — contact us for details.",
    pricingNote: "Price excludes Divemaster course material, Crew pack, and PADI exam fees — all payable directly to PADI. Prices mentioned are without 18% GST.",
    image: "course-divemaster",
    packages: [
      {
        name: "Basic Explorer",
        price: "₹70,000",
        features: ["Complete Divemaster training", "Water skills assessments", "Practical scenarios", "PADI Divemaster certification", "No extra benefits"],
      },
      {
        name: "Premium Adventurer",
        price: "₹90,000",
        tag: "Most Popular",
        features: ["Everything in Basic Explorer", "Equipment specialist training", "Repairing unbalanced regulators", "Tank valve repair training", "PADI Divemaster certification"],
      },
      {
        name: "Elite Diver",
        price: "₹1,20,000",
        features: ["Everything in Premium Adventurer", "Level 01 compressor repair training", "Equipment specialist certification", "Extended practical training", "PADI Divemaster certification"],
      },
    ],
  },
  {
    id: "zero-to-hero",
    title: "PADI Zero to Hero Program",
    duration: "6–8 Weeks",
    level: "Beginner to Professional",
    price: "₹1,50,000",
    description: "A comprehensive program from complete beginner to PADI Divemaster. Combines all certifications into one continuous training journey.",
    longDescription: "The PADI Zero to Hero Course is a comprehensive program that prepares participants for a career in diving. It combines multiple PADI certifications — from Open Water to Divemaster — into one continuous training program.",
    includes: [
      "Open Water Diver certification",
      "Advanced Open Water Diver certification",
      "Emergency First Responder certification",
      "Rescue Diver certification",
      "Divemaster certification",
      "PADI eLearning for all courses",
      "All equipment rental",
    ],
    prerequisites: [
      "Minimum age: 18 years old",
      "Good health and physical fitness for diving",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Open Water Diver",
        description: "Learn fundamental diving skills and earn your first certification to dive to 18 metres.",
      },
      {
        title: "Advanced Open Water Diver",
        description: "Expand your skills with five adventure dives including deep diving and navigation.",
      },
      {
        title: "Emergency First Responder",
        description: "Learn critical CPR and first aid skills essential for rescue training.",
      },
      {
        title: "Rescue Diver",
        description: "Master self-rescue and learn to manage diving emergencies.",
      },
      {
        title: "Divemaster",
        description: "Complete professional-level training to lead dives and assist instructors.",
      },
    ],
    durationNote: "Typically takes 6–8 weeks, depending on the training schedule. Divemaster internship also available — contact us for details.",
    pricingNote: "Price excludes Divemaster course material, Crew pack, and PADI exam fees — all payable directly to PADI. Prices mentioned are without 18% GST.",
    image: "course-open-water",
    packages: [
      {
        name: "Basic Explorer",
        price: "₹1,50,000",
        features: ["All courses: OW to Divemaster", "Complete eLearning package", "All equipment rental", "All PADI certifications", "No extra benefits"],
      },
      {
        name: "Premium Adventurer",
        price: "₹2,40,000",
        tag: "Best Deal",
        features: ["Everything in Basic Explorer", "All remaining 40 logged fun dives", "Required for Divemaster credential", "All equipment rental", "All PADI certifications"],
      },
      {
        name: "Elite Diver",
        price: "₹2,60,000",
        features: ["Everything in Premium Adventurer", "Equipment specialist training", "Repairing unbalanced regulators", "Level 01 compressor repair training", "All PADI certifications"],
      },
    ],
  },
];
