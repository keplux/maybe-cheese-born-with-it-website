import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Seo } from '../src';

const Home: NextPage = () => {
  return (
    <div className='relative shadow-lg py-16 sm:py-32'>
      <Seo
        title='Maybe Cheese Born With It Food Truck | Seen on Food Network'
        description="We are Toledo's first and only mac and cheese food truck, and Ohio's only Drag Queen food truck! Smother your guests in cheese at your event! (419) 245-8056"
        shareUrl='/images/sugar.jpg'
        url='https://www.maybecheesebornwithit.com'
      />
      <div className='px-2'>
        <div className='bg-white max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border-2 border-black'>
          <div className='relative border-b-2 border-black'>
            <div className='relative h-80 sm:h-[75vh] max-w-7xl mx-auto px-4 sm:px-6'>
              <Image
                src='/images/the-team.jpg'
                alt='The team'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div className='flex flex-col gap-16 py-16 px-4 max-w-4xl mx-auto sm:py-24 sm:px-6 lg:px-8'>
            <div>
              <div className='flex justify-center text-center'>
                <p className='font-display text-yellow-500 text-4xl sm:text-6xl font-extrabold [text-shadow:_-2px_2px_0px_#CE5937]'>
                  CHEESE IS LOVE
                </p>
              </div>
              <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div>
                  <p>
                    Welcome to the home of Toledo&apos;s first and only mac and
                    cheese food truck, and Ohio&apos;s only Drag Queen food
                    truck!
                  </p>
                  <p className='mt-4'>
                    But enough about me. Let&apos;s talk about{' '}
                    <span className='text-yellow-500 font-handwriting text-xl font-bold'>
                      CHEESE
                    </span>
                  </p>
                </div>
                <div className='relative h-64 border-4 border-brand-600 rounded-lg overflow-hidden'>
                  <Image
                    src='/images/cheese-flight.jpeg'
                    alt='Mac n cheese'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>
            <div>
              <div className='flex justify-center text-center'>
                <p className='font-display text-yellow-500 text-4xl sm:text-6xl font-extrabold [text-shadow:_-2px_2px_0px_#CE5937]'>
                  CHEESE IS LIFE
                </p>
              </div>
              <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div className='relative h-64 border-4 border-brand-600 rounded-lg overflow-hidden'>
                  <Image
                    src='/images/mac-n-cheese.jpeg'
                    alt='Mac n cheese'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div>
                  <p>
                    Our gourmet loaded mac n&apos; cheeses are packed full of
                    delicious, fresh ingredients. Our servings are generous, and
                    our service stellar.
                  </p>
                  <p className='mt-2'>Fresh sharp cheddar? Check.</p>
                  <p className='mt-2'>
                    <span className='font-bold'>Bold</span>, authentic pesto?
                    Double check.
                  </p>
                  <p className='mt-2'>
                    Fresh-sliced Italian mozzarella? Check, check, check.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='flex justify-center text-center'>
                <p className='font-display text-yellow-500 text-4xl sm:text-6xl font-extrabold [text-shadow:_-2px_2px_0px_#CE5937]'>
                  CHEESE IS{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-violet-500'>
                    EVERYTHING
                  </span>
                </p>
              </div>
              <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div>
                  All produce is locally sourced and farm-fresh. We&apos;re
                  serving up sparkling personalities packed into an even more
                  sparkly food truck!
                </div>
                <div className='relative h-64 border-4 border-brand-600 rounded-lg overflow-hidden'>
                  <Image
                    src='/images/cheese-is-life.jpg'
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

      <section className='bg-yellow-400 mt-16 sm:mt-32 py-16 border-y-2 border-black'>
        <h2 className='text-center text-4xl font-handwriting font-bold'>
          Our Customers are
        </h2>
        <p className='font-display text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-violet-500'>
          RAVING
        </p>
        <div className='md:grid md:grid-cols-3 max-w-7xl mx-auto'>
          <div className='md:max-w-sm mx-auto px-4 py-6 sm:px-8 md:flex md:flex-col '>
            <blockquote className='mt-6 md:flex-grow md:flex md:flex-col'>
              <div className='relative md:flex-grow'>
                <svg
                  className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-yellow-100'
                  fill='currentColor'
                  viewBox='0 0 32 32'
                  aria-hidden='true'
                >
                  <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                </svg>
                <p className='relative'>
                  Absolutely amazing. Food and service with a smile. Price is
                  right for the amount of food you get!
                </p>
              </div>
              <footer className='mt-4'>
                <div>Ashley</div>
              </footer>
            </blockquote>
          </div>

          <div className='md:max-w-sm mx-auto px-4 py-6 sm:px-8 md:flex md:flex-col '>
            <blockquote className='mt-6 md:flex-grow md:flex md:flex-col'>
              <div className='relative md:flex-grow'>
                <svg
                  className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-yellow-100'
                  fill='currentColor'
                  viewBox='0 0 32 32'
                >
                  <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                </svg>
                <p className='relative'>
                  My kids say it&apos;s the best Mac and Cheese they have ever
                  had!! My kids are Mac and Cheese connoisseurs!! It really was
                  Delicious!!!
                </p>
              </div>
              <footer className='mt-4'>
                <div>Christina</div>
              </footer>
            </blockquote>
          </div>

          <div className='md:max-w-sm mx-auto px-4 py-6 sm:px-8 md:flex md:flex-col '>
            <blockquote className='mt-6 md:flex-grow md:flex md:flex-col'>
              <div className='relative md:flex-grow'>
                <svg
                  className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-yellow-100'
                  fill='currentColor'
                  viewBox='0 0 32 32'
                >
                  <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                </svg>
                <p className='relative'>
                  Delicious food &amp; great customer service{' '}
                  <span className='text-red-600'>&hearts;</span> thanks sugar!!
                </p>
              </div>
              <footer className='mt-4'>
                <div>Destiny</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

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

export default Home;
