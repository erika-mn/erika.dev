import React from 'react';
import { wizlex } from '@/app/assets/Assets';

const Wizlex = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>
        Web Developer{' '}
        <span className='underline underline-offset-3 decoration-wavy decoration-[#F24822]'>
          @Wizlex
        </span>
      </h1>
      <p className='text-xs italicize'>July 2024 - Present</p>
      {wizlex.map((wiz) => (
        <ul
          role='list'
          className='marker:text-primary list-disc ml-9 mt-5 w-[30rem]'
          key={wiz.key}
        >
          <li>{wiz.desc}</li>
        </ul>
      ))}
    </div>
  );
};

export default Wizlex;
