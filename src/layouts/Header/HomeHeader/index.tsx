import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';
import React, { useContext, useState } from 'react';
import logo from '@/assets/logo.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '@/contexts/auth_context';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Join the Waitlist', href: '/waitlist' },
];

function HomeHeader() {
  const { isAuthenticated, signout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg dark:bg-primary-foreground/30">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">LEXARI</span>
            <img className="h-8 w-auto" src={logo} alt="LEXARI" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-muted-foreground/10"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isAuthenticated ? (
            <div className="flex gap-4">
              <Link
                to="/discovery"
                className="text-sm font-semibold leading-6 duration-100 hover:text-gray-700"
              >
                Discovery
              </Link>
              <span
                className="cursor-pointer text-sm font-semibold leading-6 duration-100 hover:text-gray-700"
                onClick={signout}
              >
                Sign out
              </span>
            </div>
          ) : (
            <Link
              to="/login"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Log in
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">LEXARI</span>
              <img className="h-8 w-auto" src={logo} alt="LEXARI" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {isAuthenticated ? (
                  <div className="flex flex-col gap-4">
                    <Link
                      to="/discovery"
                      className="text-sm font-semibold leading-6 duration-300 hover:text-gray-500"
                    >
                      Discovery
                    </Link>
                    <span
                      className="cursor-pointer text-sm font-semibold leading-6 duration-300 hover:text-gray-500"
                      onClick={signout}
                    >
                      Sign out
                    </span>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default HomeHeader;
