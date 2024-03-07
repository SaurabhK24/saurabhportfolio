"use client"
import React from "react";
import ReactMarkdown from "react-markdown";
import { experiences } from "../data";
import {
  BriefcaseIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import Image from 'next/image';

function Experiences() {
  return (
    <section id="experiences">
      <div>
        <div className="px-5 mx-auto text-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
            Experiences
          </h1>
        </div>
        <ExperienceList experiences={experiences} />
      </div>
    </section>
  );
}

function ExperienceList({ experiences }) {
  return (
    <section className="mx-auto px-5 sm:px-20">
      <div className="w-full sm:w-9/10 md:w-4/5 lg:w-2/3 mx-auto text-left border-t-trasparent border-b-transparent border-l-transparent border-r-transparent">
        {experiences.map((experience) => (
          <Transition
            key={experience.company}
            appear={true}
            show={true}
            enter="transition ease-in duration-200 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <IndividualExperience experience={experience} />
          </Transition>
        ))}
      </div>
    </section>
  );
}

function IndividualExperience({ experience }) {
  const { logo, company, position, time, description, skills } = experience;
  return (
    <div className="my-5 shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl w-full border-4 border-gray-700 opacity-80 hover:opacity-90">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-black-base hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <ExperienceHeader {...{ logo, company, position, time }} />
              <ChevronIcon open={open} />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              <ExperienceDescription description={description} />
              {skills && <ExperienceSkills skills={skills} />}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

function ExperienceHeader({ logo, company, position, time }) {
  return (
    <div className="flex">
      <div>
        {logo && (
          <Image
            src={logo}
            alt={`${company} logo`}
            className="w-auto h-8 pr-2 mr-2 mt-2"
          />
        )}
      </div>
      <div>
        <div className="flex items-center">
          <h3 className="title-font text-xl text-white mb-2">{company}</h3>
        </div>
        <div>
          <p className="text-white mb-2">
            <span className="font-semibold">{position}</span> •{" "}
            <span className="font-light">{time}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ open }) {
  return (
    <div>
      {open ? (
        <ChevronUpIcon className="h-6 w-6" />
      ) : (
        <ChevronDownIcon className="h-6 w-6" />
      )}
    </div>
  );
}

function ExperienceDescription({ description }) {
  return (
    <ul>
      {description.map((bullet, index) => (
        <li
          key={`${bullet}-${index}`}
          className="font-light p-1 m-1 leading-relaxed text-slate-200"
        >
          •{" "}
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a className="text-green-400 underline" {...props} />
              ),
              p: ({ node, ...props }) => <span {...props} />,
            }}
          >
            {bullet}
          </ReactMarkdown>
        </li>
      ))}
    </ul>
  );
}

function ExperienceSkills({ skills }) {
  return skills.map((skill, index) => (
    <p
      key={`${skill}-${index}`}
      className="p-1 m-1 text-sm text-white inline-flex font-light border-1 focus:outline-none bg-gray-600 hover:text-white rounded"
    >
      {skill}
    </p>
  ));
}

export default Experiences;