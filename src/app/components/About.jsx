"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Express</li>
        <li>SQL</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.S in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Solutions Architect Associate</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
          <h2 className="flex items-center justify-center text-sm mb-5 font-semibold text-zinc-900 dark:text-zinc-100">
            <span className="gradient-text text-transparent animate-gradient ml-3">
              Personal Interests
            </span>
          </h2>

          <div className="grid grid-cols-5 gap-8">
            {/* Tech Icons */}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg"
              alt="Java Icon"
              layout="responsive"
              width={100} // Original aspect ratio width
              height={100} // Original aspect ratio height
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="Tech Icon 2"
              layout="responsive"
              width={100} // Original aspect ratio width
              height={100} // Original aspect ratio height
            />
            {/* Music Icons */}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="Spotify"
              layout="responsive"
              width={100} // Original aspect ratio width
              height={100} // Original aspect ratio height
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              alt="Guitar"
              layout="responsive"
              width={100} // Original aspect ratio width
              height={100} // Original aspect ratio height
            />
            {/* Sports Teams */}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
              alt="AWS"
              layout="responsive"
              width={100} // Original aspect ratio width
              height={100} // Original aspect ratio height
            />
            <Image
              src="/images/tesla-motors-1.svg"
              alt="Tesla"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/images/philadelphia-eagles-2.svg"
              alt="Eagles"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/images/los-angeles-lakers-1.svg"
              alt="Lakers"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/images/washington-wizards-3.svg"
              alt="Wizards"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/images/spotify-2.svg"
              alt="Spotify"
              layout="responsive"
              width={100}
              height={100}
            />

            <Image
              src="/images/playstation-logo-colour.svg"
              alt="PS"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/images/ethereum-eth.svg"
              alt="ETH"
              layout="responsive"
              width={100}
              height={100}
            />

            <Image
              src="/images/thinkorswim.svg"
              alt="TOS"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/images/chatgpt-4.svg"
              alt="GPT"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div>
            <a
              className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-100 font-medium text-zinc-900 hover:bg-zinc-200 active:bg-zinc-200 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
              href="#"
            >
              <span className="text-white font-medium">
                Contact Me
              </span>
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I&apos;m a{" "}
            <span className="gradient-text text-transparent animate-gradient">
              Junior Software Engineer
            </span>{" "}
            with a passion for crafting engaging and dynamic web applications.
            My expertise spans both frontend and backend technologies, including
            JavaScript, React, Node.js, Express, SQL, HTML, CSS, and Git. As an
            enthusiastic learner, I&apos;m diving into the realms of Machine
            Learning and Data Science to broaden my skill set. Beyond coding,
            I&apos;m a devoted fan of basketball and football, particularly
            cheering for the Eagles. Fly Eagles Fly!
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
