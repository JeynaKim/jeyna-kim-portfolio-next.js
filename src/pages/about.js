import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/about-page-profile.png';
import { useMotionValue, useSpring, useInView } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>Jeyna Kim | About Me</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full flex-col item-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='ABOUT ME❔'
            className='mb-16 flex items-start lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8'>
              {/* <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 '>
                About Me
              </h2> */}
              <p className='font-medium'>
                👋🏻 I&apos;m Jeyna Kim, a Versatile Full-Stack Web Developer
                offering a unique blend of expertise in marketing, brand
                strategy, and project management across diverse industries
              </p>

              <p className='my-4 font-medium'>
                💡 Proficient in multiple programming languages, I am dedicated
                to crafting interactive, user-centric, and feature-rich websites
                that leave a lasting impression
              </p>

              <p className='font-medium'>
                👩🏻‍💻 As a self-starter with a deep marketing background, I excel
                in both independent projects and team collaborations,
                consistently delivering solutions that surpass client
                expectations and cementing my role as a key asset to any
                endeavor
              </p>
              {/* 
              <p className='my-4 font-medium'>
                ✏️ My unique mix of experience allows me to understand client
                needs more deeply, resulting in solutions that not only meet but
                exceed expectations, making me a valuable asset to any project
              </p> */}
            </div>
            <div className='col-span-3 relative h-max rounded-2xl bg-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8'>
              {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark ' /> */}
              <Image
                src={profilePic}
                alt='Jeyna'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex-1 flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                  <AnimatedNumbers value={4} /> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Marketing, Sales, Brand Strategy & Project Management
                  Experience
                </h2>
              </div>

              <div className='flex-1 flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                  <AnimatedNumbers value={1} /> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Web Development Experience
                </h2>
              </div>

              <div className='flex-1 flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                  <AnimatedNumbers value={8} /> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  projects completed
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
