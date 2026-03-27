export interface CoursePackage {
  name: string;
  price: string;
  tag?: string;
  features: string[];
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
  requirements: string[];
  image: string;
  packages: CoursePackage[];
}

export const courses: Course[] = [
  {
    id: "padi-scuba-diver",
    title: "PADI Scuba Diver",
    duration: "3 Days",
    level: "Beginner",
    price: "₹15,000",
    description: "Your first step into the underwater world. Perfect for those short on time who want a certified diving experience.",
    longDescription: "The PADI Scuba Diver course is a subset of the PADI Open Water Diver course. If you're short on time but really want to become a diver, this certification allows you to dive under the direct supervision of a PADI Professional to a maximum depth of 12 metres/40 feet. You'll learn fundamental scuba diving skills and knowledge that serve as a foundation for the full Open Water Diver course.",
    includes: ["PADI eLearning access", "3 confined water dives", "2 open water dives", "All equipment rental", "PADI certification card", "Underwater photos"],
    requirements: ["Minimum age: 15 years", "Ability to swim 200m", "Basic health fitness", "No prior experience needed"],
    image: "course-scuba-diver",
    packages: [
      {
        name: "Basic",
        price: "₹15,000",
        features: ["PADI eLearning access", "3 confined water dives", "2 open water dives", "Equipment rental", "PADI certification card"],
      },
      {
        name: "Premium",
        price: "₹19,000",
        tag: "Popular",
        features: ["Everything in Basic", "Underwater photos & video", "Extra practice dive", "Dive logbook", "Turtle Nest Scuba T-shirt"],
      },
      {
        name: "VIP",
        price: "₹24,000",
        features: ["Everything in Premium", "Private instructor (1-on-1)", "GoPro footage on USB", "Lunch included daily", "Airport pickup & drop"],
      },
    ],
  },
  {
    id: "padi-open-water",
    title: "PADI Open Water Diver",
    duration: "4 Days",
    level: "Beginner",
    price: "₹25,000",
    description: "The world's most popular diving certification. Dive independently to 18 meters anywhere in the world.",
    longDescription: "The PADI Open Water Diver course is the world's most popular and widely recognized scuba certification. Millions of people have learned to scuba dive and gone on to discover the wonders of the aquatic world through this course. This certification allows you to dive independently with a buddy to a maximum depth of 18 metres/60 feet anywhere in the world.",
    includes: ["PADI eLearning access", "5 confined water sessions", "4 open water dives", "All equipment rental", "PADI certification card", "Dive logbook", "Underwater photos & video"],
    requirements: ["Minimum age: 15 years", "Ability to swim 200m", "Float/tread water for 10 minutes", "Basic health fitness"],
    image: "course-open-water",
    packages: [
      {
        name: "Standard",
        price: "₹25,000",
        features: ["PADI eLearning access", "5 confined water sessions", "4 open water dives", "Equipment rental", "PADI certification card", "Dive logbook"],
      },
      {
        name: "Premium",
        price: "₹32,000",
        tag: "Best Value",
        features: ["Everything in Standard", "Underwater photos & video", "2 bonus fun dives", "Nitrox awareness briefing", "Turtle Nest Scuba kit bag"],
      },
      {
        name: "Ultimate",
        price: "₹42,000",
        features: ["Everything in Premium", "Private instructor", "GoPro footage on USB", "Daily meals included", "Accommodation (3 nights)", "Airport transfers"],
      },
    ],
  },
  {
    id: "padi-advanced-open-water",
    title: "PADI Advanced Open Water Diver",
    duration: "2 Days",
    level: "Intermediate",
    price: "₹20,000",
    description: "Expand your diving skills with deep dives, navigation, and specialty adventures down to 30 meters.",
    longDescription: "The PADI Advanced Open Water Diver course helps you increase your confidence and build your scuba skills so you can become more comfortable in the water. This course includes 5 adventure dives including Deep and Underwater Navigation, plus three additional dives of your choice. Explore wrecks, perfect your buoyancy, dive at night, and more!",
    includes: ["5 adventure dives", "Deep dive to 30m", "Navigation dive", "3 elective dives", "All equipment rental", "PADI certification card"],
    requirements: ["PADI Open Water Diver certification", "Minimum age: 15 years", "Basic health fitness"],
    image: "course-advanced",
    packages: [
      {
        name: "Standard",
        price: "₹20,000",
        features: ["5 adventure dives", "Deep dive to 30m", "Navigation dive", "3 elective dives", "Equipment rental", "PADI certification"],
      },
      {
        name: "Explorer",
        price: "₹27,000",
        tag: "Popular",
        features: ["Everything in Standard", "Night dive included", "Wreck dive included", "Underwater photography session", "HD dive video"],
      },
    ],
  },
  {
    id: "emergency-first-responder",
    title: "Emergency First Responder",
    duration: "1 Day",
    level: "All Levels",
    price: "₹8,000",
    description: "Learn essential life-saving skills including CPR, first aid, and emergency oxygen delivery.",
    longDescription: "The Emergency First Responder (EFR) course teaches you critical life-saving techniques that are applicable in everyday emergencies, not just diving scenarios. You'll build confidence to respond in medical emergencies with skills covering primary care (CPR), secondary care (first aid), and emergency oxygen delivery. This certification is a prerequisite for the PADI Rescue Diver course.",
    includes: ["Primary care (CPR) training", "Secondary care (First Aid)", "AED training", "Emergency oxygen delivery", "EFR certification card", "EFR manual"],
    requirements: ["No prerequisites", "Minimum age: 12 years", "Interest in emergency care"],
    image: "course-efr",
    packages: [
      {
        name: "Standard",
        price: "₹8,000",
        features: ["CPR training", "First Aid training", "AED training", "EFR certification card", "EFR manual"],
      },
      {
        name: "Complete",
        price: "₹12,000",
        tag: "Recommended",
        features: ["Everything in Standard", "Emergency oxygen delivery", "Care for Children module", "Refresher session after 3 months", "First aid kit included"],
      },
    ],
  },
  {
    id: "rescue-diver",
    title: "PADI Rescue Diver",
    duration: "3 Days",
    level: "Intermediate",
    price: "₹22,000",
    description: "Learn to prevent and manage diving emergencies. The most challenging yet rewarding PADI course.",
    longDescription: "PADI Rescue Diver is a challenging yet incredibly rewarding course that expands your knowledge and skills. You'll learn to look beyond yourself to consider the safety and well-being of other divers. The course teaches you to become a better buddy, covering self-rescue, recognizing and managing stress in other divers, emergency management and equipment, and rescuing panicked and unresponsive divers.",
    includes: ["Rescue scenarios & exercises", "Self-rescue techniques", "Emergency management training", "Equipment rescue skills", "All equipment rental", "PADI certification card"],
    requirements: ["PADI Advanced Open Water certification", "EFR certification (within 24 months)", "Minimum age: 15 years"],
    image: "course-rescue",
    packages: [
      {
        name: "Standard",
        price: "₹22,000",
        features: ["Rescue scenarios & exercises", "Self-rescue techniques", "Emergency management training", "Equipment rental", "PADI certification"],
      },
      {
        name: "Pro Prep",
        price: "₹30,000",
        tag: "Best Value",
        features: ["Everything in Standard", "Extra rescue practice day", "Divemaster orientation session", "Underwater search & recovery intro", "HD training video", "Daily meals"],
      },
    ],
  },
  {
    id: "divemaster",
    title: "PADI Divemaster",
    duration: "4-6 Weeks",
    level: "Professional",
    price: "₹55,000",
    description: "Your first step into professional diving. Lead dives and assist instructors worldwide.",
    longDescription: "The PADI Divemaster course is your first level of professional training. Working closely with a PADI Instructor, you'll fine-tune your dive skills and develop your knowledge of dive theory to a professional level. PADI Divemaster certification allows you to supervise dive activities and assist instructors with student divers. You'll also earn the right to lead certified divers on guided dives.",
    includes: ["Comprehensive dive theory", "Water skills assessments", "Practical training scenarios", "Internship experience", "All equipment rental", "PADI Divemaster certification", "Professional-level materials"],
    requirements: ["PADI Rescue Diver certification", "EFR within 24 months", "40 logged dives minimum", "Medical clearance", "Minimum age: 18 years"],
    image: "course-divemaster",
    packages: [
      {
        name: "Standard",
        price: "₹55,000",
        features: ["Comprehensive dive theory", "Water skills assessments", "Practical training scenarios", "Internship experience", "Equipment rental", "PADI Divemaster certification"],
      },
      {
        name: "Career Launch",
        price: "₹75,000",
        tag: "Most Popular",
        features: ["Everything in Standard", "Extended internship (2 extra weeks)", "Job placement assistance", "Professional resume building", "Accommodation included", "Daily meals", "IDC preparation overview"],
      },
    ],
  },
  {
    id: "zero-to-hero",
    title: "Zero to Hero Program",
    duration: "8-10 Weeks",
    level: "Beginner to Professional",
    price: "₹1,10,000",
    description: "Go from complete beginner to PADI Divemaster in one comprehensive program.",
    longDescription: "Our Zero to Hero program takes you from your very first breath underwater all the way to becoming a PADI Divemaster. This all-inclusive package combines Open Water, Advanced Open Water, EFR, Rescue Diver, and Divemaster courses into one seamless journey. It's the most cost-effective and immersive way to go professional. Live, breathe, and dream diving for 8-10 incredible weeks.",
    includes: ["All courses: OW to Divemaster", "Complete eLearning package", "All equipment rental", "Accommodation assistance", "Professional-level certification", "Lifetime mentorship", "Job placement assistance"],
    requirements: ["Minimum age: 18 years", "Ability to swim 200m", "Medical clearance", "Passion for the ocean"],
    image: "course-open-water",
    packages: [
      {
        name: "Standard",
        price: "₹1,10,000",
        features: ["All courses: OW to Divemaster", "Complete eLearning package", "Equipment rental throughout", "PADI certifications at every level", "Dive logbook"],
      },
      {
        name: "All-Inclusive",
        price: "₹1,45,000",
        tag: "Best Deal",
        features: ["Everything in Standard", "Full accommodation (8-10 weeks)", "Daily meals", "Airport transfers", "Lifetime mentorship", "Job placement assistance", "Branded dive gear set"],
      },
    ],
  },
];
