import { useState } from 'react'
import { Transition, Menu } from '@headlessui/react'
import NextLink from 'next/link';
import React from 'react';
import Raccoon from '../icons/Raccoon';


export default function Header () {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  return (
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between border-b-2 border-gray-100 py-6">
            <NextLink href="/">
              <span className="w-24 h-12 -mt-9">
                <Raccoon />
              </span>
            </NextLink>

          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" onClick={() => setIsMobileOpen(!isMobileOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex">
          <Menu>
          {({ open }) => (
            <>
            <Menu.Button className="group text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 ml-4 outline-none">
            <span>Photography</span>
            <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            </Menu.Button>
            <Transition
              show={open}
              enter="transition ease-out duration-80 transform"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-80transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
                <Menu.Items static as={React.Fragment}>
                    <div className="absolute z-100 -ml-80 mt-12 outline-none">
                      <div className="w-screen max-w-md rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-8 bg-white px-8 py-8">
                          <Menu.Item>
                            {({ active }) => (
                              <a href="https://jpvalery.photo" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Portfolio
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    My photography portfolio
                                  </p>
                                </div>
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a href="https://archive.jpvalery.photo" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Photo Archive
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    An unfiltered stream of all my photos
                                  </p>
                                </div>
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a href="https://montrealphoto.club" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Montréal Photo Club
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    I founded a Photo Club in Montréal in 2019
                                  </p>
                                </div>
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a href="https://unsplash.com/@jpvalery" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
                                </svg>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Unsplash
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    I share hundreds of photos for free on Unsplash
                                  </p>
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            <div className="flow-root w-full">
                              <a href="mailto:contact@jpvalery.photo" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">

                                <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span className="ml-3">Get in touch about my photography</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </Menu.Item>
                      </div>
                    </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>



          <Menu>
          {({ open }) => (
            <>
            <Menu.Button className="group text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 ml-4 outline-none">
            <span>About</span>

            <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            </Menu.Button>
            <Transition
              show={open}
              enter="transition ease-out duration-80 transform"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-80transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
            <Menu.Items static as={React.Fragment}>
            <div className="absolute z-100 -ml-96 mt-12 outline-none">
              <div className="w-screen max-w-md rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-8 bg-white px-8 py-8">
                              <Menu.Item>
                                {({ active }) => (
                                  <NextLink href="/about">
                                  <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        /about
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        Who the heck am I?
                                      </p>
                                    </div>
                                    </span>
                                  </NextLink>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <NextLink href="/now">
                                  <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        /now
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        What am I up to lately?
                                      </p>
                                    </div>
                                    </span>
                                  </NextLink>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <NextLink href="/stack">
                                  <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        /stack
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        What am I using (only really cool stuff)
                                      </p>
                                    </div>
                                    </span>
                                  </NextLink>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <NextLink href="/dashboard">
                                  <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        /dashboard
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        Some personal metrics
                                      </p>
                                    </div>
                                    </span>
                                  </NextLink>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <NextLink href="/cemetery">
                                  <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        /cemetery
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        Deprecated/abandoned projects
                                      </p>
                                    </div>
                                    </span>
                                  </NextLink>
                                )}
                              </Menu.Item>

                              </div>
                              <Menu.Item>
                                {({ active }) => (
                                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                    <div className="flow-root w-full">
                                      <a href="https://jpvalery.typeform.com/to/y96C4A" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">

                                        <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                        </svg>
                                        <span className="ml-3">Get in touch about anything</span>
                                      </a>
                                    </div>
                                  </div>
                                )}
                              </Menu.Item>
                            </div>
                          </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
              <span className="group text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 ml-4 outline-none">
                <a href="#">
                  Blog
                </a>
              </span>
            </div>
          </div>


      <Transition
        show={isMobileOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (

      <div ref={ref} className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                  </div>

                  <div className="-mr-2">
                    <button type="button" onClick={() => setIsMobileOpen(!isMobileOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Analytics
                      </span>
                    </a>

                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Engagement
                      </span>
                    </a>

                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Security
                      </span>
                    </a>

                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Integrations
                      </span>
                    </a>

                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Automations
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
</div>


  )
}
