import AnimatedText from '@/components/AnimatedText';
import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';

import project1 from '../../public/images/projects/Go-Fit-Display.png';
import project2 from '../../public/images/projects/Jungle-Display.png';
import project3 from '../../public/images/projects/BiteMeBurger-Display.png';
import project4 from '../../public/images/projects/Scheduler-Demo.png';
import project5 from '../../public/images/projects/kaidu-Dashboard-Display.png';
import project6 from '../../public/images/projects/Management-Dashboard-Display.png';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-[450px]' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>

        <p
          className='my-2 font-medium text-dark '
          style={{ whiteSpace: 'pre-line' }}
        >
          {summary}
        </p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            {' '}
            <GithubIcon />{' '}
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

// const Project = ({ title, type, img, link, github }) => {
//   return (
//     <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
//       <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
//       <Link
//         href={link}
//         target='_blank'
//         className='w-full cursor-pointer overflow-hidden rounded-lg'
//       >
//         <Image src={img} alt={title} className='w-full h-[450px]' />
//       </Link>

//       <div className='w-full flex flex-col items-start justify-between mt-4'>
//         <span className='text-primary font-medium text-xl'>{type}</span>
//         <Link href={link} target='_blank' className='hover:underline offset-2'>
//           <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
//         </Link>

//         <p className='my-2 font-medium text-dark'></p>
//         <div className='w-full mt-2 flex items-center justify-between'>
//           <Link
//             href={link}
//             target='_blank'
//             className='text-lg font-semibold underline'
//           >
//             Visit
//           </Link>
//           <Link href={github} target='_blank' className='w-8'>
//             {' '}
//             <GithubIcon />{' '}
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };
const projects = () => {
  return (
    <>
      <Head>
        <title>Jeyna Kim | Projects </title>
        <meta name='description' content='any description' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text={`Never Stop Learning!`}
            className='mb-16 !text-6xl'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Kaidu Client Dashboard'
                summary={`The Kaidu Dashboard is a powerful analytics platform designed for people counting systems. It offers real-time traffic insights, enabling businesses to gain a deeper understanding of customer behavior\n\nTech Stack: React with TypeScript | Visx | Redux`}
                link='https://www.kaidu.ai/'
                type='Real-Time Analytics and Management App'
                img={project5}
                github='https://www.kaidu.ai/'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title='Management Dashboard'
                summary={`A comprehensive Management Dashboard aimed at centralizing control and monitoring of Kaidu Scanners, specialized in people counting systems\n\nTech Stack: React with TypeScript | Redux | Google Maps API | react-hook-form | useAsync hook | SWR`}
                link='https://www.kaidu.ai/'
                type='Client Management App'
                img={project6}
                github='https://www.kaidu.ai/'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='Go Fit'
                summary={`A React based fitness social network application, where users can connect with nearby gym buddies, upload and share images, chat, and send invitations to workout \n\nTech Stack: Node.js | React | AWS S3 | Multer S3 | MongoDB | Express`}
                link='https://github.com/JeynaKim/go-fit'
                type='Fitness Social Network App'
                img={project1}
                github='https://github.com/JeynaKim/go-fit'
              />
            </div>
            <div className='col-span-12'>
              {' '}
              <FeaturedProject
                title='Jungle'
                summary={`A mini e-commerce application for a plant shop built with Rails 6.1\n\nTech Stack: Ruby on Rails |  BootStrap |  Stripe | PostGreSQL | Cypress | SASS`}
                link='https://github.com/JeynaKim/jungle-rails'
                type='Mini E-commerce App'
                img={project2}
                github='https://github.com/JeynaKim/jungle-rails'
              />
            </div>
            <div className='col-span-12'>
              {' '}
              <FeaturedProject
                title='Bite Me Burger'
                summary={`Food ordering application where users can place an order for pickup and receive text notifications\n\nTech Stack: HTML | CSS | Javascript | Node.js | jQuery | Express | EJS | Twilio`}
                link='https://github.com/JeynaKim/bite-me-burger'
                type='Food Delivery App'
                img={project3}
                github='https://github.com/JeynaKim/bite-me-burger'
              />
            </div>
            <div className='col-span-12'>
              {' '}
              <FeaturedProject
                title='Interview Scheduler'
                summary={`A single-page React application where a user can book and cancel interviews \n\nTech Stack: React | Node.js | PostgreSQL |  Websocket | Cypress | Jest | Axios, Storybook`}
                link='https://github.com/JeynaKim/scheduler'
                type='Interviewer Schedule App'
                img={project4}
                github='https://github.com/JeynaKim/scheduler'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
