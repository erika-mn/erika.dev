import React from 'react';
import Button from '../components/Button';

const LandingPage = () => {
  return (
    <div>
      <div className='mt-[12rem] h-[74.5vh] text-center'>
        <div>
          <p className='font-mono text-xl mb-2'>
            Hey there, I am{' '}
            <span className='underline underline-offset-3 decoration-wavy decoration-[#F24822]'>
              Erika Monjardin
            </span>
            ,
          </p>
          <h1 className='font-sans text-7xl font-bold'>Software Engineer</h1>
          <h1 className='font-sans text-7xl italic mt-4'>
            that crafts seamless websites.
          </h1>
          <p className='font-mono pt-7 pb-9'>
            I enjoy building smooth, user-friendly web applications, developing
            <br />
            (and sometimes designing) awesome digital experiences using
            <br />
            my expertise in interface design, React and Next.js.{' '}
          </p>
        </div>
        <div>
          <Button btnName="Let's Get Started!" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
