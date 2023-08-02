import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            targer='_blank'
            className='text-primary capitalize'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            position='Software Developer & Marketing Coordinator'
            company='Kaidu.ai'
            companyLink='https://www.kaidu.ai'
            time='2023 Feb - 2023 July'
            address='Toronto, ON'
            work={`Collaborated closely with cross-functional teams to architect, develop, and maintain Kaidu's platform, utilizing React and TypeScript`}
          />

          <Details
            position='Full-Stack Web Development Bootcamp'
            company='Lighthouse Labs'
            companyLink='https://www.lighthouselabs.ca'
            time='2022 May - 2022 July'
            address='Toronto, ON'
            work={`Throughout an intensive 12-week, full-time LHL Bootcamp, I had the opportunity to evolve as a full-stack web developer. Through a combination of intensive lectures, hands-on coding challenges, and practical problem-solving scenarios, I dove deep into a variety of programming languages and frameworks, including HTML, CSS, JavaScript, Node.js, React, and Ruby on Rails. The program also incorporated key principles of UX/UI design, making me versatile in both front-end and back-end development.`}
          />

          <Details
            position='Sr.Marketing Specialist'
            company='Kotra'
            companyLink='https://www.kotra.or.kr/english/index.do'
            time='2018 Mar - 2021 Sept'
            address='Toronto, ON'
            work={`Promoted and represented as an overseas manager of the South Korean SMEs (Small and Mid-size Enterprises) to expand their business opportunities in the Canadian market
      `}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
