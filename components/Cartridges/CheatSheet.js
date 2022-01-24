import {
  GlobeIcon,
  TranslateIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  BriefcaseIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function CheatSheet() {
  return (
    <div className="mt-12 divide-y-4 divide-red-600 overflow-hidden rounded-lg shadow">
      <div className="bg-stone-100 px-4 py-5 sm:px-6">
        <div className="-mt-4 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="mt-4 ml-2">
            <h2 className="font-cartridge text-3xl font-bold leading-6 text-stone-900">
              Cheat sheet
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-4 bg-stone-800 p-3 sm:p-4">
        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <GlobeIcon className="mr-3 -ml-1 h-6 w-6 flex-shrink-0 text-blue-500" />
          <span>Montréal, QC - Canada</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <BriefcaseIcon className="mr-3 -ml-1 h-6 w-6 flex-shrink-0 text-purple-700" />
          <span>Customer Success Manager @ Customer.io</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <TranslateIcon className="mr-3 -ml-1 h-6 w-6 flex-shrink-0 text-emerald-700" />
          <div>
            <ul className="flex flex-wrap gap-2">
              <li>Français</li>
              <li>English</li>
              <li>Español</li>
            </ul>
            <ul className="flex flex-wrap gap-2">
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <UserIcon className="mr-3 -ml-1 h-6 w-6 flex-shrink-0 text-yellow-500" />
          <span>He / Him / His</span>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <ThumbUpIcon className="mr-3 -ml-1 h-6 w-6 flex-shrink-0 text-green-700" />
          <ul className="flex flex-wrap gap-2">
            <li>Video games</li>
            <li>Photography</li>
            <li>Cooking</li>
            <li>Gardening</li>
            <li>Raccoons</li>
          </ul>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <ThumbDownIcon className="mr-3 -ml-1 h-6 w-6 flex-shrink-0 text-rose-700" />
          <ul className="flex flex-wrap gap-2">
            <li>Bullshit</li>
            <li>Endives</li>
            <li>Crowds</li>
            <li>Making lists</li>
          </ul>
        </span>
      </div>
    </div>
  );
}
