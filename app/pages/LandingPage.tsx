import React from 'react';
import Button from '../components/Button';
import { RefProps } from '../assets/TypeProps';

const LandingPage: React.FC<RefProps> = ({ refs }) => {
  return (
    <div>
      <div className='mt-[15rem] h-[74.5vh] text-center'>
        <div>
          <p
            className='font-mono text-xl mb-2'
            ref={(el) => {
              refs.current[0] = el as HTMLDivElement;
            }}
          >
            Hey there, I am{' '}
            <span className='underline underline-offset-3 decoration-wavy decoration-[#F24822]'>
              Erika Monjardin
            </span>
            ,
          </p>
          <h1
            className='font-sans text-7xl font-bold'
            ref={(el) => {
              refs.current[3] = el as HTMLDivElement;
            }}
          >
            Software Engineer
          </h1>
          <h1
            className='font-sans text-7xl italic'
            ref={(el) => {
              refs.current[4] = el as HTMLDivElement;
            }}
          >
            that crafts seamless websites.
          </h1>
          <p
            className='font-mono pt-7 pb-9'
            ref={(el) => {
              refs.current[5] = el as HTMLDivElement;
            }}
          >
            I enjoy building smooth, user-friendly web applications, developing
            <br />
            (and sometimes designing) awesome digital experiences using
            <br />
            my expertise in interface design, React and Next.js.{' '}
          </p>
        </div>
        <div
          ref={(el) => {
            refs.current[6] = el as HTMLDivElement;
          }}
        >
          <Button btnName="Let's Get Started!" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
