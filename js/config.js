/**
 * TEACHER PORTFOLIO CONFIGURATION FILE
 * Easily personalize all teacher information, contact details, social links, and assets here.
 * Any empty field will gracefully fall back to placeholder labels in the UI.
 */

const TEACHER_CONFIG = {
  // Personal & Professional Profile
  fullName: "Sarah Jenkins, M.Ed.",
  shortName: "Sarah Jenkins",
  title: "Senior High School Mathematics & Physics Educator",
  tagline: "Empowering students through inquiry-based STEM learning, critical problem-solving, and academic excellence.",
  school: "Oakridge High School",
  cityState: "Seattle, WA",

  // Quick Stats
  stats: {
    yearsExperience: "10+",
    studentsMentored: "1,200+",
    apPassRate: "94%",
    resourcesCreated: "80+"
  },

  // Contact Information
  contact: {
    email: "sarah.jenkins.educator@example.com",
    phone: "+1 (206) 555-0192",
    whatsapp: "12065550192", // Plain number format for whatsapp API link
    whatsappDisplay: "+1 (206) 555-0192",
    workplace: "Oakridge High School, Dept. of Science & Mathematics",
    address: "742 Evergreen Terrace, Seattle, WA 98101",
    officeHours: "Monday – Thursday: 3:30 PM – 4:30 PM (or by appointment)"
  },

  // Social & Professional Profiles
  social: {
    linkedin: "https://www.linkedin.com/in/example-teacher-profile",
    twitter: "https://twitter.com/example_edu",
    youtube: "https://youtube.com/c/example-stem-lessons",
    github: "https://github.com/example-teacher"
  },

  // Asset Paths
  assets: {
    portrait: "assets/images/teacher-portrait.svg",
    classroom: "assets/images/classroom.svg",
    lab: "assets/images/lab.svg",
    cvDocument: "assets/documents/sample-cv.pdf",
    teachingCertificate: "assets/documents/teaching-certificate-sample.pdf"
  },

  // Key Subjects Taught
  subjects: [
    {
      id: "algebra-2",
      name: "Algebra II & Honors Algebra",
      grades: "Grades 9–11",
      icon: "calculator",
      description: "Focusing on polynomial, exponential, logarithmic, and trigonometric functions with real-world modeling applications."
    },
    {
      id: "ap-physics",
      name: "AP Physics 1 & Mechanics",
      grades: "Grades 11–12",
      icon: "atom",
      description: "Algebra-based introductory college-level physics covering Newtonian mechanics, work, energy, and harmonic motion."
    },
    {
      id: "ap-calculus",
      name: "AP Calculus AB/BC",
      grades: "Grades 11–12",
      icon: "chart-line",
      description: "Comprehensive study of limits, derivatives, definite integrals, and series with focus on conceptual mastery."
    },
    {
      id: "stem-capstone",
      name: "STEM Engineering & Research Capstone",
      grades: "Grade 12",
      icon: "lightbulb",
      description: "Project-based learning course where students design, prototype, and present independent scientific research."
    }
  ],

  // Teaching Philosophy Summary
  philosophySummary: "I believe mathematics and physics are not rigid lists of formulas to memorize, but powerful tools for questioning, understanding, and shaping the world around us. My classroom prioritizes active inquiry, psychological safety for mistake-driven growth, and differentiated support to build lasting confidence in every learner.",

  // Learning Resources List
  resources: [
    {
      id: "res-1",
      title: "Algebra II: Quadratic Functions Practice & Applications",
      subject: "Mathematics",
      grade: "Grades 9-10",
      category: "worksheet",
      categoryLabel: "Worksheet",
      description: "Comprehensive problem set covering factoring, vertex form conversion, quadratic formula, and projectile motion word problems.",
      fileUrl: "assets/documents/algebra-worksheet.pdf",
      thumbnailUrl: "assets/images/resource-thumb-1.svg",
      fileType: "PDF",
      fileSize: "1.2 MB",
      dateAdded: "2024-10-15"
    },
    {
      id: "res-2",
      title: "AP Physics 1: Newton's Laws Guided Inquiry Lesson Plan",
      subject: "Physics",
      grade: "Grades 11-12",
      category: "lesson-plan",
      categoryLabel: "Lesson Plan",
      description: "5E model lesson plan featuring interactive lab investigation of friction, tension force vectors, and free-body diagram analysis.",
      fileUrl: "assets/documents/physics-lesson-plan.pdf",
      thumbnailUrl: "assets/images/resource-thumb-2.svg",
      fileType: "PDF",
      fileSize: "850 KB",
      dateAdded: "2024-11-02"
    },
    {
      id: "res-3",
      title: "AP Chemistry & Chemical Bonding Comprehensive Study Guide",
      subject: "Chemistry & Physics",
      grade: "Grades 10-12",
      category: "study-guide",
      categoryLabel: "Study Guide",
      description: "Visual summary guide detailing molecular geometry, VSEPR theory, intermolecular forces, and lattice energy diagrams.",
      fileUrl: "assets/documents/chemistry-study-guide.pdf",
      thumbnailUrl: "assets/images/resource-thumb-3.svg",
      fileType: "PDF",
      fileSize: "2.4 MB",
      dateAdded: "2024-09-20"
    },
    {
      id: "res-4",
      title: "Mid-Term Mathematics Comprehensive Revision & Practice Quiz",
      subject: "Mathematics",
      grade: "Grades 10-11",
      category: "revision",
      categoryLabel: "Revision Quiz",
      description: "40-question review package with step-by-step answer key covering functions, sequences, and logarithmic equations.",
      fileUrl: "assets/documents/math-revision-quiz.pdf",
      thumbnailUrl: "assets/images/resource-thumb-4.svg",
      fileType: "PDF",
      fileSize: "1.8 MB",
      dateAdded: "2024-12-01"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What is your approach to classroom management?",
      answer: "I establish a culture of mutual respect, clear boundaries, and collaborative routines from day one. I view behavior as communication, focusing on restorative practices, clear expectations, and positive reinforcement to keep the focus on learning."
    },
    {
      question: "How do you support students who struggle with abstract math concepts?",
      answer: "I use a Concrete-Representational-Abstract (CRA) instructional framework. Students begin with physical manipulatives or visual geometric simulations, transition to graphic diagrams, and gradually advance to symbolic equations. I also offer daily office hours and peer tutoring."
    },
    {
      question: "How do you integrate technology into daily lessons?",
      answer: "Technology is used purposefully to enhance conceptual understanding. We use Desmos for dynamic function graphing, PhET Interactive Simulations for virtual physics experiments, and Google Classroom for transparent assignment tracking."
    },
    {
      question: "How do you communicate student progress with parents and guardians?",
      answer: "Communication is proactive and consistent. In addition to bi-weekly gradebook updates, I send regular class newsletters highlighting upcoming projects and reach out personally via email or phone whenever a student demonstrates exceptional progress or needs additional intervention."
    }
  ],

  // Domain & Site Configuration
  siteDomain: "https://sarahjenkins-teacher.example.com",
  siteTitleSuffix: "Sarah Jenkins | STEM Educator Portfolio"
};

// Make configuration available globally
if (typeof window !== "undefined") {
  window.TEACHER_CONFIG = TEACHER_CONFIG;
}
