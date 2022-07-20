import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className='relative py-16 sm:py-32 px-2'>
      <NextSeo
        title='Maybe Cheese Born With It Food Truck | Toledo, OH'
        description="This food truck is the embodiment of Toledo's favorite cheese (drag) queen, Sugar Vermonte. Learn more and book us for your upcoming event! (419) 245-8056"
        canonical='https://www.maybecheesebornwithit.com/about'
      />
      <div className='bg-white max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border-2 border-black'>
        <div className='flex flex-col gap-32 py-16 px-4 max-w-5xl mx-auto sm:py-24 sm:px-6 lg:px-8'>
          <div>
            <div className='flex justify-center text-center'>
              <h1 className='font-display text-yellow-500 text-4xl sm:text-6xl font-extrabold [text-shadow:_-2px_2px_0px_#CE5937]'>
                ABOUT THE FOUNDER
              </h1>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2'>
              <div className='grid grid-cols-1 gap-2'>
                <p>
                  Sugar Vermonte is a legend in her own mind. A Royal Oak
                  native, Sugar moved to Toledo 20 years ago and never looked
                  back. She&apos;s sweet, sassy, smart, and smothered in cheese!
                </p>
                <p>
                  Sugar&apos;s been performing on stages around the midwest for
                  two decades and has earned a reputation as a sharp-witted
                  talent with a serious addiction to cheese.
                </p>
                <p>
                  Cheese made her <span className='font-semibold'>thick</span>,
                  so now she&apos;s using it to get rich!
                </p>
              </div>
              <div className='relative h-64 border-4 border-brand-600 rounded-lg overflow-hidden'>
                <Image
                  src='/images/sugar.jpg'
                  alt='Mac n cheese'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-2'>
        <div className='flex flex-col items-center mt-16 sm:mt-32 text-center bg-brand-500/50 backdrop-blur-md max-w-lg mx-auto px-8 py-8 sm:py-12 rounded-lg border-2 border-black'>
          <p className='text-3xl sm:text-4xl font-handwriting text-white font-bold'>
            Book Us for Your Event!
          </p>
          <Link href='/contact' passHref>
            <button className='mt-8 flex w-min items-center px-8 py-2 text-xl rounded-lg shadow-md font-semibold bg-yellow-400 hover:bg-yellow-500 transition'>
              <span>Contact</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='ml-4 h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default About;
