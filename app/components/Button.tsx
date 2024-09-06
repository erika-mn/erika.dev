import React from 'react';

type BtnProps = {
  btnName: React.ReactNode;
};

const Button: React.FC<BtnProps> = ({ btnName }) => {
  return (
    <button className='border-2 border-primary py-2 px-5 rounded-sm font-mono text-[#fff4de] hover:border-b-4 hover:border-r-4 ease-out'>
      {btnName}
    </button>
  );
};

export default Button;
