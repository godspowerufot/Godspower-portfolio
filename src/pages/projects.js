import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HireMe2 } from "@/components/HireMe2";

import proj1 from "../../public/images/projects/africinnovate.png";
import proj4 from "../../public/images/projects/innovation.png";
import proj8 from "../../public/images/projects/innovations.png";
import proj9 from "../../public/images/projects/tradersmentor.png";
import proj2 from "../../public/images/projects/andy.png";
import proj3 from "../../public/hoydoon.png";
import proj5 from "../../public/faithpoint.png";
import proj6 from "../../public/images/projects/your.png";

import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  tools,
}) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full object-cover"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">

          <Link
            href={link}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
            aria-label="Project link"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, img, link, tools }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>

        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            className="rounded-lg
             bg-dark mt-2 px-6 py-2 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
            "
            aria-label={title}
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | By Godspower</title>
        <meta
          name="description"
          content="Godspower ufot , A Portfolio to show my works"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Transforms the World ✨"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type=" Development"
                tools="NextJS | CSS | JavaScript | AOS"
                title="AfricInnovate"
                summary="For the Africinnovate V2 website, I developed a platform tailored for students to showcase Africinnovate's services. I integrated APIs to dynamically display blog content and incorporated a Content Management System (CMS) to allow easy content updates. This project enhanced my skills in web development, API integration, and CMS implementation."
                img={proj1}
                date="2023"
                link="https://www.africinnovate.com/"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Development"
                tools="Nextjs|TailwindCss"
                title="Andy "
                summary="A portfolio website for a real estate agent, featuring optimized images and videos to enhance user experience and site performance. The platform showcases property listings, agent services, and engaging media to attract potential clients."
                img={proj2}
                date="2024"
                link="https://andy-website-tau.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Development"
                tools="Reactjs|TailwindCss"
                title="Ilabs "
                summary=" Innovations Labs is a forward-thinking SaaS and EdTech startup committed to 
building, innovating, and decentralizing technology solutions across software 
development, design, and AI integration.
"
                img={proj8}
                date="2025"
                link="https://ilabs.world/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Design & Development"
                tools="NextJS|Tailwind"
                title="Hoydoon"
                img={proj3}
                summary=" Hoydoon.com is a real estate platform that helps people discover, buy, rent, or sell properties.available in Web-based platform
Mobile apps (iOS and Android available)"

                date="2025"
                link="https://hoydoon.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Design & Development"
                tools="NextJS|Tailwind"
                title="
FaithPoint AI"
                img={proj5}
                summary=" FaithPoint.ai is a church management platform powered by AI. The platform uses artificial intelligence to provide advanced tools specifically designed for church communities to grow and engage their members more effectively"

                date="2025"
                link="https://www.faithpoint.ai/"
              />
            </div>


            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Design & Development"
                tools="Reactjs"
                title="TRADERS MENTOR HUB"
                img={proj9}
                summary="At TradersMentors Hub,  is to empower traders of all levels with the knowledge and skills needed to succeed in the financial markets.
With a focus on education, community support, and practical application, we provide resources and mentorship to help you achieve your trading goals. "

                date="2024"
                link="https://tradersmentorshub.com"
              />
            </div>

          </div>

          <div>
            <ul className="flex flex-col items-center relative pt-16">
              <Article
                title="Adding more soon, thanks for the interest!"
                time="1 min read"
                date=""
                link="/articles/"
              />
            </ul>

            <div className="mt-2 flex items-center justify-between gap-3 grid-cols-2">
              <Link
                href="/articles/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
              >
                View Articles
              </Link>
              <Link
                href="/about/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
              >
                Get To Know Me
              </Link>
            </div>
            <HireMe2 />
          </div>
        </Layout>
      </main>
    </>
  );
}
