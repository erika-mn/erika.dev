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
    <div className='flex justify-center min-h-[79vh] font-mono'>
      <div>
        <div className='flex items-center gap-5 mt-[4rem]'>
          <h1 className='text-5xl font-bold'>Where I&apos;ve Worked</h1>
          <div className='w-[15rem] h-0.5 bg-primary' />
        </div>
        <div className='mt-[5rem] flex'>
          <div className='w-[15rem]'>
            <div
              className={`flex items-center cursor-pointer gap-2 hover:bg-gray-200 ${
                isCompany === 'Wizlex'
                  ? 'text-[#FFF4DE]'
                  : 'text-blue-200 bg-gray-200'
              }`}
              onClick={() => setCompany('Wizlex')}
            >
              <div className='h-[2.5rem] w-0.5 bg-primary mr-3' />
              Wizlex
            </div>
            <div
              className='flex items-center cursor-pointer gap-2 text-[#FFF4DE]'
              onClick={() => setCompany('BCS')}
            >
              <div className='h-[2.5rem] w-0.5 bg-primary mr-3 text-[#FFF4DE]' />
              BCS Technology
            </div>
            <div
              className='flex items-center cursor-pointer gap-2 text-[#FFF4DE]'
              onClick={() => setCompany('Hooli')}
            >
              <div className='h-[2.5rem] w-0.5 bg-primary mr-3 text-[#FFF4DE]' />
              Hooli Software
            </div>
            <div
              className='flex items-center cursor-pointer gap-2 text-[#FFF4DE]'
              onClick={() => setCompany('ICPEP')}
            >
              <div className='h-[2.5rem] w-0.5 bg-primary mr-3 text-[#FFF4DE]' />
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
