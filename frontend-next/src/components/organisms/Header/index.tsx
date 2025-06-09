'use client';

import React, { JSX, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SearchField from '@components/molecules/SearchField';

const Header = (): JSX.Element => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const adminUrl: string = `${process.env.NEXT_PUBLIC_API_URL}/admin`;

  useEffect(() => {
    const handleRouteChange = () => {
      setOpenMenu(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <header className="bg-white">
      <nav
        className="flex max-w-7xl mx-auto items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="text-2xl font-bold text-slate-700 -m-1.5 p-1.5">
            André
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              .can
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="font-semibold text-gray-900">
            Posts
          </Link>
          <Link href="/posts/create" className="font-semibold text-gray-900">
            Crie seu post!
          </Link>
        </div>
        <div className="flex sm:flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-6">
            <SearchField></SearchField>
            <Link href={adminUrl} className="hidden lg:flex font-semibold text-gray-900">
              Log in
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setOpenMenu(true)}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {openMenu && (
        <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setOpenMenu(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-slate-700 -m-1.5 p-1.5">
                André
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  .can
                </span>
              </Link>
              <button
                onClick={() => setOpenMenu(false)}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Posts
                  </Link>
                  <Link
                    href="/posts/create"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Crie seu post!
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href={adminUrl}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
