import CheatSheet from "../components/Cartridges/CheatSheet";
import Social from "../components/Cartridges/Social";
import Cartridge from "../components/Cartridges/Cartridge";
import { NextSeo } from "next-seo";
import { Tab } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Oh. Hi there!"
        description="Polymath based in Montréal, QC. This is my lil plot of land on the interwebs"
        openGraph={{
          title: "Jp Valery 🦝",
          description:
            "Polymath based in Montréal, QC. This is my lil plot of land on the interwebs",
          images: [
            {
              url:
                "https://og.jpvalery.me/**Jp%20Valery**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-8 p-8">
          <div className="min-w-max">
            <img
              className="w-24 h-24 rounded-full md:w-40 md:h-40"
              src="/static/jp-valery-avatar.webp"
              alt=""
            />
          </div>

          <div>
            <h1 className="hidden text-white md:inline text-7xl font-cartridge">
              Oh. Hi there!
            </h1>
            <h1 className="inline text-4xl text-white md:hidden font-cartridge">
              Oh.
              <br />
              Hi there!
            </h1>
          </div>
        </div>

        <div>
          <p className="mt-3 text-base text-stone-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Welcome to my lil' plot of land on the interwebs.
          </p>
          <p className="mt-3 text-base text-stone-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            I grew tired of all those concepts of blog vs portfolio vs digital
            garden.
          </p>
          <p className="mt-3 text-base italic text-stone-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Ugh.
          </p>
          <p className="mt-3 text-base text-stone-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            I just wanted to claim a small corner of the Internet to host a few
            pages to talk about me, what I'm up to, and what I care about.
          </p>
          <p className="mt-3 text-base text-stone-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Come in and stay awhile :)
          </p>
        </div>
        <div className="h-screen py-4">
          <Tab.Group>
            <div className="grid items-center h-full grid-flow-row md:grid-flow-col">
              <div className="w-1/3">
                <Tab.List className="grid justify-start grid-flow-row gap-2 mx-auto md:-rotate-90 w-72">
                  <Tab
                    className={({ selected }) =>
                      selected ? "translate-x-6" : "hover:translate-x-3"
                    }
                  >
                    <Cartridge title="Cheat Sheet" color="red" />
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      selected ? "translate-x-6" : "hover:translate-x-3"
                    }
                  >
                    <Cartridge title="Social" color="orange" />
                  </Tab>
                  <Tab disabled
                    className={({ selected }) =>
                      selected ? "translate-x-6" : "hover:translate-x-3"
                    }
                  >
                    <Cartridge title="TBD" color="yellow" />
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <CheatSheet />
                </Tab.Panel>
                <Tab.Panel>
                  <Social />
                </Tab.Panel>
                <Tab.Panel></Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </main>
    </>
  );
}
