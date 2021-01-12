export default function Tombstone({ title, years, link, description }) {
  return (
    <div className="overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="bg-gray-50 px-4 py-5 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            <h2 className="text-xl leading-6 font-bold text-gray-900">
              {title}
            </h2>
            <span className="text-xs ml-2 pt-1 font-medium text-gray-500 leading-6">
              ({years || "-"})
            </span>
          </div>
          <div>
            <a
              href={link || "#"}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              <span>Visit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 ml-2"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="px-8 py-4">{description || "-"}</div>
    </div>
  );
}
