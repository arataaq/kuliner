import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Product",
    hash: "#projects",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  {
    name: "Culinary Class",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Ida Widianingsih, S.Pd, MM",
    location: "",
    description:
      "Kepala Kompetensi Keahlian, Guru Produktif Kuliner, Assesor Kuliner.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Noor Yuli Astuti, S.Pd",
    location: "",
    description:
      "Wakasek Kurikulum, Guru Produktif Kuliner.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "A. Mahyar, S.Pd,MM",
    location: "",
    description:
      "Ketua LSP, Guru Produktif Kuliner.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Hj. Dra.Tri Suryawati, MM",
    location: "",
    description:
      "Guru Produktif Kuliner, Assesor Kuliner.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Enung Nurhayati, S.Pd",
    location: "",
    description:
      "Kepala Bengkel Kuliner, Guru Produktif Kuliner, Assesor Kuliner.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Tiara Edianti, S.Pd.",
    location: "",
    description:
      "Guru Produktif Kuliner, Pembina Paskibra.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Arie Muliawan",
    location: "",
    description:
      "Tool Man Kuliner.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Dasar Program Keahlian",
    description:
      "Pengetahuan Bahan dan Pengolahan Makanan, Teknologi Kuliner, Kepariwisataan, Pelayanan Prima, K3LH.",
    tags: ["Pariwisata", "Kuliner"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Konsentrasi Keahlian",
    description:
      "Pengolahan dan Penyajian Makanan, Pengolahan Kue dan Roti, Tata Hidang, Projek Kreatif dan Kewirausahaan.",
    tags: ["Pariwisata", "Kuliner"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Mata Pelajaran Pilihan",
    description:
      "Seni Kuliner, Barista.",
    tags: ["Pariwisata", "Kuliner"],
    imageUrl: wordanalyticsImg,
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
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
