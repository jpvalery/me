import {
  GlobeIcon,
  TranslateIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  BriefcaseIcon,
  UserIcon,
} from "@heroicons/react/outline";

import GitHub from "../../elements/icons/Github";
import LinkedIn from "../../elements/icons/Linkedin";
import Twitter from "../../elements/icons/Twitter";
import Unsplash from "../../elements/icons/Unsplash";

export default function Social() {
  return (
    <div className="mt-12 divide-y-4 divide-orange-600 overflow-hidden rounded-lg shadow">
      <div className="bg-stone-100 px-4 py-5 sm:px-6">
        <div className="-mt-4 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="mt-4 ml-2">
            <h2 className="font-cartridge text-3xl font-bold leading-6 text-stone-800">
              Social
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-4 bg-stone-800 p-3 sm:p-4">
        <span className="flex items-center px-3 py-2 text-base font-medium text-white">
          <span className="font-bold">@jpvalery</span>&nbsp;everywhere that
          matters
        </span>

        <div className="mx-auto flex space-x-6">
          <a
            href="https://linkedin.com/in/jpvalery"
            className="h-6 w-6 text-stone-300 hover:text-stone-400"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedIn />
          </a>

          <a
            href="https://unsplash.com/@jpvalery"
            className="h-6 w-6 text-stone-300 hover:text-stone-400"
          >
            <span className="sr-only">Unsplash</span>
            <Unsplash />
          </a>

          <a
            href="https://github.com/jpvalery"
            className="h-6 w-6 text-stone-300 hover:text-stone-400"
          >
            <span className="sr-only">GitHub</span>
            <GitHub />
          </a>

          <a
            href="https://twitter.com/jpvalery"
            className="h-6 w-6 text-stone-300 hover:text-stone-400"
          >
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
}
