import React from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';

const GetInTouch = () => {
  return (
    <div
      className='mt-[45rem] flex flex-col items-center text-center self-center font-mono min-h-[35vh] z-10'
      id='contact'
    >
      <h1 className='text-5xl font-bold'>
        Get <span className='text-[#24C9EE] font-bold'>In Touch</span>!
      </h1>
      <p className='my-5'>
        Got a tech challenge, project idea, or just want to talk code? <br />{' '}
        I&rsquo;m all ears! Let&rsquo;s connect and build something great.
      </p>
      <Button btnName='Say Hello' />
      {/* <Footer /> */}
    </div>
  );
};

export default GetInTouch;
