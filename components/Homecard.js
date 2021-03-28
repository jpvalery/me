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
              <svg
                className="w-5 h-5 mr-2 -ml-1 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-4 px-4 py-5 bg-gray-800 md:grid-cols-1 lg:grid-cols-2 sm:p-6">
        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <svg
            className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Montréal, QC - Canada</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <svg
            className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>Customer Success Manager @ Customer.io</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <svg
            className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <span>Français, English, Español, HTML</span>
        </span>

        <span className="flex items-center px-3 py-2 text-sm font-medium text-white">
          <svg
            className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>He / Him / His</span>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <svg
            className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <ul>
            <li>Video games</li>
            <li>Photography</li>
            <li>Cooking</li>
            <li>Gardening</li>
          </ul>
        </span>

        <span className="flex items-start px-3 py-2 text-sm font-medium text-white">
          <svg
            className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
            />
          </svg>
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
