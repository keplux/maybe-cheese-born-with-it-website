import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const MobileItem = ({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: string;
}) => {
  return (
    <Disclosure.Button
      as='a'
      href={href}
      className={`${
        isActive
          ? 'border-brand-600 text-brand-600 hover:bg-yellow-300'
          : 'bg-yellow-500 border-l-yellow-500 text-black/70 hover:bg-yellow-400 hover:border-l-white hover:text-brand-600'
      } bg-yellow-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition`}
    >
      {children}
    </Disclosure.Button>
  );
};

export const Navbar = () => {
  const router = useRouter();
  const active = 'border-brand-500 hover:border-brand-600 transition';
  const inactive = 'border-transparent hover:border-brand-500 transition';

  return (
    <Disclosure as='nav' className='shadow sticky top-0 left-0 z-50'>
      {({ open }) => (
        <>
          {/* Desktop nav */}
          <div className='relative hidden py-1 bg-white border-y-2 border-black sm:flex sm:space-x-8 sm:justify-center'>
            {navItems.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <div
                    className={` ${
                      router.pathname === item.href ? active : inactive
                    }
                       cursor-pointer text-gray-900 inline-flex items-center px-2 pt-4 pb-3 border-b-2 text-sm font-medium`}
                  >
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile nav */}
          <div className='flex items-center justify-between sm:hidden bg-white border-y-2 border-black p-2'>
            <Link href='/'>
              <span className='cursor-pointer font-display text-lg text-yellow-500 font-extrabold [text-shadow:_-1px_1px_0px_#CE5937]'>
                CHEESE
              </span>
            </Link>
            {/* Mobile menu button */}
            <Disclosure.Button
              className={`${
                open ? 'bg-yellow-400' : ''
              } inline-flex items-center justify-center p-2 rounded-md text-black hover:text-yellow-800 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition`}
            >
              <span className='sr-only'>Open main menu</span>
              {open ? (
                <XIcon
                  className='block h-6 w-6 text-brand-600'
                  aria-hidden='true'
                />
              ) : (
                <MenuIcon className='block h-6 w-6' aria-hidden='true' />
              )}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className='sm:hidden bg-yellow-500 shadow-lg border-b-2 border-black'>
            <div className='pt-2 pb-3 space-y-1'>
              {navItems.map((item) => {
                return (
                  <MobileItem
                    key={item.label}
                    href={item.href}
                    isActive={router.pathname === item.href}
                  >
                    {item.label}
                  </MobileItem>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
