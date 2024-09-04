import React from 'react';

type BtnProps = {
  btnName: React.ReactNode;
};

const Button: React.FC<BtnProps> = ({ btnName }) => {
  return (
    <button className='border-2 border-primary py-2 px-5 rounded-lg bg-[#FFD54F] font-mono'>
      {btnName}
    </button>
  );
};

export default Button;
