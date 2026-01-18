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
        <div className="font-medium w-full md:text-sm"> {work}</div>
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
            position="Lead Frontend Web Developer"
            company="Quivox Consulting "
            time=" 2025 – Present" // Assuming Present based on start date
            address="Remote"
            companyLink="#"
            work={
              <ul className="list-disc ml-4">
                <li>
                  Built a real estate web application with a clean design system
                  serving multiple users and agents
                </li>
                <li>
                  Implemented performance testing strategies for fast load times
                  and optimal user experience
                </li>
                <li>
                  Crafted scalable architecture ensuring full responsiveness
                  across all devices
                </li>
                <li>
                  Designed and developed the Quivox Consulting corporate
                  website, showcasing the company&apos;s services and value
                  proposition
                </li>
              </ul>
            }
          />
          <Details
            position="Frontend Developer(contract)"
            company="JobMingle "
            time="2024 – 2025"
            address="Remote"
            companyLink="#"
            work={
              <ul className="list-disc ml-4">
                <li>
                  Collaborated with cross-functional team members using Git for
                  version control and code management
                </li>
                <li>
                  Designed and developed the frontend for a learning course and
                  job platform serving 3,000+ users
                </li>
                <li>
                  Implemented features enabling 884+ job postings and course
                  offerings
                </li>
              </ul>
            }
          />
          <Details
            position="Frontend Developer (contract)"
            company="Luxgroup Company "
            time="June 2025 – September 2025"
            address="Remote, UK"
            companyLink="#"
            work={
              <ul className="list-disc ml-4">
                <li>
                  Developed 3 major brand websites from UI design to full functionality
                </li>
                <li>
                  Collaborated directly with cross-functional teams
                </li>
                <li>
                  Transformed design mockups into production-ready frontend applications
                </li>
              </ul>
            }
          />
          <Details
            position="Frontend Developer"
            company="iLabs "
            time="January 2025 – December 2025"
            address="Remote"
            companyLink="#"
            work={
              <ul className="list-disc ml-4">
                <li>
                  Led frontend development for multiple client projects serving
                  global audiences
                </li>
                <li>
                  Developed Faith Point AI, a faith-based application with 444+
                  active users and adoption by several churches across Africa
                </li>
                <li>
                  Implemented the iLabs company website with $2,000+ revenue
                  generation
                </li>
                <li>
                  Coordinated and managed a team of frontend developers,
                  ensuring code quality and deadlines were adhered to
                </li>
              </ul>
            }
          />
          <Details
            position="Lead Frontend Developer(contract)"
            company="Traders Mentor Hub "
            time="2025"
            address="Pretoria, South Africa"
            companyLink="#"
            work={
              <ul className="list-disc ml-4">
                <li>
                  Implemented a real-time chat system and designed a clean,
                  intuitive landing page
                </li>
                <li>
                  Integrated YouTube, Zoom, and payment/subscription systems for
                  a seamless user experience
                </li>
                <li>
                  Built financial management features enabling users to track
                  subscriptions and transactions
                </li>
              </ul>
            }
          />
          <Details
            position=" Frontend Web Developer(Intern)"
            company="Africinnovate "
            time="2023 - 2024"
            address="16 Idua road "
            companyLink="https://www.africinnovate.com/"
            work="At Africinnovate, I had the privilege of contributing as a web development intern, where I gained hands-on experience designing and implementing innovative web solutions. My role involved collaborating with cross-functional teams to create responsive and high-performance websites, ensuring seamless functionality and exceptional user experience.

One of my key achievements during my internship was leveraging Next.js to develop a high-performing, SEO-optimized landing page. This user-friendly design not only enhanced user engagement."
          />

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
