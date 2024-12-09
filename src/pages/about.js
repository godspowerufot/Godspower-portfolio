import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Riley.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>About NexTemp</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Let Passion Lead Your Purpose 🔥"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
              I am Godspower Ufot, a passionate and detail-oriented frontend web developer with a strong interest in blockchain technology. Over the years, I’ve honed my skills in building visually appealing, user-centric web experiences that balance aesthetics with functionality. With expertise in HTML, CSS, JavaScript, and React, I strive to create responsive, high-performance interfaces that cater to diverse user needs.
              </p>
              <p className="my-4 font-medium">
              Beyond coding, I am deeply committed to the growth of the tech community. I actively participate in hackathons, conferences, and meetups, where I mentor aspiring developers and share insights that inspire others to unlock their potential in the tech ecosystem.

When I’m not coding or exploring blockchain innovations, I immerse myself in anime, finding creative inspiration in its storytelling and artistry.

Another project I’m
                particularly proud of was creating an interactive web
                application for a major event, which received widespread acclaim
                for its intuitive design and seamless performance.
                Let’s collaborate to create something extraordinary that blends technology, design, and innovation seamlessly! 
              </p>
              <p className="my-4 font-medium">
                P.s I'm a big fan of anime  ✌️.
              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                priority={true}
                src={profile}
                alt="Travis Lord"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
       
            <HireMe2 />
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
