import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Votre Salle",
    location: "Marrakech, Morocco",
    description:
      "I have been working as a Full-Stack Developer since October 2023 at Votre Salle, where I built votresalles.ma, a web platform for managing and publishing halls rentals in Morocco. I developed both the frontend and backend using Next.js, NestJS, and PostgreSQL.",
    icon: React.createElement(LuGraduationCap),
    date: "October 2023 - present",
  },
  {
    title: "EAM Services",
    location: "Casablanca, Morocco",
    description:
      "I worked as a Full-Stack Developer at EAM Services, where I developed two web applications: one for procurement management, handling suppliers, products, orders, and stock tracking, and another for worker management, covering leaves, documents, and task planning. I worked on both frontend and backend using React.js, Node.js/Express.js, and MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "October 2020 — February 2023",
  },
  {
    title: "IT Teacher",
    location: "Casablanca, Morocco",
    description:
      "I worked as an IT Teacher at Group Scolaire Riad Les Nobles. I created and deployed the school's website (riadlesnobles.ma) using WordPress and managed its content. Additionally, I produced promotional videos and graphics for social media using Photoshop and Filmora, alongside my teaching responsibilities.",
    icon: React.createElement(FaReact),
    date: "November 2019 — September 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Votre Salles",
    description:
      "I worked as a full-stack developer on this startup project for 1 years. It is a web platform dedicated to managing rental and publication of halls in Morocco",
    tags: ["React", "Next.js", "Tailwind", "PostgreSQL", "Prisma", "Nestjs"],
    imageUrl: corpcommentImg,
    githublink: "https://github.com/Youssef97dev/votre_salle_V2",
    directlink: "https://votresalles.ma/",
  },
  {
    title: "Palace - Reservation Management App",
    description:
      "I worked as a full-stack developer on this reservation system project for 1 month.",
    tags: ["React", "Next.js", "Tailwind", "PostgreSQL", "Prisma", "Nestjs"],
    imageUrl: "/palace-ui.PNG",
    githublink: "https://github.com/Youssef97dev/le-palace-ui",
    directlink: "https://le-palace-ui.vercel.app/",
  },
  {
    title: "Le Salama Restaurant",
    description:
      "I developed the website for Le Salama restaurant. Built with Next.js and Tailwind CSS, the site provides an elegant and responsive interface, showcasing the menu, events, and reservation system.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: "/salama.png",
    githublink: "https://github.com/Youssef97dev/le_salama_V2",
    directlink: "https://le-salama-v2.vercel.app/",
  },
  {
    title: "Casa lalla takerkoust",
    description:
      "I created the website for Casa Lalla restaurant. Designed with Next.js and Tailwind CSS, the site ensures a seamless browsing experience, highlighting accommodations, services and reservation system.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: "/casalalla.PNG",
    githublink: "https://github.com/Youssef97dev/casalalla-v7",
    directlink: "https://casalalla-v7.vercel.app/",
  },
  {
    title: "Veterinary Clinic Management App",
    description:
      "I built the frontend using Next.js and Material UI, The backend, developed with Laravel and MySQL.",
    tags: ["Next.js", "MaterialUI", "Laravel", "Mysql"],
    imageUrl: "/casapet.PNG",
    githublink: "https://github.com/jamal-kak/casapets-react",
    directlink:
      "https://www.linkedin.com/posts/youssef-moussafi_laravel-reactjs-contextapi-activity-7087206621809885184-qJ7Y/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Nest",
  "Tailwind",
  "Redux",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Git",
] as const;
