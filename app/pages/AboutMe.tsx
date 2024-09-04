import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='mt-[10rem] 2xl:ml-[25rem] md:ml-[10rem] sm:ml-[2rem] h-[74.5vh] font-mono'>
      <div className='flex items-center gap-5'>
        <h1 className='text-5xl font-bold'>About Me</h1>
        <div className='w-[15rem] h-0.5 bg-primary' />
      </div>
      <div className='flex gap-[8rem] mt-10'>
        <div className='w-[30rem]'>
          Hello! My name is Erika. My interest in software development began in
          ninth grade when I started blogging on WordPress. Since then, I have
          pursued web development and interned at ICPeP-Singapore, where I
          learned the basics of cloud computing. Eventually, I graduated from
          Bulacan State University with a degree in Computer Engineering.
          <br /> <br /> Fast forward to today, I have 2 years of professional
          experience in Software Development. I had the privilege of working at
          a start-up where I managed three projects simultaneously, as well as
          at a large IT consulting company where I collaborated with a renowned
          bank.
          <br /> <br />
          My latest few technologies I&apos;ve been working with recently are:
          <ul
            role='list'
            className='marker:text-primary list-disc pl-8 space-y-1 mt-2 grid grid-cols-2'
          >
            <li>Next JS</li>
            <li>React/Typescript</li>
            <li>Tailwind CSS</li>
            <li>Go</li>
            <li>WordPress</li>
            <li>PostgreSQL</li>
            <li>Azure DevOps</li>
            <li>EWS EC2</li>
          </ul>
        </div>
        <div>
          <Image
            src='/assets/my-pic.jpg'
            width={350}
            height={350}
            alt='my pic'
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
