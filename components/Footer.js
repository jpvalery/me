import GitHub from "../elements/icons/Github";
import LinkedIn from "../elements/icons/Linkedin";
import Twitter from "../elements/icons/Twitter";
import Unsplash from "../elements/icons/Unsplash";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-3xl py-12 mx-auto md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://linkedin.com/in/jpvalery"
            className="w-6 h-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedIn />
          </a>

          <a
            href="https://unsplash.com/@jpvalery"
            className="w-6 h-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Unsplash</span>
            <Unsplash />
          </a>

          <a
            href="https://github.com/jpvalery"
            className="w-6 h-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <GitHub />
          </a>

          <a
            href="https://twitter.com/jpvalery"
            className="w-6 h-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-gray-500">
            &copy; 1992-2021 Jp Valery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
