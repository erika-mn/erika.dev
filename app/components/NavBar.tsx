import React from 'react';
import Button from './Button';

const navTitles = ['About', 'Experience', 'Projects', 'Contact'];

const NavBar = () => {
  return (
    <div className='flex justify-end items-center gap-[5rem] font-mono'>
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
  );
};

export default NavBar;
