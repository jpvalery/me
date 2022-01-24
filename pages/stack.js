import {
  DeviceMobileIcon,
  ChipIcon,
  CameraIcon,
  CubeTransparentIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";
import { NextSeo } from "next-seo";

export default function Stack() {
  return (
    <>
      <NextSeo
        title="Stack"
        description="Some select items/services that I use and that made a positive impact in my work/life/craft"
        openGraph={{
          title: "Stack",
          description:
            "Some select items/services that I use and that made a positive impact in my work/life/craft",
          images: [
            {
              url:
                "https://og.jpvalery.me/**Stack**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main>
        <h1 className="font-cartridge text-5xl text-white">What am I using?</h1>
        <p className="mt-4 text-stone-50">
          Here's some select items that I use and that made a positive impact in
          my work/life/craft
        </p>
        <container className="grid-cols1 mt-4 grid gap-8 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-stone-800 p-5 shadow">
            <h3 className="flex items-center text-lg font-semibold text-stack-500">
              <DeviceMobileIcon className="mr-2 h-6 w-6" />
              Everyday tech
            </h3>
            <div className="mt-4">
              <span className="prose text-stone-50">
                <ul>
                  <li>iPhone 13 mini</li>
                  <li>iPad Pro 11" M1</li>
                  <li>Apple Watch Series 3</li>
                  <li>Airpods</li>
                  <li>Steelseries Arctis 3</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="metric-card overflow-hidden rounded-lg bg-stone-800 p-5 shadow">
            <h3 className="flex items-center text-lg font-semibold text-stack-500">
              <BriefcaseIcon className="mr-2 h-6 w-6" />
              Office - Work
            </h3>
            <div className="mt-4">
              <span className="prose text-stone-50">
                <ul>
                  <li>MBA M1 13&quot; 2021</li>
                  <li>HP Z27 monitor</li>
                  <li>Elgato Stream Deck</li>
                  <li>Elgato Wave 3</li>
                  <li>Elgato Facecam</li>
                  <li>Apple Keyboard 2014</li>
                  <li>Magic Trackpad</li>
                  <li>Tresanti Standing Desk</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="metric-card overflow-hidden rounded-lg bg-stone-800 p-5 shadow">
            <h3 className="flex items-center text-lg font-semibold text-stack-500">
              <DesktopComputerIcon className="mr-2 h-6 w-6" />
              Office - Personal
            </h3>
            <div className="mt-4">
              <span className="prose text-stone-50">
                <ul>
                  <li>iMac 27&quot; 2017</li>
                  <li>Asus 19&quot;</li>
                  <li>Lacie HDD</li>
                  <li>Magic Keyboard</li>
                  <li>Magic Trackpad</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="metric-card overflow-hidden rounded-lg bg-stone-800 p-5 shadow">
            <h3 className="flex items-center text-lg font-semibold text-stack-500">
              <ChipIcon className="mr-2 h-6 w-6" />
              Software
            </h3>
            <div className="mt-4">
              <span className="prose text-stone-50">
                <ul>
                  <li>Firefox (diehard)</li>
                  <li>1Password</li>
                  <li>Backblaze</li>
                  <li>VSCode</li>
                  <li>Starship (terminal)</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="metric-card overflow-hidden rounded-lg bg-stone-800 p-5 shadow">
            <h3 className="flex items-center text-lg font-semibold text-stack-500">
              <CameraIcon className="mr-2 h-6 w-6" />
              Photography
            </h3>
            <div className="mt-4">
              <span className="prose text-stone-50">
                <ul>
                  <li>Canon EOS 6D</li>
                  <li>Olympus OMD-M10-MkII</li>
                  <li>Olympus E-PL1 (infrared)</li>
                  <li>Mamiya RB67 (film)</li>
                  <li>DJI Mavic Air 2</li>
                  <li>DJI Phantom 3 Pro</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="metric-card overflow-hidden rounded-lg bg-stone-800 p-5 shadow">
            <h3 className="flex items-center text-lg font-semibold text-stack-500">
              <CubeTransparentIcon className="mr-2 h-6 w-6" />
              Gaming
            </h3>
            <div className="mt-4">
              <span className="prose text-stone-50">
                <ul>
                  <li>Xbox Series X</li>
                  <li>Steelseries Arctis 3</li>
                  <li>Nintendo Switch</li>
                  <li>PlayStation 3</li>
                  <li>RetroPie</li>
                </ul>
              </span>
            </div>
          </div>
        </container>
      </main>
    </>
  );
}
