import Link from 'next/link';

import Unsplash from '../components/dashboard/Unsplash';
import Betaseries from '../components/dashboard/Betaseries';

export default function Now() {
  return (
    <div>
      <main>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          Jp in numbers
        </h1>
        <Unsplash />
        <Betaseries />
      </main>
    </div>
  )
}
