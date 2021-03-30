import { ArchiveIcon, ExternalLinkIcon } from "@heroicons/react/outline";

export default function Tombstone({ title, years, link, description }) {
  return (
    <div className="overflow-hidden divide-y divide-gray-200 rounded-lg shadow">
      <div className="px-4 py-5 bg-gray-500 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between text-gray-900">
            <ArchiveIcon className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold leading-6">{title}</h2>
            <span className="pt-1 ml-2 text-xs font-medium leading-6 text-gray-800">
              ({years || "-"})
            </span>
          </div>
          <div>
            <a
              href={link || "#"}
              className="relative flex items-center justify-between px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
            >
              <span>Visit</span>
              <ExternalLinkIcon className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-800">{description || "-"}</div>
    </div>
  );
}
