import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function MetricCard({ header, link, metric }) {
  return (
    <div className="metric-card overflow-hidden rounded-lg bg-stone-800 p-5 shadow">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center text-sm font-medium text-stone-200">
          {header}
          <ExternalLinkIcon className="ml-2 h-5 w-5" />
        </div>
      </a>
      <p className="mt-1 text-3xl font-semibold text-dashboard-600">
        {metric || "-"}
      </p>
    </div>
  );
}
