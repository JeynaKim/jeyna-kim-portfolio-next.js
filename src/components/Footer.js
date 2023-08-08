import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>
          &copy; {new Date().getFullYear()} Jeyna Kim. All rights reserved.
        </span>
        <div className='flex items-center'>
          Build With <span className='text-primary text-2xl px-1'>&#9825;</span>
          by&nbsp;{' '}
          <Link
            href='mailto:jeyna.kimm@gmail.com'
            targer={'_blank'}
            className='underline underline-offset-2'
          >
            Jeyna Kim
          </Link>
        </div>
        {/* <Link
          href='mailto:jeyna.kimm@gmail.com'
          targer={'_blank'}
          className='underline underline-offset-2'
        >
          Say hello
        </Link> */}
      </Layout>
    </footer>
  );
};

export default Footer;
