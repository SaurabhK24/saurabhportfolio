import React from "react";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";

const Projects = () => {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        
      <div className="lg:col-span-1 lg:row-start-1 lg:mx-auto lg:max-w-lg lg:pr-4">
      <span className="text-base font-semibold leading-7 gradient-text text-transparent animate-gradient">
                My Projects
              </span>
          <p className="mt-6 text-xl leading-8 text-gray-300">
            Check out some of my personal projects I have delved into. I have a wide variety of interests but concentrate on topics such as Machine Learning and Full-Stack Development.
          </p>
        </div>
        
        <div className="lg:col-start-2 lg:row-start-1 lg:sticky top-4">
          <img
            className="w-[24rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[28.5rem]"
            src="/images/example.png"
            alt="Project example"
          />
        </div>




        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
              <ul role="list" className="border-l-4 border-blue-500 pl-4">
                <li className="flex flex-col gap-y-4 pb-8 border-b border-b-[#33353F] ">
                  <h3 className="text-lg font-semibold text-gray-100">
                    Find issues
                  </h3>
                  <p>
                    ESLint statically analyzes your code to quickly find problems.
                    ESLint is built into most text editors and you can run ESLint
                    as part of your continuous integration pipeline.
                  </p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Learn more →
                  </a>
                </li>
                {/* Repeat for other list items, ensuring each has similar spacing and border */}
                <li className="flex flex-col gap-y-4 pb-8 border-b border-b-[#33353F] mt-4">
                  <h3 className="text-lg font-semibold text-gray-100">
                    Fix problems automatically
                  </h3>
                  <p>
                    Many problems ESLint finds can be automatically fixed.
                    ESLint fixes are syntax-aware so you won't experience
                    errors introduced by traditional find-and-replace algorithms.
                  </p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Learn more →
                  </a>
                </li>
                <li className="flex flex-col gap-y-4 mt-4">
                  <h3 className="text-lg font-semibold text-gray-100">
                    Configure everything
                  </h3>
                  <p>
                    Preprocess code, use custom parsers, and write your own
                    rules that work alongside ESLint's built-in rules. Customize
                    ESLint to work exactly the way you need it for your project.
                  </p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Learn more →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
