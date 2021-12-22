import Homecard from "../components/Homecard";
import { NextSeo } from "next-seo";

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
              Oh.<br />Hi there!
            </h1>
          </div>
        </div>

        <div>
          <p className="mt-3 text-base text-stone-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Welcome to my lil' plot of land on the interwebs.
          </p>
          <p className="mt-3 text-base text-stone-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            I grew tired of all those concepts of blog vs portfolio vs digital
            garden. Ugh.
          </p>
          <p className="mt-3 text-base text-stone-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            I just wanted to claim a small corner of the Internet to host a few
            pages to talk about me, what I'm up to, and what I care about.
          </p>
          <p className="mt-3 text-base text-stone-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Come in and stay awhile :)
          </p>
        </div>

        <Homecard />
      </main>
    </>
  );
}
