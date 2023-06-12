import { Icon } from "@jpvalery/mistral";
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
      <main className="mx-auto">
        <div className="grid grid-flow-row items-center justify-items-center gap-8 p-4 md:grid-flow-col md:justify-between md:gap-4">
          <div className="order-2 mx-auto grid w-3/5 grid-flow-row gap-4 md:order-1 md:w-full">
            <h1 className="border-b border-stone-50 pb-4 font-cartridge text-6xl text-white">
              Oh, hello there!
            </h1>
            <div className="grid grid-flow-row gap-2 text-sm text-stone-50">
              <div className="flex items-center gap-4">
                <span className="h-6 w-6 flex-shrink-0 text-blue-500 drop-shadow-[0_0_0.2rem_#DBEAFE60]">
                  <Icon icon="GlobeAmericasIcon" stroke={"1"} />
                </span>
                <span>Montréal, QC - Canada</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="h-6 w-6 flex-shrink-0 text-purple-500 drop-shadow-[0_0_0.2rem_#DBEAFE60]">
                  <Icon icon="BriefcaseIcon" stroke={"1"} />
                </span>
                <span>Success Team Manager @ Customer.io</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="h-6 w-6 flex-shrink-0 text-emerald-500 drop-shadow-[0_0_0.2rem_#D1FAE560]">
                  <Icon icon="LanguageIcon" stroke={"1"} />
                </span>
                <div className="inline-flex">
                  <ul className="flex flex-wrap gap-2">
                    <li>Français</li>
                    <li>English</li>
                    <li>Español</li>
                  </ul>
                  <span className="mx-2">|</span>
                  <ul className="flex flex-wrap gap-2">
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="h-6 w-6 flex-shrink-0 text-amber-500 drop-shadow-[0_0_0.2rem_#FEF3C760]">
                  <Icon icon="UserIcon" stroke={"1"} />
                </span>
                <span>He / Him / His</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="h-6 w-6 flex-shrink-0 text-green-500 drop-shadow-[0_0_0.2rem_#DCFEC760]">
                  <Icon icon="HandThumbUpIcon" stroke={"1"} />
                </span>
                <ul className="flex flex-wrap gap-2">
                  <li>Video games</li>
                  <li>Photography</li>
                  <li>Cooking</li>
                  <li>Gardening</li>
                  <li>Raccoons</li>
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <span className="h-6 w-6 flex-shrink-0 text-rose-500 drop-shadow-[0_0_0.2rem_#FFE4E660]">
                  <Icon icon="HandThumbDownIcon" stroke={"1"} />
                </span>
                <ul className="flex flex-wrap gap-2">
                  <li>Bullshit</li>
                  <li>Endives</li>
                  <li>Crowds</li>
                  <li>Making lists</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 min-w-max pl-4 md:order-2">
            <img
              className="h-40 w-40 rounded-full md:h-60 md:w-60"
              src="/static/jp-valery-avatar.webp"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
}
