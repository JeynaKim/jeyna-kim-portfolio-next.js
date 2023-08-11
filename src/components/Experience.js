import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            targer='_blank'
            className='text-primary dark:text-primaryDark capitalize'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p
          className='font-medium w-full md:text-sm'
          style={{ whiteSpace: 'pre-line' }}
        >
          {work}
        </p>
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
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Software Developer & Marketing Coordinator'
            company='Kaidu.ai'
            companyLink='https://www.kaidu.ai'
            time='2023 Feb - 2023 July'
            address='Toronto, ON'
            work={`Kaidu.ai specializes in real-time spatial intelligence, harnessing AI and machine learning to provide businesses with actionable insights into customer behavior. Kaidu's scalable technology adapts to changing customer preferences, ensuring businesses stay competitive and make data-driven decisions to enhance operations and loyalty`}
            // work={`- Collaborated with cross-functional teams to architect, develop, and maintain Kaidu's client platform, leveraging primarily React and TypeScript\n- Led the design and development of visually appealing and highly interactive dashboard UIs. Applied a diverse set of front-end technologies and libraries, including Bootstrap, Tailwind CSS, Styled-components, MUI to enhance user experience and system responsiveness\n- Played a crucial role in the redesign and development of 'Zones' and 'Settings' Page UI on the Kaidu dashboard. Leveraged Figma to craft and present initial design concepts, providing multiple design alternatives for team evaluation and decision-making\n- Orchestrated and diligently monitored targeted cold-email campaigns across Canada, the US, and the UK. This strategic initiative broadened Kaidu's global outreach and successfully secured two meeting requests from premier experiential marketing agencies for potential collaborations\n- Conducted an in-depth competitor analysis, providing strategic insights and actionable recommendations that materially contributed to the enhancements of Kaidu's platform

            // `}
          />

          <Details
            position='Full-Stack Web Development Bootcamp'
            company='Lighthouse Labs'
            companyLink='https://www.lighthouselabs.ca'
            time='2022 May - 2022 July'
            address='Toronto, ON'
            work={`Lighthouse Labs offers an intensive Web Development Program that turns participants into skilled web developers. The course covers the latest web tools and techniques, with hands-on projects mentored by experienced professionals`}
            // work={`Throughout an intensive 12-week, full-time LHL Bootcamp, I had the opportunity to evolve as a full-stack web developer. Through a combination of intensive lectures, hands-on coding challenges, and practical problem-solving scenarios, I dove deep into a variety of programming languages and frameworks, including HTML, CSS, JavaScript, Node.js, React, and Ruby on Rails. The program also incorporated key principles of UX/UI design, making me versatile in both front-end and back-end development.`}
          />

          <Details
            position='Sr.Marketing Specialist'
            company='Kotra'
            companyLink='https://www.kotra.or.kr/english/index.do'
            time='2018 Mar - 2021 Sept'
            address='Toronto, ON'
            work={`Korea Trade-Investment Promotion Agency(KOTRA) is Korea's trade promotion organization(TPO) under the auspices of the Government of Korea's Ministry of Trade, Industry, and Energy(MOTIE)`}
            //       work={`- Promoted and represented as an overseas manager of the South Korean SMEs to expand their business opportunities in the Canadian market\n- Developed and executed numerous strategic marketing plans/events, campaigns, digital promotional materials, business proposals and visual presentations in order to cultivate profitable growth for the client company\n- Maintained long-term business relationships with a broad range of clients across various industries, previously collaborated with over 170+ clients at all levels of an organization\n- Researched and provided in-depth market analyses to clients, which encompass industry structures, business insights, key statistics, market trends, and SWOT analysis
            // `}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
