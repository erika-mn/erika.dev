import React from 'react';
import Image from 'next/image';
import { RefProps } from '../assets/TypeProps';

const AboutMe: React.FC<RefProps> = ({ refs }) => {
  return (
    <div
      className='flex flex-row justify-center h-[74.5vh] font-mono text-primary pt-[3rem]'
      id='about'
      ref={(el) => {
        refs.current[7] = el as HTMLDivElement;
      }}
    >
      <div>
        <h1>ABOUT ME</h1>
        <hr className='w-[30rem] my-3' />
        <h1 className='text-6xl my-3'>
          <span className='text-6xl font-extrabold text-secondary'>
            2+ years experience{' '}
          </span>
          as a<br /> software engineer.
        </h1>
        <div className='flex gap-10 mt-10'>
          <div className='w-[30rem]'>
            My interest in software development began in ninth grade when I
            started blogging on{' '}
            <span className='text-secondary'>WordPress</span>. Since then, I
            have pursued web development and interned at{' '}
            <span className='text-secondary'>ICPeP-Singapore</span>, where I
            learned the basics of{' '}
            <span className='text-secondary'>cloud computing</span>. Eventually,
            I graduated from{' '}
            <span className='text-secondary'>Bulacan State University </span>{' '}
            with a degree in{' '}
            <span className='text-secondary'>Computer Engineering</span>
            .
            <br /> <br /> Fast forward to today, I have{' '}
            <span className='text-secondary'>
              2 years of professional experience
            </span>{' '}
            in Software Development. I had the privilege of working at a{' '}
            <span className='text-secondary'>start-up</span> where I managed{' '}
            <span className='text-secondary'>three projects </span>{' '}
            simultaneously, as well as at a large{' '}
            <span className='text-secondary'>IT consulting company</span> where
            I collaborated with a{' '}
            <span className='text-secondary'> renowned bank</span>.
          </div>
          {/* <div>Eme</div> */}
          <div className='relative'>
            <Image
              src='/assets/my-pic.jpg'
              width={325}
              height={325}
              alt='my pic'
              className='rounded-lg '
            />
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
          </div>
        </div>
        <div>
          <h1 className='text-3xl my-3 mt-10'>
            &#123; My Digital Arsenal &#125;
          </h1>
          <div className='flex gap-5 mt-10 justify-center'>
            <div className='border-2 rounded-md py-2 px-4 w-[10rem] text-center'>
              <h1>FRONTEND</h1>
              <div className='flex justify-center gap-1'>
                <Image
                  src='/assets/next-icon.png'
                  width={30}
                  height={30}
                  alt='Next.js'
                  className='rounded-lg '
                />
                <Image
                  src='/assets/react-icon.png'
                  width={30}
                  height={30}
                  alt='React.js'
                  className='rounded-lg '
                />
                <Image
                  src='/assets/ts-icon.png'
                  width={30}
                  height={30}
                  alt='React.js'
                  className='rounded-lg '
                />
                <Image
                  src='/assets/tailwind-icon.png'
                  width={30}
                  height={30}
                  alt='React.js'
                  className='rounded-lg '
                />
              </div>
            </div>
            <div className='border-2 rounded-md py-2 px-4 w-[10rem] text-center'>
              <h1>BACKEND</h1>
              <div className='flex justify-center'>
                <Image
                  src='/assets/go-icon.png'
                  width={30}
                  height={30}
                  alt='Golang'
                  className='rounded-lg '
                />
              </div>
            </div>
            <div className='border-2 rounded-md py-2 px-4 w-[10rem] text-center'>
              <h1>DATABASE</h1>
              <div className='flex justify-center'>
                <Image
                  src='/assets/postgresql-icon.png'
                  width={30}
                  height={30}
                  alt='PostgreSQL'
                  className='rounded-lg '
                />
              </div>
            </div>
            <div className='border-2 rounded-md py-2 px-4 w-[10rem] text-center'>
              <h1>TOOLS</h1>
              <div className='flex justify-center'>
                <Image
                  src='/assets/aws-icon.png'
                  width={30}
                  height={30}
                  alt='AWS'
                  className='rounded-lg '
                />
                <Image
                  src='/assets/azure-icon.png'
                  width={30}
                  height={30}
                  alt='Azure Devops'
                  className='rounded-lg '
                />
                <Image
                  src='/assets/git-icon.png'
                  width={30}
                  height={30}
                  alt='Azure Devops'
                  className='rounded-lg '
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
