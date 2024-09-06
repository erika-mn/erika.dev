import React from 'react';
import Button from './Button';

const navTitles = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'CONTACT'];

const NavBar = () => {
  return (
    <>
      <div className='flex justify-end items-center gap-[5rem] font-mono -mt-8'>
        <ul className='flex flex-row justify-end'>
          {navTitles.map((title) => (
            <li className='pl-[3rem]' key={title}>
              <p className='cursor-pointer'>{title}</p>
            </li>
          ))}
        </ul>
        <a href=''>
          {' '}
          <Button btnName='Resume' />
        </a>
      </div>
      <hr className='border-t-2 border-[#fff4de] my-4' />
    </>
  );
};

export default NavBar;
