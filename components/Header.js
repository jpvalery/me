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

function Mlink(props) {
  let { href, children, ...rest } = props;
  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
}

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 mx-auto max-w-3xl bg-stone-900 bg-opacity-90 pt-4">
      <div className="flex justify-between border-b border-stone-400 py-6">
        <NextLink href="/">
          <span className="-mt-9 h-12 w-24 cursor-pointer">
            <Raccoon />
          </span>
        </NextLink>

        <div className="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="inline-flex items-center justify-center p-2 text-stone-50 hover:text-amber-500 focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-8 w-8" />
          </button>
        </div>

        <div className="hidden md:flex">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="group ml-4 inline-flex items-center text-base font-medium text-stone-300 outline-none hover:text-stone-50 focus:outline-none">
                  <span>Photography</span>
                  <ChevronDownIcon className="ml-2 h-5 w-5 text-stone-400 group-hover:text-stone-50" />
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-50 transform"
                  enterFrom="opacity-0 scale-90"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-50 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-90"
                >
                  <Menu.Items static>
                    <div className="absolute z-50 mt-12 -ml-80 outline-none">
                      <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-zinc-900 px-8 py-8">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://jpvalery.photo"
                                target="_blank"
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-800"
                              >
                                <CameraIcon className="h-8 w-8 flex-shrink-0 text-portfolio" />
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-stone-100">
                                    Portfolio
                                    <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
                                  </p>
                                  <p className="mt-1 text-sm text-stone-400">
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
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-800"
                              >
                                <RssIcon className="h-8 w-8 flex-shrink-0 text-archive-500" />
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-stone-100">
                                    Photo Archive
                                    <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
                                  </p>
                                  <p className="mt-1 text-sm text-stone-400">
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
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-800"
                              >
                                <UserGroupIcon className="h-8 w-8 flex-shrink-0 text-club-500" />
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-stone-100">
                                    Montréal Photo Club
                                    <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
                                  </p>
                                  <p className="mt-1 text-sm text-stone-400">
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
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-800"
                              >
                                <div className="h-8 w-8 flex-shrink-0 text-unsplash-500">
                                  <Unsplash />
                                </div>
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-stone-100">
                                    Unsplash
                                    <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
                                  </p>
                                  <p className="mt-1 text-sm text-stone-400">
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
                            <div className="space-y-6 bg-stone-100 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              <div className="flow-root w-full">
                                <a
                                  href="https://contact.jpvalery.me/photography"
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-stone-900 hover:bg-zinc-200"
                                >
                                  <InboxInIcon className="h-8 w-8 flex-shrink-0" />
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
                <Menu.Button className="group ml-4 inline-flex items-center text-base font-medium text-stone-300 outline-none hover:text-stone-50 focus:outline-none">
                  <span>About</span>
                  <ChevronDownIcon className="ml-2 h-5 w-5 text-stone-400 group-hover:text-stone-50" />
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-50 transform"
                  enterFrom="opacity-0 scale-90"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-50transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-90"
                >
                  <Menu.Items static>
                    <div className="absolute z-50 mt-12 -ml-96 outline-none">
                      <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-zinc-900 px-8 py-8">
                          <Menu.Item>
                            {({ active }) => (
                              <Mlink href="/about">
                                <span className="-m-3 flex cursor-pointer items-start rounded-lg p-3 hover:bg-zinc-800">
                                  <UserCircleIcon className="h-8 w-8 flex-shrink-0 text-about-500" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-stone-100">
                                      /about
                                    </p>
                                    <p className="mt-1 text-sm text-stone-400">
                                      Who the heck am I?
                                    </p>
                                  </div>
                                </span>
                              </Mlink>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Mlink href="/now">
                                <span className="-m-3 flex cursor-pointer items-start rounded-lg p-3 hover:bg-zinc-800">
                                  <StatusOnlineIcon className="h-8 w-8 flex-shrink-0 text-now-500" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-stone-100">
                                      /now
                                    </p>
                                    <p className="mt-1 text-sm text-stone-400">
                                      What am I up to lately?
                                    </p>
                                  </div>
                                </span>
                              </Mlink>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Mlink href="/stack">
                                <span className="-m-3 flex cursor-pointer items-start rounded-lg p-3 hover:bg-zinc-800">
                                  <CollectionIcon className="h-8 w-8 flex-shrink-0 text-stack-500" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-stone-100">
                                      /stack
                                    </p>
                                    <p className="mt-1 text-sm text-stone-400">
                                      What am I using (only really cool stuff)
                                    </p>
                                  </div>
                                </span>
                              </Mlink>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Mlink href="/dashboard">
                                <span className="-m-3 flex cursor-pointer items-start rounded-lg p-3 hover:bg-zinc-800">
                                  <ChartSquareBarIcon className="h-8 w-8 flex-shrink-0 text-dashboard-500" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-stone-100">
                                      /dashboard
                                    </p>
                                    <p className="mt-1 text-sm text-stone-400">
                                      Some personal metrics
                                    </p>
                                  </div>
                                </span>
                              </Mlink>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Mlink href="/cemetery">
                                <span className="-m-3 flex cursor-pointer items-start rounded-lg p-3 hover:bg-zinc-800">
                                  <MoonIcon className="h-8 w-8 flex-shrink-0 text-cemetery-500" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-stone-100">
                                      /cemetery
                                    </p>
                                    <p className="mt-1 text-sm text-stone-400">
                                      Deprecated/abandoned projects
                                    </p>
                                  </div>
                                </span>
                              </Mlink>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://growthmontreal.com"
                                target="_blank"
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-800"
                              >
                                <span className="h-8 w-8 flex-shrink-0 text-4xl text-growth-500">
                                  𝔊
                                </span>
                                <div className="ml-4">
                                  <p className="inline-flex text-base font-medium text-stone-100">
                                    Advisorship & Consultancy
                                    <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
                                  </p>
                                  <p className="mt-1 text-sm text-stone-400">
                                    Sustainable growth for early-stage SaaS
                                  </p>
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <Menu.Item>
                          {({ active }) => (
                            <div className="space-y-6 bg-stone-100 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              <div className="flow-root w-full">
                                <a
                                  href="https://contact.jpvalery.me"
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-stone-900 hover:bg-zinc-200"
                                >
                                  <InboxInIcon className="h-8 w-8 flex-shrink-0" />
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
            <span className="group ml-4 inline-flex cursor-pointer items-center text-base font-medium text-stone-300 outline-none hover:text-stone-50">
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
        leave="transition ease-in duration-50 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="absolute inset-x-0 top-6 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative p-5">
                <div className="absolute top-2 right-2">
                  <button
                    type="button"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-amber-600 focus:outline-none"
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-8 w-8" />
                  </button>
                </div>

                <div className="w-11/12">
                  <nav className="grid gap-y-8">
                    <a
                      href="https://jpvalery.photo"
                      target="_blank"
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-800"
                    >
                      <CameraIcon className="h-8 w-8 flex-shrink-0 text-portfolio" />
                      <span className="ml-3 inline-flex text-base font-medium text-stone-100">
                        Portfolio
                        <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
                      </span>
                    </a>

                    <a
                      href="https://archive.jpvalery.photo"
                      target="_blank"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-zinc-800"
                    >
                      <RssIcon className="h-8 w-8 flex-shrink-0 text-archive-500" />
                      <span className="ml-3 inline-flex text-base font-medium text-stone-100">
                        Photo Archive
                        <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
                      </span>
                    </a>

                    <NextLink href="/about">
                      <span className="-m-3 flex cursor-pointer items-center rounded-md p-3 hover:bg-zinc-800">
                        <UserCircleIcon className="h-8 w-8 flex-shrink-0 text-about-500" />
                        <span className="ml-3 text-base font-medium text-stone-100">
                          /about
                        </span>
                      </span>
                    </NextLink>

                    <a
                      href="https://growthmontreal.com"
                      target="_blank"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-zinc-800"
                    >
                      <span className="text-2xl text-growth-500">𝔊</span>
                      <span className="ml-3 inline-flex text-base font-medium text-stone-100">
                        Advisorship/Consultancy
                        <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
                      </span>
                    </a>

                    <Mlink href="/now">
                      <span className="-m-3 flex cursor-pointer items-center rounded-md p-3 hover:bg-zinc-800">
                        <StatusOnlineIcon className="h-8 w-8 flex-shrink-0 text-now-500" />
                        <span className="ml-3 text-base font-medium text-stone-100">
                          /now
                        </span>
                      </span>
                    </Mlink>

                    <Mlink href="/stack">
                      <span className="-m-3 flex cursor-pointer items-center rounded-md p-3 hover:bg-zinc-800">
                        <CollectionIcon className="h-8 w-8 flex-shrink-0 text-stack-500" />
                        <span className="ml-3 text-base font-medium text-stone-100">
                          /stack
                        </span>
                      </span>
                    </Mlink>

                    <Mlink href="/dashboard">
                      <span className="-m-3 flex cursor-pointer items-center rounded-md p-3 hover:bg-zinc-800">
                        <ChartSquareBarIcon className="h-8 w-8 flex-shrink-0 text-dashboard-500" />
                        <span className="ml-3 text-base font-medium text-stone-100">
                          /dashboard
                        </span>
                      </span>
                    </Mlink>

                    <Mlink href="/cemetery">
                      <span className="-m-3 flex cursor-pointer items-center rounded-md p-3 hover:bg-zinc-800">
                        <MoonIcon className="h-8 w-8 flex-shrink-0 text-cemetery-500" />
                        <span className="ml-3 text-base font-medium text-stone-100">
                          /cemetery
                        </span>
                      </span>
                    </Mlink>

                    <a href="https://contact.jpvalery.me">
                      <span className="-m-3 flex items-center rounded-md p-3 hover:bg-zinc-800">
                        <InboxInIcon className="h-8 w-8 flex-shrink-0 text-stone-200" />
                        <span className="ml-3 inline-flex text-base font-medium text-stone-100">
                          Get in touch
                          <ExternalLinkIcon className="mt-1 ml-2 h-4 w-4 text-stone-200" />
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
