import { ArchiveIcon, ExternalLinkIcon } from "@heroicons/react/outline";

export default function Tombstone({ title, years, link, description }) {
  return (
    <div className="divide-y divide-stone-200 overflow-hidden rounded-lg shadow">
      <div className="bg-cemetery-800 px-4 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between text-stone-50">
            <ArchiveIcon className="mr-2 h-8 w-8" />
            <h2 className="text-2xl font-bold leading-6">{title}</h2>
            <span className="ml-2 pt-1 text-sm font-medium leading-6">
              ({years || "-"})
            </span>
          </div>
          <div>
            <a
              href={link || "#"}
              className="relative ml-3 flex items-center justify-between rounded-md border border-stone-300 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-300 focus:outline-none"
            >
              <span>Visit</span>
              <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 p-6 text-stone-200">{description || "-"}</div>
    </div>
  );
}
