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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi there! I'm a passionate developer with over three years of experience
        in building dynamic and user-friendly web applications. My expertise
        lies in modern JavaScript frameworks like{" "}
        <span className="font-medium">React.js and Next.js</span>, alongside
        backend technologies such as{" "}
        <span className="font-medium">Node.js, NestJS, and Express.js.</span>
        <br />
        {`I'm always eager to learn and stay updated with the latest tech trends,
        striving to deliver high-quality solutions that meet user needs. I
        believe in the power of collaboration and enjoy working with teams to
        bring innovative ideas to life.`}
        <br />
        {`Let’s connect and explore how we can work together to create something
        amazing!`}
      </p>
    </motion.section>
  );
}
