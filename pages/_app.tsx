import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer, Navbar } from '../src';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-brand-900'>
      <div className='fixed w-screen h-screen'>
        <Image
          src='/images/get-up-on-outta-here-with-my-cheeseholes.svg'
          alt='Cheeseholes'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='relative flex justify-between pt-4'>
        <div className='absolute -bottom-4 left-0 z-0'>
          <Image
            src='/images/toledo-skyline.png'
            alt='Toledo Skyline'
            height={284}
            width={1200}
          />
        </div>
        <div className='relative h-64 w-full'>
          <Image
            src='/images/logo.png'
            alt='Maybe Cheese Born With It logo'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <Navbar />
      <div className='bg-brand-600'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
