import Tombstone from '../components/Tombstone';

export default function Now() {
  return (
    <div>
      <main>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          A cemetery of past projects
        </h1>
        <p className="mt-4">Everything dies one day. This is the cemetery of things I built and killed off at one point</p>
        <container className="mt-8 grid grid-cols-1 gap-6">
        <Tombstone title="Project title" years="2012" link="https://test.test" description="Blablabla" />
        <Tombstone title="Project title" years="2012" link="https://test.test" description="Blablabla" />
        <Tombstone title="Project title" years="2012" link="https://test.test" description="Blablabla" />
        <Tombstone title="Project title" years="2012" link="https://test.test" description="Blablabla" />
        <Tombstone title="Project title" years="2012" link="https://test.test" description="Blablabla" />
        </container>
      </main>
    </div>
  )
}
