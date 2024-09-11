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
    <div className='flex justify-center min-h-[79vh] font-mono mt-[12rem] text-primary'>
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
              className={`flex items-center cursor-pointer gap-2 text-primary hover:bg-primary hover:bg-opacity-15 w-[10rem] ${
                isCompany === 'Wizlex'
                  ? 'text-tertiary bg-opacity-15 bg-primary'
                  : 'text-primary'
              }`}
              onClick={() => setCompany('Wizlex')}
            >
              <div
                className={`h-[2.5rem] w-0.5 bg-primary mr-3 ${
                  isCompany === 'Wizlex' ? 'bg-primary' : ' bg-opacity-15'
                }`}
              />
              Wizlex
            </div>
            <div
              className={`flex items-center cursor-pointer gap-2 text-primary hover:bg-primary hover:bg-opacity-15 w-[10rem] ${
                isCompany === 'BCS'
                  ? 'text-tertiary bg-opacity-15 bg-primary'
                  : 'text-primary'
              }`}
              onClick={() => setCompany('BCS')}
            >
              <div
                className={`h-[2.5rem] w-0.5 bg-primary mr-3 ${
                  isCompany === 'BCS' ? 'bg-primary' : ' bg-opacity-15'
                }`}
              />
              BCS Technology
            </div>
            <div
              className={`flex items-center cursor-pointer gap-2 text-primary hover:bg-primary hover:bg-opacity-15 w-[10rem] ${
                isCompany === 'Hooli'
                  ? 'text-tertiary bg-opacity-15 bg-primary'
                  : 'text-primary'
              }`}
              onClick={() => setCompany('Hooli')}
            >
              <div
                className={`h-[2.5rem] w-0.5 bg-primary mr-3 ${
                  isCompany === 'Hooli' ? 'bg-primary' : ' bg-opacity-15'
                }`}
              />{' '}
              Hooli Software
            </div>
            <div
              className={`flex items-center cursor-pointer gap-2 text-primary hover:bg-primary hover:bg-opacity-15 w-[10rem] ${
                isCompany === 'ICPEP'
                  ? 'text-tertiary bg-opacity-15 bg-primary'
                  : 'text-primary'
              }`}
              onClick={() => setCompany('ICPEP')}
            >
              <div
                className={`h-[2.5rem] w-0.5 bg-primary mr-3 ${
                  isCompany === 'ICPEP' ? 'bg-primary' : ' bg-opacity-15'
                }`}
              />{' '}
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
