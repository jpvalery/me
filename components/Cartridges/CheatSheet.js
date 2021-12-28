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
    <div className="mt-12 overflow-hidden divide-y-4 divide-red-600 rounded-lg shadow">
      <div className="px-4 py-5 bg-stone-100 sm:px-6">
        <div className="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
          <div className="mt-4 ml-2">
            <h2 className="text-3xl font-bold leading-6 text-stone-900 font-cartridge">
              Cheat sheet
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-4 p-3 bg-stone-800 sm:p-4">
        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <GlobeIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-blue-500" />
          <span>Montréal, QC - Canada</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <BriefcaseIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-purple-700" />
          <span>Customer Success Manager @ Customer.io</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <TranslateIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-emerald-700" />
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
          <UserIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-yellow-500" />
          <span>He / Him / His</span>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <ThumbUpIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-green-700" />
          <ul className="flex flex-wrap gap-2">
            <li>Video games</li>
            <li>Photography</li>
            <li>Cooking</li>
            <li>Gardening</li>
            <li>Raccoons</li>
          </ul>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <ThumbDownIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-rose-700" />
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
