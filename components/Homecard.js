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
    <div className="mt-12 overflow-hidden divide-y divide-gray-600 rounded-lg shadow">
      <div className="px-4 py-5 bg-gray-500 sm:px-6">
        <div className="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
          <div className="mt-4 ml-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-16 h-16 rounded-full"
                  src="/static/jp-valery-avatar.webp"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold leading-6 text-gray-900">
                  Jp Valery
                </h2>
                <p className="my-2 text-sm text-gray-800">
                  <span className="font-semibold">@jpvalery</span> everywhere
                  that matters
                </p>
              </div>
            </div>
          </div>
          <div className="z-0 flex flex-shrink-0 mt-4 ml-4">
            <a
              href="mailto:contact@jpvalery.me"
              className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
            >
              <MailIcon className="w-5 h-5 mr-2 -ml-1 text-gray-400" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-4 px-4 py-5 bg-gray-800 md:grid-cols-1 lg:grid-cols-2 sm:p-6">
        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <GlobeIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300" />
          <span>Montréal, QC - Canada</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <BriefcaseIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300" />
          <span>Customer Success Manager @ Customer.io</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <TranslateIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300" />
          <span>Français, English, Español, HTML</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <UserIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300" />
          <span>He / Him / His</span>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <ThumbUpIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300" />
          <ul>
            <li>Video games</li>
            <li>Photography</li>
            <li>Cooking</li>
            <li>Gardening</li>
          </ul>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <ThumbDownIcon className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300" />
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
