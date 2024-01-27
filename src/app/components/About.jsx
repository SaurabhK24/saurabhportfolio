"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
          <h2 className="flex items-center justify-center text-sm mb-5 font-semibold text-zinc-900 dark:text-zinc-100">
            <span className="ml-3">Personal Interests</span>
          </h2>

          <div className="grid grid-cols-5 gap-8">
            {/* Tech Icons */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg"
              alt="Tech Icon 1"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="Tech Icon 2"
            />
            {/* Music Icons */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="Spotify"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              alt="Guitar"
            />
            {/* Sports Teams */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
              alt="AWS"
            />
            <img src="/images/tesla-motors-1.svg" alt="Tesla" />
            <img src="/images/philadelphia-eagles-2.svg" alt="Eagles" />
            <img src="/images/los-angeles-lakers-1.svg" alt="Lakers" />
            <img src="/images/washington-wizards-3.svg" alt="Wizards" />
            <img src="/images/spotify-2.svg" alt="Spotify" />

            <img src="/images/playstation-logo-colour.svg" alt="PS" />
            <img src="/images/ethereum-eth.svg" alt="ETH" />

            <img src="/images/thinkorswim.svg" alt="TOS" />
            <img src="/images/chatgpt-4.svg" alt="GPT" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          </div>
          <div></div>
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
