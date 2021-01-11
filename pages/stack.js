export default function Stack() {
  return (
    <div>
      <main>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          What am I using?
        </h1>
        <p className="mt-4">Here's some select items that I use and that made a positive impact in my work/life/craft</p>
        <container className="mt-4 grid grid-cols1 sm:grid-cols-2 gap-8">
          <div className="bg-white overflow-hidden shadow rounded-lg p-5">
              <h3 className="flex items-center text-lg font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
                Everyday tech
              </h3>
              <div className="mt-4">
            <span className="prose">
              <ul>
              <li>iPhone SE 2020</li>
              <li>Apple Watch Series 3</li>
              <li>Airpods</li>
              <li>Steelseries Arctis 3</li>
              </ul>
            </span>
            </div>
          </div>

          <div className="metric-card bg-white overflow-hidden shadow rounded-lg p-5">
              <h3 className="flex items-center text-lg font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
                Software
              </h3>
              <div className="mt-4">
            <span className="prose">
            <ul>
            <li>Firefox (diehard)</li>
            <li>1Password</li>
            <li>Backblaze</li>
            <li>Atom</li>
            <li>Starship (terminal)</li>
            </ul>
            </span>
            </div>
          </div>

          <div className="metric-card bg-white overflow-hidden shadow rounded-lg p-5">
              <h3 className="flex items-center text-lg font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
                Photography
              </h3>
              <div className="mt-4">
            <span className="prose">
            <ul>
            <li>Canon EOS 6D</li>
            <li>Olympus OMD-M10-MkII</li>
            <li>Olympus E-PL1 (infrared)</li>
            <li>Mamiya RB67 (film)</li>
            <li>DJI Mavic Air 2</li>
            <li>DJI Phantom 3 Pro</li>
            </ul>
            </span>
            </div>
          </div>

          <div className="metric-card bg-white overflow-hidden shadow rounded-lg p-5">
              <h3 className="flex items-center text-lg font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
                Gaming
              </h3>
            <div className="mt-4">
            <span className="prose">
            <ul>
            <li>Xbox Series X</li>
            <li>Steelseries Arctis 3</li>
            <li>Nintendo Switch</li>
            <li>PlayStation 3</li>
            <li>RetroPie</li>
            </ul>
            </span>
            </div>
          </div>

          <div className="metric-card bg-white overflow-hidden shadow rounded-lg p-5">
              <h3 className="flex items-center text-lg font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
                Office - Work
              </h3>
              <div className="mt-4">
            <span className="prose">
            <ul>
            <li>MBP 13&quot; 2019</li>
            <li>Dell 24&quot; monitor</li>
            <li>Apple Keyboard 2014</li>
            <li>Magic Mouse</li>
            <li>XL Mouse Pad</li>
            <li>Tresanti Standing Desk</li>
            </ul>
            </span>
            </div>
          </div>

          <div className="metric-card bg-white overflow-hidden shadow rounded-lg p-5">
              <h3 className="flex items-center text-lg font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
                Office - Personal
              </h3>
              <div className="mt-4">
            <span className="prose">
            <ul>
            <li>iMac 27&quot; 2017</li>
            <li>Asus 19&quot;</li>
            <li>Lacie HDD</li>
            <li>Magic Keyboard</li>
            <li>Magic Trackpad</li>
            </ul>
            </span>
            </div>
          </div>
        </container>
      </main>
    </div>
  )
}
