import { ArchiveIcon, ExternalLinkIcon } from "@heroicons/react/outline";

export default function Tombstone({ title, years, link, description }) {
  return (
    <div className="overflow-hidden divide-y rounded-lg shadow divide-stone-200">
      <div className="px-4 py-5 bg-stone-500 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between text-stone-900">
            <ArchiveIcon className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold leading-6">{title}</h2>
            <span className="pt-1 ml-2 text-xs font-medium leading-6">
              ({years || "-"})
            </span>
          </div>
          <div>
            <a
              href={link || "#"}
              className="relative flex items-center justify-between px-4 py-2 ml-3 text-sm font-medium border rounded-md shadow-sm bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-200 focus:outline-none"
            >
              <span>Visit</span>
              <ExternalLinkIcon className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6 bg-stone-800 text-stone-200">{description || "-"}</div>
    </div>
  );
}
