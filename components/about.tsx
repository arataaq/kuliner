"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <p className="mb-3">
        SMKN 2 {" "}
        <span className="font-medium">Baleendah</span>adalah salah satu Sekolah
        Menengah Kejuruan di Baleendah, Kabupaten Bandung, Jawa Barat, yang 
        memiliki beberapa program keahlian, salah satunya adalah{" "}
        <span className="font-medium">Kuliner</span>.{" "}
        <span className="italic">Program ini dirancang untuk siswa yang berminat
        </span> mendalami keterampilan memasak, manajemen makanan, dan bisnis 
        <span className="underline">kuliner</span> .
      </p>

      <p>
        <span className="italic">Jurusan Kuliner</span> adalah salah satu jurusan
        populer di Sekolah Menengah Kejuruan maupun perguruan tinggi yang berfokus pada{" "}
        <span className="font-medium">keterampilan, pengetahuan, dan manajemen</span>
        terkait pengolahan makanan dan minuman{" "}. Jurusan ini dirancang untuk menghasilkan
        <span className="font-medium">tenaga kerja terampil</span> di industri kuliner
        yang terus berkembang, baik secara lokal maupun internasional.
      </p>
    </motion.section>
  );
}
