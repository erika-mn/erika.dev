'use client';
import React, { useState } from 'react';
import Wizlex from './companies/Wizlex';
import BCSTech from './companies/BCSTech';
import Hooli from './companies/Hooli';
import ICPEP from './companies/ICPEP';

const WorkingExp = () => {
  const [isCompany, setCompany] = useState<string>('Wizlex');

  const renderDesc = (com: string) => {
    switch (com) {
      case 'Wizlex':
        return <Wizlex />;
      case 'BCS':
        return <BCSTech />;
      case 'Hooli':
        return <Hooli />;
      case 'ICPEP':
        return <ICPEP />;
    }
  };

  return (
    <div
      className='flex justify-center min-h-[79vh] font-mono pt-[12rem] text-primary'
      id='experience'
    >
      <div>
        <h1>WHERE I&apos;VE WORKED</h1>
        <hr className='w-[30rem] my-3' />
        <h1 className='text-5xl my-3'>
          Experienced in startups and <br /> large companies, working <br />
          <span className='font-bold text-tertiary'>
            independently
          </span> and <br />
          <span className='font-bold text-tertiary'>in teams</span>.
        </h1>
        <div className='mt-[5rem] flex'>
          <div className='w-[15rem]'>
            <div
              className={`text-center py-2 cursor-pointer gap-2 text-primary w-[10rem]   rounded-md ${
                isCompany === 'Wizlex'
                  ? 'text-tertiary shadow-[inset_0_0_0_1px_theme(colors.tertiary)]'
                  : 'text-primary hover:shadow-[inset_0_0_0_1px_theme(colors.primary)]'
              }`}
              onClick={() => setCompany('Wizlex')}
            >
              Wizlex
            </div>
            <div
              className={`text-center py-2 cursor-pointer gap-2 text-primary w-[10rem]   rounded-md ${
                isCompany === 'BCS'
                  ? 'text-tertiary shadow-[inset_0_0_0_1px_theme(colors.tertiary)]'
                  : 'text-primary hover:shadow-[inset_0_0_0_1px_theme(colors.primary)]'
              }`}
              onClick={() => setCompany('BCS')}
            >
              BCS Technology
            </div>
            <div
              className={`text-center py-2 cursor-pointer gap-2 text-primary w-[10rem]   rounded-md ${
                isCompany === 'Hooli'
                  ? 'text-tertiary shadow-[inset_0_0_0_1px_theme(colors.tertiary)]'
                  : 'text-primary hover:shadow-[inset_0_0_0_1px_theme(colors.primary)]'
              }`}
              onClick={() => setCompany('Hooli')}
            >
              Hooli Software
            </div>
            <div
              className={`text-center py-2 cursor-pointer gap-2 text-primary w-[10rem]   rounded-md ${
                isCompany === 'ICPEP'
                  ? 'text-tertiary shadow-[inset_0_0_0_1px_theme(colors.tertiary)]'
                  : 'text-primary hover:shadow-[inset_0_0_0_1px_theme(colors.primary)]'
              }`}
              onClick={() => setCompany('ICPEP')}
            >
              ICPEP-Singapore
            </div>
          </div>
          <div>{renderDesc(isCompany)}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkingExp;
