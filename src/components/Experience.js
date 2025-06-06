import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position=" Frontend Web Developer(Intern)"
            company="Africinnovate "
            time="2023 - 2024"
            address="16 Idua road "
            companyLink="https://www.africinnovate.com/"
            work="At Africinnovate, I had the privilege of contributing as a web development intern, where I gained hands-on experience designing and implementing innovative web solutions. My role involved collaborating with cross-functional teams to create responsive and high-performance websites, ensuring seamless functionality and exceptional user experience.

One of my key achievements during my internship was leveraging Next.js to develop a high-performing, SEO-optimized landing page. This user-friendly design not only enhanced user engagement."
          />

          <Details
            position="Frontend Website Developer"
            company="Media Bear"
            time="2024"
            companyLink=""
            work="I contributed to the development of dashboards and portfolio websites for clients while I was employed as a frontend developer at Media Bear. I was able to work directly with teams in this job to provide customised solutions that satisfied clients.
My experience at Media Bear was crucial in helping me hone my abilities to pay attention to detail, communicate better, and complete assignments on schedule. Additionally, I learnt a lot about new tools and technologies like Firebase, which increased my technical proficiency and flexibility in a field that is changing quickly."
          />
          <Details
            position="Frontend Lead Website Developer"
            company="Tradersmentor "
            time="2025"
            companyLink="https://tradersmentorshub.com/"
            work="I worked as the Frontend Lead for Traders Mentors Hub, collaborating with teammates to build the platform using core web technologies, implementing API integrations, Redux for state management, and WebSockets for real-time features.
"   />
         
          <Details
            position="Frontend Lead Website Developer"
            company="Ilabs"
            time="2025"
            companyLink="https://ilabs.world"
            work="I worked as the Frontend Lead for Traders Mentors Hub, collaborating with teammates to build the platform using core web technologies, implementing API integrations, Redux for state management, and WebSockets for real-time features. I also served as the frontend lead at iLabs, delivering high-quality solutions that satisfied clients across the globe."   />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link>
      </div>
    </div>
  );
};

export default Experience;
