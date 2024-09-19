import React from 'react';
import Image from 'next/image';
import { RefProps } from '../assets/TypeProps';

const Sidebar: React.FC<RefProps> = ({ refs }) => {
  return (
    <div
      className='sticky bottom-0'
      ref={(el) => {
        refs.current[2] = el as HTMLDivElement;
      }}
    >
      <div>
        <div className='text-center m-auto ml-1 w-[2.5rem]'>
          <ul>
            <li className='mb-6 cursor-pointer w-[2.5rem] hover:-translate-y-1 hover:transition'>
              <a href='https://github.com/erika-mn' target='_blank'>
                <Image
                  src='/assets/github-icon.png'
                  alt='linkedin'
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li className='mb-6 cursor-pointer w-[2.5rem] hover:-translate-y-1 hover:transition'>
              <a
                href='https://www.linkedin.com/in/erika-joy-monjardin-694892259/'
                target='_blank'
              >
                <Image
                  src='/assets/linkedin-icon.png'
                  alt='linkedin'
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li className='cursor-pointer w-[2.5rem] hover:-translate-y-1 hover:transition'>
              <a href='https://discord.gg/bjjFuu3J' target='_blank'>
                <Image
                  src='/assets/discord-icon.png'
                  alt='linkedin'
                  width={25}
                  height={25}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className='h-[5.6rem] min-h-[1em] w-0.5 bg-primary mt-[2rem] ml-4 '></div>
      </div>

      <div className='absolute bottom-0 right-0 w-[2.5rem]'>
        <p className='[writing-mode:vertical-lr] font-mono cursor-pointer hover:text-[#F24822] hover:-translate-y-1 hover:transition'>
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
