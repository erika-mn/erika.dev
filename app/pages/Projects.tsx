import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div
      className='2xl:ml-[25rem] md:ml-[10rem] sm:ml-[2rem] h-[74.5vh] font-mono pt-[9rem]'
      id='projects'
    >
      <h1>PROJECTS</h1>
      <hr className='w-[30rem] my-3 text-primary' />
      <h1 className='text-6xl'>
        Projects that I <br /> have previously{' '}
        <span className='text-[#FFD54F] font-bold'>worked</span> on:
      </h1>
      <div className='mt-[5rem] relative flex'>
        <Image
          src='/assets/cuisina.png'
          alt='linkedin'
          width={700}
          height={700}
          className='rounded-md'
        />
        <div className='absolute right-[15rem] transform translate-y-1/4'>
          <h1 className='text-2xl text-right font-bold underline underline-offset-3 decoration-wavy decoration-[#F24822]'>
            Cuisina
          </h1>
          <div className='w-[35rem] bg-[#FFD54F] pl-4 pr-9 py-5 rounded-md text-white my-5 text-right text-white shadow-lg'>
            An expansive mobile application that provides categorized recipes
            with available link to YouTube videos or web articles. This features
            grocery list notes, alarm clock and calendar notes that fulfill
            their cooking needs.
          </div>
          <p className='text-right'>Java &nbsp; Kotlin &nbsp; Android Studio</p>
        </div>
      </div>
      <div className='mt-[5rem] relative flex'>
        <div className='transform translate-y-1/2 z-10'>
          <h1 className='text-2xl text-left font-bold underline underline-offset-3 decoration-wavy decoration-[#F24822]'>
            Web Portfolio
          </h1>
          <div className='w-[35rem] bg-[#FFD54F] pr-4 pl-9 py-5 rounded-md text-white my-5 text-left text-white shadow-lg'>
            A web portfolio that highlights my background, showcases my
            projects, and features samples of my work as a software engineer.
          </div>
          <p className='text-left'>HTML &nbsp; CSS &nbsp; JavaScript</p>
        </div>
        <div>
          <Image
            src='/assets/webport.png'
            alt='linkedin'
            width={700}
            height={700}
            className='absolute rounded-md left-[29.5rem]'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
