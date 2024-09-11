import React from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';

const GetInTouch = () => {
  return (
    <div className='mt-[25rem] flex flex-col items-center justify-center text-center font-mono min-h-[35vh]'>
      <h1 className='text-5xl font-bold'>Get In Touch!</h1>
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
