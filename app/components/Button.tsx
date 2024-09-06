import React from 'react';

type BtnProps = {
  btnName: React.ReactNode;
};

const Button: React.FC<BtnProps> = ({ btnName }) => {
  return (
    <button className='text-primary px-4 py-1 font-mono rounded-md border-transparent transition hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_theme(colors.primary)] uppercase border-2'>
      {btnName}
    </button>
  );
};

export default Button;
