import Image from 'next/image';
import { Seo } from '../src';

const About = () => {
  return (
    <div className='relative py-16 sm:py-32 px-2'>
      <Seo
        title='Maybe Cheese Born With It Food Truck | Toledo, OH'
        description="This food truck is the embodiment of Toledo's favorite cheese (drag) queen, Sugar Vermonte. Learn more and book us for your upcoming event! (419) 245-8056"
        shareUrl='/images/sugar.jpg'
        url='https://www.maybecheesebornwithit.com/about'
      />
      <div className='bg-white max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border-2 border-black'>
        <div className='flex flex-col gap-32 py-16 px-4 max-w-5xl mx-auto sm:py-24 sm:px-6 lg:px-8'>
          <div>
            <div className='flex justify-center text-center'>
              <p className='font-display text-yellow-500 text-4xl sm:text-6xl font-extrabold [text-shadow:_-2px_2px_0px_#CE5937]'>
                ABOUT THE FOUNDER
              </p>
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
    </div>
  );
};
export default About;
