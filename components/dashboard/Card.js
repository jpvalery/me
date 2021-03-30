import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function MetricCard({ header, link, metric }) {
  return (
    <div className="p-5 overflow-hidden bg-gray-800 rounded-lg shadow metric-card">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center text-sm font-medium text-gray-300">
          {header}
          <ExternalLinkIcon className="w-5 h-5 ml-2" />
        </div>
      </a>
      <p className="mt-1 text-3xl font-semibold text-white">{metric || "-"}</p>
    </div>
  );
}
