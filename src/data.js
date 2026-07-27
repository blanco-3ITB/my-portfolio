export const personalInfo = {
  name: "John Cedric M. Blanco",
  title: "Backend Developer",
  tagline: "Code. Connect. Troubleshoot. Create.",
  bio: "I am an aspiring IT professional with a strong foundation in programming, computer networking, and technical support. I have hands-on experience in developing software applications, configuring basic network infrastructure, performing computer assembly and maintenance, installing operating systems, and troubleshooting hardware and software issues. I am also proficient in data encoding and maintaining accurate digital records. I am committed to continuous learning, improving my technical skills, and delivering reliable, efficient, and practical technology solutions.",
  location: "Cabuyao, Laguna",
  email: "blancojohncedric89@gmail.com",
  github: "https://github.com/blanco-3ITB",
  linkedin: "https://www.linkedin.com/in/blanco-john-cedric-m-261390418?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  facebook: "https://www.facebook.com/johncedric.blanco.5",
  resume: "#",
  avatar: null,
};

export const skills = [
  { name: "React", level: 70, category: "Frontend" },
  { name: "TypeScript/Javascript", level: 80, category: "Frontend" },
  { name: "HTML / CSS / Bootstrap", level: 90, category: "Frontend" },
  { name: "Node.js", level: 60, category: "Backend" },
  { name: "PHP", level: 80, category: "Backend" },
  { name: "Laravel", level: 70, category: "Backend" },
  { name: "Java", level: 75, category: "Backend" },
  { name: "GraphQL", level: 50, category: "Backend" },
  { name: "Git / GitHub", level: 90, category: "DevOps" },
  { name: "Vercel", level: 90, category: "DevOps" },
  { name: "Microsoft Excel", level: 90, category: "Productivity" },
  { name: "Microsoft Word", level: 90, category: "Productivity" },
  { name: "PowerPoint", level: 90, category: "Productivity" },
  { name: "Canva", level: 80, category: "Productivity" },
  { name: "Figma", level: 90, category: "Productivity" },
  { name: "Basic Troubleshooting", level: 70, category: "IT" },
  { name: "Networking", level: 70, category: "IT" },
];

export const projects = [
  {
    id: 1,
    title: "CCS Profiling",
    icon: "users",
    description:
      "A web-based system that centralizes the management of student, faculty, and academic records for the College of Computer Studies. It provides secure profile management, efficient data organization, and quick access to information for improved administrative processes.",
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/MarkCarlo84/CCS-Profiling",
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: "Clinic System",
    icon: "hospital",
    description:
      "A clinic system designed to manage patient information, appointments, and medical records through a centralized and user-friendly platform. The system helps healthcare staff organize patient data, monitor appointments, and improve the efficiency of daily clinic operations. It provides a secure and accessible way to maintain accurate records and deliver better service to patients.",
    tech: ["HTML", "CSS", "Bootstrap","Javascript", "PHP", "MySQL"],
    github: "https://github.com/nclbrb/ClinicSystem",
    featured: true,
    image: null,
  },
  {
    id: 3,
    title: "Coffe Shop",
    icon: "coffee",
    description:
      "A coffee shop discovery and booking website that showcases different coffee shops around Cabuyao, including their locations, details, and available services. The platform allows users to explore nearby coffee shops, view information about each location, and book appointments or reservations conveniently online.",
    tech: ["HTML", "CCS", "Javascript"],
    github: "https://github.com/blanco-3ITB/ITEW4_finalsproject",
    live: "https://itew-4-finalsproject.vercel.app/",
    featured: true,
    image: null,
  },
  {
    id: 4,
    title: "Task Management",
    icon: "check",
    description:
      "Task management is the process of planning, organizing, prioritizing, and tracking tasks to ensure work is completed efficiently and on time. It helps individuals and teams stay organized, improve productivity, meet deadlines, and achieve goals by managing responsibilities effectively.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    github: "https://github.com/nclbrb/TaskManagement",
    featured: false,
    image: null,
  },
  {
    id: 5,
    title: "Ecommerce System",
    icon: "cart",
    description:
      "Ecommerce system designed to provide a complete online shopping experience for both customers and administrators. The system includes features such as product management, user registration and authentication, shopping cart functionality, secure checkout, order tracking, inventory management, and payment processing. It streamlines the buying and selling process by automating key business operations, improving efficiency, and providing a user-friendly platform for managing online transactions.",
    tech: ["laravel", "TypeScript", "MySQL"],
    github: "https://github.com/nclbrb/EcommerceSystem",
    live: null,
    featured: false,
    image: null,
  },
];

export const experience = [
  {
    id: 1,
    role: "Web Developer",
    company: "Tabuko Energy Network Corporation",
    location: "Butong, Cabuyao, Laguna",
    type: "On-The-Job Training",
    end: "2026", // current
    description:
      "Contributed as a developer of Tabuko Energy Network, focusing on designing and showcasing the company’s services and products through a user-friendly website. My role involved creating responsive layouts, improving the overall user experience, and ensuring the website displays the company’s offerings effectively across different devices.",
    tech: ["HTML", "CSS", "Javascript", "Vercel", "GoDaddy"],
  },
  {
    id: 2,
    role: "Graphic Design",
    company: "Tabuko Energy Network Corporation",
    location: "Butong, Cabuyao, Laguna",
    type: "On-The-Job Training",
    end: "2026",
    description:
      "Assigned as a graphic designer for Tabuko Energy Network, creating visual materials such as company tarpaulins, promotional graphics, and website images. The role involved designing engaging visuals that represent the company’s brand identity, enhancing the presentation of their services and products, and maintaining consistency across digital and print materials.",
    tech: ["Canva"],
  },
  {
    id: 3,
    role: "Data Encoder",
    company: "Tabuko Energy Network Corporation",
    location: "Butong, Cabuyao, Laguna",
    type: "On-The-Job Training",
    end: "2026",
    description:
      "Served as a data encoder during an OJT program, responsible for encoding company expenses and purchase orders. The role involved maintaining accurate records, organizing transaction data, and assisting in the proper documentation of company financial transactions.",
    tech: ["Excel"],
  },
  {
    id: 4,
    role: "Computer Technician",
    company: "Bigaa Integrated National HighSchool",
    location: "Bigaa, Cabuyao, Laguna",
    type: "On-The-Job Training(Senior High School)",
    end: "2022",
    description:
      "Responsible for installing and configuring Windows operating systems, assembling and disassembling computer hardware, creating and testing LAN cables, diagnosing and troubleshooting hardware and software issues, performing system maintenance, and ensuring reliable network connectivity",
    tech: ["Rufus","Crimping Tool/LAN Cable Tester","BIOS"],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.S. Information Technology",
    school: "University of Cabuyao(PNC)",
    location: "Banay-Banay, Cabuyao, Laguna",
    start: "2022",
    end: "2026",
    notes: "Focus on Computer Programming, Networking and Human-Computer Interaction.",
  },
  {
    id: 2,
    Strand: "Information Communication Technology",
    school: "Bigaa Integrated National HighSchool",
    location: "Bigaa, Cabuyao, Laguna",
    start: "2016",
    end: "2022",
    notes: "Focuses on installing, maintaining, troubleshooting, and repairing computer hardware, software, and network systems to ensure reliable and efficient computer operations.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
