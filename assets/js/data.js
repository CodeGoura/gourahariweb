/* =========================================================
   data.js — single source of truth for editable content.
   Update this file when your info changes; layout/animation
   code in main.js and github-api.js should not need touching.
   ========================================================= */

function designPhotos(folder, files, label) {
  return files.map((file) => ({
    src: encodeURI(`assets/images/design/${folder}/${file}`),
    alt: `${label || folder} — ${file.replace(/\.[^.]+$/, "")}`,
  }));
}

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
      photos: designPhotos("Odisha Pavilion24", ["1 (2).jpg", "1 (3).jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "Final 1.jpg", "Front 1.jpg"], "Odisha Pavilion — IITF 2024"),
      summary:
        "Concept design for Odisha's pavilion at the India International Trade Fair, blending temple architecture, textiles and handicrafts with a modern spatial language.",
      tags: ["Concept Design", "Exhibition"],
    },
    {
      title: "Zilla Swadeshi Mela & National Level Pallishree Mela",
      dates: "Dec 2025",
      partner: "Virtu Communications",
      photos: designPhotos("Kosamb", ["Canopy.jpg", "contol room.jpg", "control room.jpg", "crtl2.jpg", "ctrl2.jpg", "demo stall.jpg", "demo.jpg", "gate.jpg", "gate1 p.jpg", "gate1 prop.jpg", "gate1.jpg", "New Selfie1.jpg", "New Selfie2.jpg", "New stage 2.jpg", "OSP1.jpg", "selfie paint 2 p.jpg", "selfie point 2.jpg", "selfie point p.jpg", "SP2.jpg", "stage 2.jpg", "stage p.jpg", "stage.jpg", "stall.jpg", "stall1.jpg", "them stall p.jpg", "them stall.jpg"], "Zilla Swadeshi Mela & National Level Pallishree Mela"),
      summary:
        "3D view and layout design at KOSAMB — visitor-friendly stall arrangement, accessible pathways and a strong visual identity.",
      tags: ["3D Design", "3D View"],
    },
    {
      title: "Handloom Heritage Exhibition",
      dates: "May–Jun 2025",
      partner: null,
      photos: designPhotos("Handloom", ["02.jpg", "04.jpg", "06.jpg", "07.jpg", "16.jpg", "21.jpg", "22.jpg", "23.jpg", "25.jpg", "central pavilion.jpg", "new gate4.jpg", "pavilion1.jpg", "pavilion2.3.jpg", "pavillion3.jpg", "pavillion4.jpg", "pavillion5.1.jpg", "pavillion5.jpg", "selfie 4.jpg"], "Handloom Heritage Exhibition"),
      summary:
        "Full 3D model and exhibition layout blending traditional handloom and textile motifs with modern design for visitor storytelling.",
      tags: ["3D Modeling", "Exhibition"],
    },
    {
      title: "Adivasi Mela 2025 & 2026",
      dates: "Nov 2024–Jan 2025, 2026",
      partner: "Bharati Chitralaya (2026)",
      photos: designPhotos("Adivasi Mela25_26", ["food court p.jpg", "food court.jpg", "Gate 4 copy.jpg", "gate1 P.jpg", "gate1 pro.jpg", "gate1.jpg", "gate2 p.jpg", "Ground Layout_Updated.jpg", "language tree.jpg", "selfie standee.jpg", "theme gate 2.jpg", "theme gate 2_op.jpg", "theme gate_1.jpg", "theme gate_1_p.jpg"], "Adivasi Mela 2025 & 2026").concat(designPhotos("Adivasi Mela25_26/26", ["gate 2 P.jpg", "gate 4 P.jpg", "gate 4 P2.jpg", "gate 4.jpg", "gate 5 p.jpg", "gate 5 p2.jpg", "gate 5.jpg", "Gate01.jpg", "Gate01_p.jpg", "Gate01_p2.jpg", "gate3.jpg", "gate3_p.jpg", "gate3_p2.jpg", "ren1.jpg", "ren2.jpg", "ren3.jpg", "ren4.jpg", "stall.jpg", "tribal hat.jpg"], "Adivasi Mela 2026")),
      summary:
        "3D view and layout for a major tribal-culture exhibition — Adivasi Gaon village, Adivasi Haat market, Bhagwan Birsa Munda Pavilion, and laser/drone shows.",
      tags: ["3D View", "Event Design"],
    },
    {
      title: "ORMAS Pallishree Mela, Kosamb",
      dates: "Nov 2024–Jan 2025",
      partner: null,
      photos: designPhotos("Pallishree Mela", ["Control room 2.jpg", "Final Contral Room 3.jpg", "Gate design 1.jpg", "Gate design 2.jpg", "gate1.jpg", "stage1.jpg", "stage3.jpg", "Stall .jpg"], "ORMAS Pallishree Mela, Kosamb"),
      summary:
        "Full visual design set — posters, banners, signage and tribal art-based graphics.",
      tags: ["Graphic Design", "Signage"],
    },
    {
      title: "SISIR SARAS 2026",
      dates: "2026",
      partner: "Virtu Communication",
      photos: designPhotos("SISIR SARAS26", ["Terracotta Codinetion Cell 2 .jpg", "Terracotta Gate 1 .jpg", "Terracotta Gate 2 .jpg"], "SISIR SARAS 2026"),
      summary:
        "3D view and layout design — visitor-friendly, well-planned stalls, clean visual structure.",
      tags: ["3D View", "Layout Design"],
    },
    {
      title: "World Skill Center Parade — Tableau Design",
      dates: "2026",
      partner: null,
      photos: designPhotos("WSCTableau Design", ["Ren1.jpg", "ren3.jpg", "ren4.jpg", "ren6.jpg", "ren8.jpg"], "World Skill Center Parade — Tableau Design"),
      summary: "Concept, structure and 3D visualization of a parade tableau.",
      tags: ["Tableau", "3D Visualization"],
    },
    {
      title: "Works Department Parade — Tableau Design",
      dates: "2026",
      partner: null,
      photos: designPhotos("Works Department Parade", ["img1.jfif", "img2.jfif", "img3.jfif", "img4.jfif"], "Works Department Parade — Tableau Design"),
      summary:
        "Concept, structure and 3D visualization highlighting infrastructure development and public service.",
      tags: ["Tableau", "3D Visualization"],
    },
    {
      title: "Super Hero Sculpture Design",
      dates: "Oct–Nov 2025",
      partner: null,
      photos: designPhotos("Scupture work", ["CON 1.jpg", "CON 1_3.jpg", "CON 2 1.jpg", "CON 2 2.jpg", "CON 2 6.jpg", "CON 4 4.jpg", "CON 4 5.jpg", "CON 4 6.jpg", "C_2.jpg", "l_2.jpg", "RL 2.jpg", "R_11.jpg"], "Super Hero Sculpture Design"),
      summary:
        "An original superhero sculpture — concept sketching, 3D form planning, structure building and final detailing.",
      tags: ["Sculpture", "3D Design"],
    },
    {
      title: "IITF 2023 Pavilion Design",
      dates: "2023",
      partner: "Virtu Communications",
      photos: designPhotos("IITF23", ["A 1.jpg", "A11.jpg", "A12.jpg", "A14.jpg", "A2.jpg", "A3.jpg", "A8.jpg", "A9.jpg", "F1.jpg", "F3.jpg", "F4.jpg", "F5.jpg", "F6.jpg", "F7.jpg", "F8.jpg"], "IITF 2023 Pavilion Design"),
      summary: "Pavilion concepts and 3D visualizations for Odisha's presence at the India International Trade Fair.",
      tags: ["Pavilion Design", "3D Visualization", "Exhibition"],
    },
    {
      title: "Jajati Mela",
      dates: null,
      partner: null,
      photos: designPhotos("Jajati Mela", ["change 1.jpg", "change 2.jpg", "change 3.jpg", "change 4.jpg", "change 5.jpg", "change 6.jpg"], "Jajati Mela"),
      summary: "Mela layout and visual design concepts developed for an accessible, distinctive visitor experience.",
      tags: ["Mela Design", "Layout Design"],
    },
    {
      title: "Konark Sand Art Festival",
      dates: null,
      partner: null,
      photos: designPhotos("Konark Sand Art Fastifal", ["Konark Sand Art Fastifal 1.jpg", "Konark Sand Art Fastifal 2 .jpg"], "Konark Sand Art Festival"),
      summary: "Spatial and visual concepts for a sand-art festival inspired by the heritage of Konark.",
      tags: ["Event Design", "Concept Design"],
    },
    {
      title: "Sisira Saras 2023",
      dates: "2023",
      partner: null,
      photos: designPhotos("Sisira Saras 23", ["Gate 1.jpg", "Gate 2.jpg", "Stage 2.jpg", "Terracotta Codinetion Cell 2 .jpg", "Terracotta Gate 1 .jpg", "Terracotta Gate 2 .jpg", "Terracotta Stage 2 .jpg"], "Sisira Saras 2023"),
      summary: "Terracotta-inspired gate, stage and pavilion concepts for the Sisira Saras exhibition.",
      tags: ["Exhibition", "Terracotta", "3D Design"],
    },
    {
      title: "Vehicle Branding & Van Design",
      dates: null,
      partner: null,
      photos: designPhotos("van design", ["1.jpg", "2jpg.jpg", "3jpg.jpg", "a1.jpg", "Apache 7 .jpg", "Apache 8 .jpg", "b2.jpg", "back.jpg", "c2.jpg", "c4.jpg", "c5.jpg", "c6.jpg", "New Apachi 1.jpg", "New Apachi 2.jpg", "New Apachi 3.jpg", "new2.jpg"], "Vehicle Branding & Van Design"),
      summary: "Vehicle graphics, wraps and 3D visualization studies for branded vans and mobile campaigns.",
      tags: ["Branding", "Vehicle Design", "3D Visualization"],
    },
    {
      title: "WATCO Exhibition Design",
      dates: null,
      partner: "WATCO",
      photos: designPhotos("WATCO", ["e 1.jpg", "e 2.jpg", "e 3.jpg", "e 4.jpg", "e 5.jpg"], "WATCO Exhibition Design"),
      summary: "Exhibition visualization and spatial design work created for WATCO.",
      tags: ["Exhibition", "Spatial Design"],
    },
    {
      title: "Odisha Wall Painting Series",
      dates: null,
      partner: null,
      photos: designPhotos("OdishaWallpainting", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "art2.jpg", "art3.jpg", "art6.jpg", "bridge work file 5 j.jpg", "bridge work file 6.jpg", "Bridge working 1.jpg", "Bridge working 10 .jpg", "Bridge working 10 copy.jpg", "Bridge working 11 .jpg", "Bridge working 11 copy.jpg", "Bridge working 11.jpg", "Bridge working 12 .jpg", "Bridge working 12 copy.jpg", "Bridge working 12.jpg", "Bridge working 13.jpg", "Bridge working 14.jpg", "Bridge working 15.jpg", "Bridge working 2 .jpg", "Bridge working 3 .jpg", "Bridge working 3.jpg", "Bridge working 5 .jpg", "Bridge working 5 copy.jpg", "Bridge working 6 .jpg", "Bridge working 6.jpg", "Bridge working 7 .jpg", "Bridge working 7.1.jpg", "Bridge working 7.2.jpg", "Bridge working 8 .jpg", "Bridge working 9 .jpg", "Bridge working1 .jpg", "wall painting (103).jpg", "wall painting (109).jpg", "wall painting (112).jpg", "wall painting (116).jpg", "wall painting (118).jpg", "wall painting (159).jpg", "wall painting (163).jpg", "wall painting (164).jpg"], "Odisha Wall Painting Series"),
      summary:
        "Public wall-painting designs across Odisha reflecting local heritage and improving public spaces.",
      tags: ["Public Art", "Graphic Design"],
    },
    {
      title: "Quickshow",
      dates: "2025",
      partner: null,
      photos: designPhotos("Quickshow", ["Quickshow1.png", "Quickshow2.png"], "UX and UI Design"),
      summary:
        "A modern event-booking UI/UX built from scratch — clean layout, smooth flow, clear user actions.",
      tags: ["UI/UX", "Product Design"],
    },
  ],

  repositoryImages: {
    Guess_Number_Game: encodeURI("assets/images/Repositories/Guess_Number_Game/Guess_Number_Game.png"),
    Hangman_Game: encodeURI("assets/images/Repositories/Hangman_Game/Hangman_Game.png"),
    KEY_PAD: encodeURI("assets/images/Repositories/KEY_PAD/KEY_PAD.png"),
    KEY_PAD_TEST: encodeURI("assets/images/Repositories/KEY_PAD/KEY_PAD.png"),
    Lodu_dice_Game: encodeURI("assets/images/Repositories/Lodu_dice_Game/Lodu_dice_Game.png"),
    Password_Generator: encodeURI("assets/images/Repositories/Password_Generator/Password_Generator.png"),
    Swapnum_clang: encodeURI("assets/images/Repositories/Swapnum_clang/Swapnum_clang.png"),
  },

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
    {
      name: "Guess_Number_Game",
      language: "C",
      description:
        "A command-line number guessing game focused on input handling, loops and conditional logic.",
      url: "https://github.com/CodeGoura/Guess_Number_Game",
      image: encodeURI("assets/images/Repositories/Guess_Number_Game/Guess_Number_Game.png"),
    },
    {
      name: "Hangman_Game",
      language: "C",
      description:
        "A word-guessing game that practices strings, game state and user input in C.",
      url: "https://github.com/CodeGoura/Hangman_Game",
      image: encodeURI("assets/images/Repositories/Hangman_Game/Hangman_Game.png"),
    },
    {
      name: "KEY_PAD",
      language: "C",
      description:
        "A keypad-focused programming project demonstrating structured input and menu-driven interaction.",
      url: "https://github.com/CodeGoura/KEY_PAD",
      image: encodeURI("assets/images/Repositories/KEY_PAD/KEY_PAD.png"),
    },
    {
      name: "Lodu_dice_Game",
      language: "C",
      description:
        "A dice-based board game prototype with turn handling and randomized gameplay.",
      url: "https://github.com/CodeGoura/Lodu_dice_Game",
      image: encodeURI("assets/images/Repositories/Lodu_dice_Game/Lodu_dice_Game.png"),
    },
    {
      name: "Password_Generator",
      language: "C",
      description:
        "A password generator project exploring randomized character selection and configurable output.",
      url: "https://github.com/CodeGoura/Password_Generator",
      image: encodeURI("assets/images/Repositories/Password_Generator/Password_Generator.png"),
    },
    {
      name: "Swapnum_clang",
      language: "C",
      description:
        "A compact C programming exercise for swapping and manipulating numeric values.",
      url: "https://github.com/CodeGoura/Swapnum_clang",
      image: encodeURI("assets/images/Repositories/Swapnum_clang/Swapnum_clang.png"),
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
