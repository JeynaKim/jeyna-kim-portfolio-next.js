import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/jeyna-profile5.png';
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
      <main className='flex w-full flex-col item-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Hello,' className='mb-16 flex items-start' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 '>
                About Me
              </h2>
              <p className='font-medium'>
                I'm Jeyna Kim, an innovative and creative full-stack web
                developer with experience in marketing, brand strategy, and
                project management in diverse industries.
              </p>

              <p className='my-4 font-medium'>
                Knowledgeable in a wide range of computer languages, dedicated
                to building user-centric, interactive and feature-rich websites.
                Always seeking to increase sales by combining my marketing
                strategies with tech skills to ensure a positive experience for
                my clients
              </p>

              <p className='font-medium'>
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <Image
                src={profilePic}
                alt='Jeyna'
                className='w-full h-auto rounded-2xl'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={4} /> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 '>
                  Marketing, Brand Strategy & Growth Experience
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={1} /> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                  developer experience
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={8} /> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
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
