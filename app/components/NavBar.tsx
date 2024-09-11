import React from 'react';
import Button from './Button';
import Link from 'next/link';

const navTitles = [
  { key: 1, title: 'ABOUT', to: '#about' },
  { key: 2, title: 'EXPERIENCE', to: '#experience' },
  { key: 3, title: 'PROJECTS', to: '#projects' },
  { key: 4, title: 'CONTACT', to: '#contact' },
];

const NavBar = () => {
  return (
    <>
      <div className='flex justify-end items-center gap-[5rem] font-mono -mt-8'>
        <ul className='flex flex-row justify-end'>
          {navTitles.map((nav) => (
            <li className='pl-[3rem]' key={nav.key}>
              <Link href={nav.to}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <a href='' className='-ml-10'>
          {' '}
          <Button btnName='Resume' />
        </a>
      </div>
      <hr className='border-t-2 border-[#fff4de] my-4' />
    </>
  );
};

export default NavBar;
