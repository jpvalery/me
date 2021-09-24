import {
  DeviceMobileIcon,
  ChipIcon,
  CameraIcon,
  CubeTransparentIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";

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
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          What am I using?
        </h1>
        <p className="mt-4">
          Here's some select items that I use and that made a positive impact in
          my work/life/craft
        </p>
        <container className="grid gap-8 mt-4 grid-cols1 sm:grid-cols-2">
          <div className="p-5 overflow-hidden bg-gray-800 rounded-lg shadow">
            <h3 className="flex items-center text-lg font-semibold text-white">
              <DeviceMobileIcon className="w-6 h-6 mr-2" />
              Everyday tech
            </h3>
            <div className="mt-4">
              <span className="prose text-gray-300">
                <ul>
                  <li>iPhone SE 2020</li>
                  <li>Apple Watch Series 3</li>
                  <li>Airpods</li>
                  <li>Steelseries Arctis 3</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="p-5 overflow-hidden bg-gray-800 rounded-lg shadow metric-card">
            <h3 className="flex items-center text-lg font-semibold text-white">
              <ChipIcon className="w-6 h-6 mr-2" />
              Software
            </h3>
            <div className="mt-4">
              <span className="prose text-gray-300">
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

          <div className="p-5 overflow-hidden bg-gray-800 rounded-lg shadow metric-card">
            <h3 className="flex items-center text-lg font-semibold text-white">
              <CameraIcon className="w-6 h-6 mr-2" />
              Photography
            </h3>
            <div className="mt-4">
              <span className="prose text-gray-300">
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

          <div className="p-5 overflow-hidden bg-gray-800 rounded-lg shadow metric-card">
            <h3 className="flex items-center text-lg font-semibold text-white">
              <CubeTransparentIcon className="w-6 h-6 mr-2" />
              Gaming
            </h3>
            <div className="mt-4">
              <span className="prose text-gray-300">
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

          <div className="p-5 overflow-hidden bg-gray-800 rounded-lg shadow metric-card">
            <h3 className="flex items-center text-lg font-semibold text-white">
              <BriefcaseIcon className="w-6 h-6 mr-2" />
              Office - Work
            </h3>
            <div className="mt-4">
              <span className="prose text-gray-300">
                <ul>
                  <li>MBP M1 13&quot; 2020</li>
                  <li>HP Z27 monitor</li>
                  <li>Apple Keyboard 2014</li>
                  <li>Magic Mouse</li>
                  <li>XL Mouse Pad</li>
                  <li>Tresanti Standing Desk</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="p-5 overflow-hidden bg-gray-800 rounded-lg shadow metric-card">
            <h3 className="flex items-center text-lg font-semibold text-white">
              <DesktopComputerIcon className="w-6 h-6 mr-2" />
              Office - Personal
            </h3>
            <div className="mt-4">
              <span className="prose text-gray-300">
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
        </container>
      </main>
    </>
  );
}
