export default function Tombstone({ title, years, link, description }) {
  return (
    <div className="overflow-hidden rounded-lg shadow divide-y divide-gray-200">
      <div className="px-4 py-5 bg-gray-500 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            <h2 className="text-xl font-bold leading-6">{title}</h2>
            <span className="pt-1 ml-2 text-xs font-medium text-gray-800 leading-6">
              ({years || "-"})
            </span>
          </div>
          <div>
            <a
              href={link || "#"}
              className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm rounded-md hover:bg-gray-50 focus:outline-none"
            >
              <span>Visit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-800">{description || "-"}</div>
    </div>
  );
}
