/* =========================================================
   data.js — single source of truth for editable content.
   Update this file when your info changes; layout/animation
   code in main.js and github-api.js should not need touching.
   ========================================================= */

const SITE_DATA = {
  person: {
    name: "Gourahari Sahoo",
    handle: "CodeGoura",
    location: "Bhubaneswar, Odisha, India",
    roles: [
      "Full-Stack Developer",
      "Graphic & 3D Designer",
      "Cybersecurity Enthusiast",
    ],
    tagline: "Precision in action, strength in silence.",
    about:
      "I thrive at the intersection of creativity and code. With a toolkit that spans scalable web development to graphic and 3D design, I help brands and institutions build digital products and physical experiences that stand out — and stay secure.",
    currentlyBuilding: "ML Technology",
    currentlyLearning: " Game Development",
    collaborateOn: "A music app",
    email: "codegoura+info@gmail.com",
    inquiryEmail: "codegoura+inquiry@gmail.com",
    phone: "+91 9348766149",
    resumeUrl: "resume/Gourahari_Sahoo_Resume.pdf",
  },

  socials: [
    { label: "GitHub", url: "https://github.com/codegoura", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/gouraharisaho0/",
      icon: "linkedin",
    },
    {
      label: "LeetCode",
      url: "https://leetcode.com/Gourahari0/",
      icon: "leetcode",
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/@CODEGOURA",
      icon: "youtube",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/codegoura/",
      icon: "facebook",
    },
    {
      label: "Instagram",
      url: "https://instagram.com/codegoura",
      icon: "instagram",
    },
    {
      label: "Buy Me a Coffee",
      url: "https://www.buymeacoffee.com/codegoura",
      icon: "coffee",
    },
  ],

  topSkills: [
    "Graphic Design",
    "3D Modeling",
    "Responsive Web Design",
    "Data Analysis",
    "Cybersecurity",
    "Project Management",
    "Public Relations",
    "Teamwork",
  ],

  services: [
    "3D Design",
    "Graphic Design",
    "Video Editing",
    "Mobile App Development",
    "Web Design",
    "Web Development",
    "WordPress Design",
    "Custom Software Development",
    "IoT & Embedded Systems",
    "Penetration Testing",
  ],

  techStack: [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Python",
    "C",
    "C++",
    "C#",
    "Flutter",
    "Java",
    "Node.js",
    "Tailwind",
    "Docker",
    "MySQL",
    "PHP",
    "Linux",
    "WordPress",
    "Git",
    "Power BI",
    "Arduino",
    "ESP8266",
    "Adobe Creative Suite",
    "Autodesk 3ds Max",
    "",
  ],

  languages: [
    { name: "Odia", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "English", level: "Intermediate" },
    { name: "Bengali", level: "Basic" },
  ],

  // Selected Work — Design & Exhibition. Add photos as:
  // photos: [{ src: "assets/images/project-photo.jpg", alt: "Short description" }]
  designWork: [
    {
      title: "Rourkela Tribal Museum",
      dates: "2025–2026",
      partner: "Virtu Communications",
      photos: [
        { src: "assets/images/RMCMuseum/img1.jfif", alt: "Museum front view" },
        { src: "assets/images/RMCMuseum/img2.jfif", alt: "Museum interior design" },
        { src: "assets/images/RMCMuseum/img3.jfif", alt: "Museum exhibition layout" },
      ],
      summary:
        "3D design development for a museum inaugurated by the Hon'ble President of India, preserving Odisha's tribal heritage.",
      tags: ["3D Design", "Museum", "Heritage"],
    },
    {
      title: "Odisha Pavilion — IITF 2024",
      dates: "2024",
      partner: "Virtu Communications",
      photos: [],
      summary:
        "Concept design for Odisha's pavilion at the India International Trade Fair, blending temple architecture, textiles and handicrafts with a modern spatial language.",
      tags: ["Concept Design", "Exhibition"],
    },
    {
      title: "Zilla Swadeshi Mela & National Level Pallishree Mela",
      dates: "Dec 2025",
      partner: "Virtu Communications",
      photos: [],
      summary:
        "3D view and layout design at KOSAMB — visitor-friendly stall arrangement, accessible pathways and a strong visual identity.",
      tags: ["Layout Design", "3D View"],
    },
    {
      title: "Handloom Heritage Exhibition",
      dates: "May–Jun 2025",
      partner: null,
      photos: [],
      summary:
        "Full 3D model and exhibition layout blending traditional handloom and textile motifs with modern design for visitor storytelling.",
      tags: ["3D Modeling", "Exhibition"],
    },
    {
      title: "Adivasi Mela 2025 & 2026",
      dates: "Nov 2024–Jan 2025, 2026",
      partner: "Bharati Chitralaya (2026)",
      photos: [],
      summary:
        "3D view and layout for a major tribal-culture exhibition — Adivasi Gaon village, Adivasi Haat market, Bhagwan Birsa Munda Pavilion, and laser/drone shows.",
      tags: ["3D View", "Event Design"],
    },
    {
      title: "ORMAS Pallishree Mela, Kosamb",
      dates: "Nov 2024–Jan 2025",
      partner: null,
      photos: [],
      summary:
        "Full visual design set — posters, banners, signage and tribal art-based graphics.",
      tags: ["Graphic Design", "Signage"],
    },
    {
      title: "SISIR SARAS 2026",
      dates: "2026",
      partner: "Virtu Communication",
      photos: [],
      summary:
        "3D view and layout design — visitor-friendly, well-planned stalls, clean visual structure.",
      tags: ["3D View", "Layout Design"],
    },
    {
      title: "World Skill Center Parade — Tableau Design",
      dates: "2026",
      partner: null,
      photos: [],
      summary: "Concept, structure and 3D visualization of a parade tableau.",
      tags: ["Tableau", "3D Visualization"],
    },
    {
      title: "Works Department Parade — Tableau Design",
      dates: "2026",
      partner: null,
      photos: [],
      summary:
        "Concept, structure and 3D visualization highlighting infrastructure development and public service.",
      tags: ["Tableau", "3D Visualization"],
    },
    {
      title: "Super Hero Sculpture Design",
      dates: "Oct–Nov 2025",
      partner: null,
      photos: [],
      summary:
        "An original superhero sculpture — concept sketching, 3D form planning, structure building and final detailing.",
      tags: ["Sculpture", "3D Design"],
    },
    {
      title: "Odisha Wall Painting Series",
      dates: null,
      partner: null,
      photos: [],
      summary:
        "Public wall-painting designs across Odisha reflecting local heritage and improving public spaces.",
      tags: ["Public Art", "Graphic Design"],
    },
    {
      title: "Quickshow",
      dates: null,
      partner: null,
      photos: [],
      summary:
        "A modern event-booking UI/UX built from scratch — clean layout, smooth flow, clear user actions.",
      tags: ["UI/UX", "Product Design"],
    },
  ],

  // Selected Work — Code & Web (falls back to this list if the GitHub API call fails)
  codeWorkFallback: [
    {
      name: "Currency_Converter_App",
      language: "JavaScript",
      description:
        "A real-time currency converter built on JS APIs, with dynamic data fetching and a responsive UI.",
      url: "https://github.com/CodeGoura/Currency_Converter_App",
    },
    {
      name: "todo_list",
      language: "JavaScript",
      description:
        "A task management web app with add/edit/delete features and clean UI logic.",
      url: "https://github.com/CodeGoura/todo_list",
    },
    {
      name: "Tic_tac_toe_game",
      language: "JavaScript",
      description:
        "A browser-based Tic-Tac-Toe game built with core JS and DOM manipulation.",
      url: "https://github.com/CodeGoura/Tic_tac_toe_game",
    },
    {
      name: "Rock-Paper-Scissors",
      language: "JavaScript",
      description:
        "An interactive Rock-Paper-Scissors game using DOM manipulation.",
      url: "https://github.com/CodeGoura/Rock-Paper-Scissors",
    },
    {
      name: "Colour_Palette_Generator",
      language: "JavaScript",
      description:
        "Generates color palettes with RGB values for UI design use.",
      url: "https://github.com/CodeGoura/Colour_Palette_Generator",
    },
    {
      name: "Temparature_Sensor_buz",
      language: "C++",
      description:
        "An Arduino-based temperature alarm and humidity monitoring system with sensor alerts.",
      url: "https://github.com/CodeGoura/Temparature_Sensor_buz.git",
    },
    {
      name: "radar_system",
      language: "C++",
      description:
        "An Arduino-based object detection radar using an ultrasonic sensor.",
      url: "https://github.com/CodeGoura/radar_system.git",
    },
  ],

  // Project categories without a single repo link — shown as a supporting practice list
  practiceAreas: [
    {
      title: "Cybersecurity & Ethical Hacking",
      items: [
        "Penetration testing — tested web vulnerabilities using tools like Metasploit",
        "CTF participation — solved real-world security challenges",
        "Network security projects — explored secure communication and attack simulations",
      ],
    },
    {
      title: "IoT & Embedded Systems",
      items: [
        "Temperature alarm system (Arduino) — sensor-based alert system",
        "Humidity monitoring system — IoT humidity alert with cloud integration",
        "Radar system (Arduino) — object detection with an ultrasonic sensor",
      ],
    },
  ],

  education: [
    {
      institution: "Rajdhani College, Bhubaneswar",
      program: "Bachelor of Computer Application (Computer Science)",
      dates: "Dec 2024 – Dec 2027",
      note: "Pursuing. Activities: painting, graphics, 3D/2D, app development, ethical hacking, cybersecurity",
    },
    {
      institution: "PRISM MEDIA, Bhubaneswar",
      program: "Diploma in Animation & Multimedia",
      dates: null,
      note: "Web page & digital/multimedia design — Grade 9.8",
    },
    {
      institution: "Khaira Junior College (CHSE Odisha)",
      program: "+2, Information Technology & Science",
      dates: null,
      note: "*",
    },
    {
      institution: "GJUVP, Rustompur (BSE Odisha)",
      program: "10th, School Education",
      dates: null,
      note: "*",
    },
  ],

  certifications: [
    { name: "Bring AI to Work Workshop", issuer: "Google", date: "Jun 2025" },
    {
      name: "Be a White Hat Hacker and Pen Tester",
      issuer: "EDUONIX",
      date: "May 2021",
    },
    { name: "Cyber Security Foundation", issuer: "CertiProf", date: null },
    { name: "Ethical Hacking Certification", issuer: "CertiProf", date: null },
    { name: "Python for Data Science", issuer: "IBM", date: null },
    {
      name: "The Fundamentals of Digital Marketing",
      issuer: "Google",
      date: null,
    },
    {
      name: "Microsoft AI Classroom Series",
      issuer: "Microsoft",
      date: "Jan 2021",
    },
    { name: "Advance Excel", issuer: "ELearnMarkets", date: null },
    { name: "SEO", issuer: "Google", date: null },
    { name: "AINCAT 2025", issuer: "Naukri.com", date: "May 2025" },
    { name: "JavaScript (Basic)", issuer: "HackerRank", date: "May 2025" },
  ],

  achievements: [
    { label: "Pull Shark", source: "GitHub" },
    { label: "Quickdraw", source: "GitHub" },
    { label: "Pair Extraordinaire", source: "GitHub" },
    { label: "YOLO", source: "GitHub" },
  ],

  github: {
    username: "codegoura",
  },
};
