import { useState } from "react";
import { Transition, Menu } from "@headlessui/react";
import NextLink from "next/link";
import React from "react";
import Raccoon from "../elements/icons/Raccoon";
import Unsplash from "../elements/icons/Unsplash";
import { ExternalLinkIcon, ChevronDownIcon } from "@heroicons/react/solid";
import {
  CameraIcon,
  RssIcon,
  UserGroupIcon,
  UserCircleIcon,
  CollectionIcon,
  ChartSquareBarIcon,
  MoonIcon,
  StatusOnlineIcon,
  InboxInIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 max-w-3xl pt-4 mx-auto bg-gray-900 bg-opacity-90">
      <div className="flex justify-between py-6 border-b-2 border-gray-800">
        <NextLink href="/">
          <span className="w-24 h-12 cursor-pointer -mt-9">
            <Raccoon />
          </span>
        </NextLink>

        <div className="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="inline-flex items-center justify-center p-2 bg-gray-700 rounded-md text-gray-50 hover:text-gray-900 hover:bg-gray-500 focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="hidden md:flex">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="inline-flex items-center ml-4 text-base font-medium text-gray-500 outline-none group hover:text-white focus:outline-none">
                  <span>Photography</span>
                  <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-500 group-hover:text-white" />
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
                    <div className="absolute z-50 mt-12 outline-none -ml-80">
                      <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 px-8 py-8 bg-white">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://jpvalery.photo"
                                target="_blank"
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <CameraIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-gray-900">
                                    Portfolio
                                    <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2 text-gray-700" />
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
                              <a
                                href="https://archive.jpvalery.photo"
                                target="_blank"
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <RssIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-gray-900">
                                    Photo Archive
                                    <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2 text-gray-700" />
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
                              <a
                                href="https://montrealphoto.club"
                                target="_blank"
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <UserGroupIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-gray-900">
                                    Montréal Photo Club
                                    <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2 text-gray-700" />
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
                              <a
                                href="https://unsplash.com/@jpvalery"
                                target="_blank"
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 w-6 h-6 text-indigo-800">
                                  <Unsplash />
                                </div>
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-gray-900">
                                    Unsplash
                                    <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2 text-gray-700" />
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    I share hundreds of photos for free on
                                    Unsplash
                                  </p>
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <Menu.Item>
                          {({ active }) => (
                            <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              <div className="flow-root w-full">
                                <a
                                  href="https://contact.jpvalery.me/photography"
                                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                                >
                                  <InboxInIcon className="flex-shrink-0 w-6 h-6 text-gray-400" />
                                  <span className="ml-3">
                                    Get in touch about my photography
                                  </span>
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
                <Menu.Button className="inline-flex items-center ml-4 text-base font-medium text-gray-500 outline-none group hover:text-white focus:outline-none">
                  <span>About</span>
                  <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-500 group-hover:text-white" />
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
                    <div className="absolute z-50 mt-12 outline-none -ml-96">
                      <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 px-8 py-8 bg-white">
                          <Menu.Item>
                            {({ active }) => (
                              <NextLink href="/about">
                                <span className="flex items-start p-3 -m-3 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <UserCircleIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
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
                                <span className="flex items-start p-3 -m-3 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <StatusOnlineIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
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
                                <span className="flex items-start p-3 -m-3 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <CollectionIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
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
                                <span className="flex items-start p-3 -m-3 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <ChartSquareBarIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
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
                                <span className="flex items-start p-3 -m-3 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <MoonIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
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

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://growthmontreal.com"
                                target="_blank"
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <span className="flex-shrink-0 w-6 h-6 text-2xl text-indigo-800">
                                  𝔊
                                </span>
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-gray-900">
                                    Advisorship & Consultancy
                                    <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2 text-gray-700" />
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Sustainable growth for early-stage SaaS
                                  </p>
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <Menu.Item>
                          {({ active }) => (
                            <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              <div className="flow-root w-full">
                                <a
                                  href="https://contact.jpvalery.me"
                                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                                >
                                  <InboxInIcon className="flex-shrink-0 w-6 h-6 text-gray-400" />
                                  <span className="ml-3">
                                    Get in touch about anything
                                  </span>
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
          <NextLink href="/writings">
            <span className="inline-flex items-center ml-4 text-base font-medium text-gray-500 outline-none group hover:text-white">
              Writings
            </span>
          </NextLink>
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
          <div
            ref={ref}
            className="absolute inset-x-0 p-2 transition origin-top-right transform top-6 md:hidden"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="relative p-5">
                <div className="absolute top-2 right-2">
                  <button
                    type="button"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="w-11/12">
                  <nav className="grid gap-y-8">
                    <a
                      href="https://jpvalery.photo"
                      target="_blank"
                      className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                    >
                      <CameraIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                      <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                        Portfolio
                        <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2 text-gray-700" />
                      </span>
                    </a>

                    <a
                      href="https://archive.jpvalery.photo"
                      target="_blank"
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      <RssIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                      <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                        Photo Archive
                        <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2 text-gray-700" />
                      </span>
                    </a>

                    <NextLink href="/about">
                      <span className="flex items-center p-3 -m-3 rounded-md cursor-pointer hover:bg-gray-50">
                        <UserCircleIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          /about
                        </span>
                      </span>
                    </NextLink>

                    <a
                      href="https://growthmontreal.com"
                      target="_blank"
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      <span className="text-2xl text-indigo-800">𝔊</span>
                      <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                        Advisorship/Consultancy
                        <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2 text-gray-700" />
                      </span>
                    </a>

                    <NextLink href="/now">
                      <span className="flex items-center p-3 -m-3 rounded-md cursor-pointer hover:bg-gray-50">
                        <StatusOnlineIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          /now
                        </span>
                      </span>
                    </NextLink>

                    <NextLink href="/stack">
                      <span className="flex items-center p-3 -m-3 rounded-md cursor-pointer hover:bg-gray-50">
                        <CollectionIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          /stack
                        </span>
                      </span>
                    </NextLink>

                    <NextLink href="/dashboard">
                      <span className="flex items-center p-3 -m-3 rounded-md cursor-pointer hover:bg-gray-50">
                        <ChartSquareBarIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          /dashboard
                        </span>
                      </span>
                    </NextLink>

                    <NextLink href="/cemetery">
                      <span className="flex items-center p-3 -m-3 rounded-md cursor-pointer hover:bg-gray-50">
                        <MoonIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          /cemetery
                        </span>
                      </span>
                    </NextLink>

                    <a href="https://contact.jpvalery.me">
                      <span className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                        <InboxInIcon className="flex-shrink-0 w-6 h-6 text-indigo-800" />
                        <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                          Get in touch
                          <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2 text-gray-700" />
                        </span>
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
