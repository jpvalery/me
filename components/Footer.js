import GitHub from "../elements/icons/Github";
import LinkedIn from "../elements/icons/Linkedin";
import Twitter from "../elements/icons/Twitter";
import Unsplash from "../elements/icons/Unsplash";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-3xl py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://linkedin.com/in/jpvalery"
            className="h-6 w-6 text-stone-300 hover:text-stone-400"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedIn />
          </a>

          <a
            href="https://unsplash.com/@jpvalery"
            className="h-6 w-6 text-stone-300 hover:text-stone-400"
          >
            <span className="sr-only">Unsplash</span>
            <Unsplash />
          </a>

          <a
            href="https://github.com/jpvalery"
            className="h-6 w-6 text-stone-300 hover:text-stone-400"
          >
            <span className="sr-only">GitHub</span>
            <GitHub />
          </a>

          <a
            href="https://twitter.com/jpvalery"
            className="h-6 w-6 text-stone-300 hover:text-stone-400"
          >
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-stone-300">
            &copy; 1992-2022 Jp Valery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
