import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/jeyna-profile.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image
                src={profilePic}
                alt='jeyna'
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                // text='Turning Vision Into Reality With Code And Design'
                text='Hello!'
                className='text-2xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <div className='flex flex-col justify-start '>
                <p className='text-5xl font-bold mt-10 xl:!text-4xl lg:!text-center lg:!text-3xl md:!text-2xl sm:!text-xl sm:mt-2 md:mt-2 xl:mt-2'>
                  👋🏻 I'm Jeyna Kim
                </p>
                <p className='mt-3'>
                  ___________ A Passionate Full-Stack Web Developer hailing from
                  Toronto, ON
                </p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                  Passionate about turning ideas into digital reality, I
                  specialize in creating innovative web applications. Explore my
                  projects and discover how I blend creativity, functionality,
                  and user-centered design!
                </p>

                <div className='flex items-center self-start mt-4 lg:self-center'>
                  <Link
                    href='https://resume.creddle.io/resume/b5p8hv43jyy'
                    target={'_blank'}
                    className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                    // download={true}
                  >
                    Resume <LinkArrow className={'w-6 ml-1'} />
                  </Link>
                  <Link
                    href='mailto:jeyna.kimm@gmail.com'
                    target={'_blank'}
                    className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-blcok w-24 md:hidden'>
          <Image src={lightBulb} alt='Jeyna' className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}
