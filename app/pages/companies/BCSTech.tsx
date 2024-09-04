import React from 'react';
import { bcsTech } from '@/app/assets/Assets';

const BcsTech = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>
        React Developer{' '}
        <span className='underline underline-offset-3 decoration-wavy decoration-[#F24822]'>
          @BCS Technology
        </span>
      </h1>
      <p className='text-xs italicize'>February 2024 - Present</p>
      {bcsTech.map((bcs) => (
        <ul
          role='list'
          className='marker:text-primary list-disc ml-9 mt-5 w-[30rem]'
          key={bcs.key}
        >
          <li>{bcs.desc}</li>
        </ul>
      ))}
    </div>
  );
};

export default BcsTech;
