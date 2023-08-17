import { zodResolver } from '@hookform/resolvers/zod';
import { NextSeo } from 'next-seo';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const inputStyle =
  'py-3 px-4 block w-full shadow-sm hover:border-yellow-500 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 caret-yellow-500 border border-black rounded-md';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const resolver = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string(),
  email: z.string().min(1, 'Required').email('Invalid email'),
  phone: z.string().min(10, 'Must be 10 digits').max(10, 'Must be 10 digits'),
  message: z.string().min(32, 'Please add more details'),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    resolver: zodResolver(resolver),
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch('/api/submitContactForm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    });

    const response = await res.json();
  };

  return (
    <div>
      <NextSeo
        title="Planning an Event? We'll Bring the Cheese! | Toledo, OH"
        description='Bring the sassiest food truck in toledo to your next event! Your guests will love our gooey mac and cheese truck! Book us or inquire today: (419) 245-8056.'
        canonical='https://www.maybecheesebornwithit.com/contact'
      />
      <div className='relative py-16'>
        <div className='px-2'>
          <div className='py-16 px-4 max-w-3xl sm:px-6 lg:px-8 bg-white mx-auto rounded-t-lg overflow-hidden shadow-lg border-x-2 border-t-2 border-black'>
            <div className='relative max-w-xl mx-auto'>
              <div className='flex justify-center text-center'>
                <h1 className='font-display text-yellow-500 text-4xl sm:text-6xl font-extrabold [text-shadow:_-2px_2px_0px_#CE5937]'>
                  CONTACT US
                </h1>
              </div>
              <div className='font-handwriting text-xl font-bold text-center mt-8'>
                We want to hear from you!
              </div>
            </div>
          </div>
        </div>
        <div className='py-16 bg-yellow-400 border-y-2 border-black'>
          <div className='max-w-3xl mx-auto px-8'>
            <h2 className='font-bold'>Inquiries/Booking</h2>
            <div className='flex items-center mt-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-black'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
              </svg>
              <a href='tel:+14192458056'>
                <span className='ml-2 text-gray-800 text-sm hover:text-brand-600'>
                  (419) 245-8056
                </span>
              </a>
            </div>
            <div className='flex items-center mt-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-black'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z'
                  clipRule='evenodd'
                />
              </svg>
              <a href='mailto:booking@maybecheesebornwithit.com'>
                <span className='ml-2 text-gray-800 text-sm hover:text-brand-600'>
                  booking@maybecheesebornwithit.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='px-2'>
          <div className='py-16 px-4 max-w-3xl sm:px-6 lg:px-8 bg-white mx-auto rounded-b-lg overflow-hidden shadow-lg border-x-2 border-b-2 border-black'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method='POST'
              className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
            >
              <div>
                <label htmlFor='firstName' className='block text-brand-600'>
                  First name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    autoComplete='given-name'
                    className={`${inputStyle} ${
                      errors.firstName && 'border-red-500'
                    }`}
                    {...register('firstName')}
                  />
                  {errors.firstName && (
                    <p className='mt-1 text-xs text-red-500 italic'>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor='lastName' className='block text-brand-600'>
                  Last name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    autoComplete='family-name'
                    className={`${inputStyle} ${
                      errors.lastName && 'border-red-500'
                    }`}
                    {...register('lastName')}
                  />
                  {errors.lastName && (
                    <p className='mt-1 text-xs text-red-500 italic'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='email' className='block text-brand-600'>
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    type='email'
                    autoComplete='email'
                    className={`${inputStyle} ${
                      errors.email && 'border-red-500'
                    }`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className='mt-1 text-xs text-red-500 italic'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='phone' className='block text-brand-600'>
                  Phone number
                </label>
                <div className='mt-1'>
                  <input
                    type='tel'
                    autoComplete='phone'
                    className={`${inputStyle} ${
                      errors.phone && 'border-red-500'
                    }`}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className='mt-1 text-xs text-red-500 italic'>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='message' className='block text-brand-600'>
                  Message
                </label>
                <div className='mt-1'>
                  <textarea
                    rows={4}
                    className={`${inputStyle} ${
                      errors.message && 'border-red-500'
                    }`}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className='mt-1 text-xs text-red-500 italic'>
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='sm:col-span-2'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`cursor-pointer mt-8 flex justify-center w-full items-center px-8 py-2 text-xl rounded-lg shadow-md font-semibold transition ${
                    isSubmitting
                      ? 'bg-gray-400'
                      : 'bg-yellow-400 hover:bg-yellow-500'
                  }`}
                >
                  {isSubmitting ? 'Sending' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
