import {
  GlobeIcon,
  TranslateIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  BriefcaseIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { MailIcon } from "@heroicons/react/solid";

export default function Homecard() {
  return (
    <div className="mt-12 overflow-hidden divide-y rounded-lg shadow divide-stone-600">
      <div className="px-4 py-5 bg-amber-900 sm:px-6">
        <div className="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
              <div className="mt-4 ml-2">
                <h2 className="text-3xl font-bold leading-6 text-stone-300 font-cartridge">
                  Cheat sheet
                </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-4 px-4 py-5 bg-stone-800 md:grid-cols-1 lg:grid-cols-2 sm:p-6">
        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <GlobeIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-stone-50" />
          <span>Montréal, QC - Canada</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <BriefcaseIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-stone-50" />
          <span>Customer Success Manager<br />@ Customer.io</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <TranslateIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-stone-50" />
          <span>Français, English, Español, HTML, JavaScript, CSS</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <UserIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-stone-50" />
          <span>He / Him / His</span>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <ThumbUpIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-stone-50" />
          <ul>
            <li>Video games</li>
            <li>Photography</li>
            <li>Cooking</li>
            <li>Gardening</li>
          </ul>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <ThumbDownIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-stone-50" />
          <ul>
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
