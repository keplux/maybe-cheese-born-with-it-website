import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer, Navbar } from '../src';
import Image from 'next/image';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-brand-900'>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.maybecheesebornwithit.com/',
          site_name: 'Maybe Cheese Born With It | Toledo, OH',
          images: [
            {
              url: '/images/sugar.jpg',
              alt: 'Maybe Cheese Born With It Website',
              type: 'image/jpg',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/icons/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/icons/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/icons/favicon-16x16.png',
          },
        ]}
      />

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <div className='fixed w-screen h-screen'>
        <Image
          src='/images/get-up-on-outta-here-with-my-cheeseholes.svg'
          alt='Cheeseholes'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='relative flex justify-between pt-4 max-w-7xl mx-auto'>
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
