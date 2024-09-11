import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='flex flex-row justify-center h-[74.5vh] font-mono text-primary mt-[-1rem]'>
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
          <h1 className='text-3xl my-3 mt-10 font-bold'>My Digital Arsenal</h1>
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
    // <div className='mt-[10rem] 2xl:ml-[25rem] md:ml-[10rem] sm:ml-[2rem] h-[74.5vh] font-mono'>
    //   <div className='flex items-center gap-5'>
    //     <h1 className='text-5xl font-bold'>About Me</h1>
    //     <div className='w-[15rem] h-0.5 bg-primary' />
    //   </div>
    //   <div className='flex gap-[8rem] mt-10'>
    //     <div className='w-[30rem]'>
    //       Hello! My name is Erika. My interest in software development began in
    //       ninth grade when I started blogging on WordPress. Since then, I have
    //       pursued web development and interned at ICPeP-Singapore, where I
    //       learned the basics of cloud computing. Eventually, I graduated from
    //       Bulacan State University with a degree in Computer Engineering.
    //       <br /> <br /> Fast forward to today, I have 2 years of professional
    //       experience in Software Development. I had the privilege of working at
    //       a start-up where I managed three projects simultaneously, as well as
    //       at a large IT consulting company where I collaborated with a renowned
    //       bank.
    //       <br /> <br />
    //       My latest few technologies I&apos;ve been working with recently are:
    //       <ul
    //         role='list'
    //         className='marker:text-primary list-disc pl-8 space-y-1 mt-2 grid grid-cols-2'
    //       >
    //         <li>Next JS</li>
    //         <li>React/Typescript</li>
    //         <li>Tailwind CSS</li>
    //         <li>Go</li>
    //         <li>WordPress</li>
    //         <li>PostgreSQL</li>
    //         <li>Azure DevOps</li>
    //         <li>EWS EC2</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <Image
    //         src='/assets/my-pic.jpg'
    //         width={350}
    //         height={350}
    //         alt='my pic'
    //         className='rounded-lg'
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutMe;
