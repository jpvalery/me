import Homecard from "../components/Homecard";

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl font-extrabold tracking-tight text-white">
        Oh. Hi there!
      </h1>
      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Welcome to my lil' plot of land on the interwebs.
      </p>
      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        I grew tired of all those concepts of blog vs portfolio vs digital
        garden. Ugh.
      </p>
      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        I just wanted to claim a small corner of the Internet to host a few
        pages to talk about me, what I'm up to, and what I care about.
      </p>
      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Come in and stay awhile :)
      </p>
      <Homecard />
    </main>
  );
}
