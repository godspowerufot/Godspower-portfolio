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
            text="Building Experiences That Matter"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                I'm Godspower Ufot, a passionate frontend web developer and blockchain enthusiast,but my journey didn't start with a laptop.              </p>
              <p className="my-4 font-medium">
                Growing up, I didn't have access to a computer, so I learned how software works by solving problems with pen and paper. I'd sketch out logic, draw interfaces, and think through how systems could work before I ever touched a keyboard. This taught me to think deeply, plan intentionally, and appreciate every line of code I'd eventually write.     </p>
              <p className="my-4 font-medium">
                During my early days in school, I finally got the chance to build and I created an admission portal that changed everything. It wasn't just about the code; it was about realizing who I was becoming. I was the quiet type, but building that project taught me how to question things, challenge assumptions, and engage with people in ways I never had before.   </p>
              <p className="my-4 font-medium">
                From there, I didn't stop. Over the years, I've honed my skills across the full spectrum from crafting pixel-perfect, responsive interfaces with HTML, CSS, JavaScript, and React, to diving deep into smart contracts and blockchain technology. I've contributed to open-source projects, led teams, sharpened my communication skills, and immersed myself in research by attending conferences, hackathons, and meetups.</p>
              <p className="my-4 font-medium">
                Let's collaborate to create something extraordinary that blends technology, design, and innovation seamlessly.
              </p>
            </div>
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
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
