import { hooli } from '@/app/assets/Assets';
import React from 'react';

const Hooli = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>
        Software Engineer{' '}
        <span className='underline underline-offset-3 decoration-wavy decoration-[#F24822]'>
          @Hooli Software
        </span>
      </h1>
      <p className='text-xs italicize'>November 2022 - February 2024</p>
      {hooli.map((hool) => (
        <ul
          role='list'
          className='marker:text-primary list-disc ml-9 mt-5 w-[30rem]'
          key={hool.key}
        >
          <li>{hool.desc}</li>
        </ul>
      ))}
    </div>
  );
};

export default Hooli;
