import { icpep } from '@/app/assets/Assets';
import React from 'react';

const ICPEP = () => {
  return (
    <div>
      <h1 className='text-2xl'>
        <span className='text-tertiary font-bold'> Cloud Engineer Intern </span>
        <span className='underline underline-offset-3 decoration-wavy decoration-[#F24822]'>
          @ICPEP-Singapore
        </span>
      </h1>
      <p className='text-xs italicize'>August 2021</p>
      {icpep.map((sin) => (
        <ul
          role='list'
          className='marker:text-primary list-disc ml-9 mt-5 w-[30rem]'
          key={sin.key}
        >
          <li>{sin.desc}</li>
        </ul>
      ))}
    </div>
  );
};

export default ICPEP;
