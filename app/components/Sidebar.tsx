import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='sticky bottom-0'>
      <div className='bottom-0 left-0 m-auto text-center'>
        <ul>
          <li className='mb-6 cursor-pointer w-[2.5rem]'>
            <a href='https://github.com/erika-mn' target='_blank'>
              <Image
                src='/assets/github-icon.png'
                alt='linkedin'
                width={35}
                height={35}
              />
            </a>
          </li>
          <li className='mb-6 cursor-pointer w-[2.5rem]'>
            <a
              href='https://www.linkedin.com/in/erika-joy-monjardin-694892209/'
              target='_blank'
            >
              <Image
                src='/assets/linkedin-icon.png'
                alt='linkedin'
                width={35}
                height={35}
              />
            </a>
          </li>
          <li className='cursor-pointer w-[2.5rem]'>
            <a href='https://discord.gg/bjjFuu3J' target='_blank'>
              <Image
                src='/assets/discord-icon.png'
                alt='linkedin'
                width={35}
                height={35}
              />
            </a>
          </li>
        </ul>
        <div className='h-[5.6rem] min-h-[1em] w-0.5 bg-primary mt-[2rem] ml-4'></div>
      </div>
      <div className='absolute bottom-0 right-0'>
        <p className='[writing-mode:vertical-lr] font-mono cursor-pointer'>
          <a href='mailto:erika.monjardin@gmail.com'>
            erika.monjardin@gmail.com
          </a>
        </p>
        <div className='h-[5.6rem] min-h-[1em] w-0.5 bg-primary mt-[2rem] ml-2' />
      </div>
    </div>
  );
};

export default Sidebar;
