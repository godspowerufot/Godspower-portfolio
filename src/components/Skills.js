import { motion } from "framer-motion";
import React, { useRef } from "react";

const Skill = ({ name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="cursor-default w-max origin-center 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold border border-dark dark:border-light
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        ref={ref}
        className="w-full relative flex flex-wrap items-center justify-center gap-8 
      my-32 md:my-16 lg:h-auto sm:h-auto
      "
      >
        <Skill name="Web" />
        <Skill name="HTML" />
        <Skill name="Tailwind" />
        <Skill name="JavaScript" />
        <Skill name="TypeScript" />
        <Skill name="NextJs" />
        <Skill name="Git" />
        <Skill name="React" />
        <Skill name="Firebase" />
        <Skill name="Solidity" />
        <Skill name="EtherJs" />
        <Skill name="ReduxAPI" />
        <Skill name="Communication" />
        <Skill name="Problem-Solving & Critical Thinking" />
        <Skill name="Adaptability & Continuous Learning" />
        <Skill name="Collaboration & Teamwork" />
        <Skill name="Listening" />
        <Skill name="Time Management" />
      </div>
    </>
  );
};

export default Skills;
