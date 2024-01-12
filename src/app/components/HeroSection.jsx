"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const s3Url = "https://sauravportfoliobucket.s3.us-east-1.amazonaws.com/saurabh_khanal_resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQD5SZRlAJ0U%2B3rLIliv%2B6uh7pfTSe5hi3l14BifCVcN4wIhAL1rXaIYedB4GfM2FEo8OnWx408gkjPlc066cgJx80BhKvsCCHoQARoMNzIxNzA1NjU0MDY5IgwyOzCh3v1zrDD0oWoq2AILRPQhr0I8rCV%2BnMXXmQxUbWaCdNSsHJWV6qKT%2FtXWguQnUGk2hvXWzqGD7C%2BriiVn7K%2BN0kN2zYaawCH8HhWle%2FgaVrLe%2Bwesn6fd%2BfHPvh8Z6FlnLbHr6kyVGcuoCFbXicP%2FYuhXu%2FYsUMO%2B2LXCyrWFes9%2FjykF7Jzyw6sThBXiYeVOXWVM6OmkfhyaFpLSyrnHlZPfWmUk%2F8%2BTeBtY0qlygn5e078U2TLWU%2FTBBLzj%2BhDNsPC6E%2BCnG9U8X7S4gFmWdrQDkB1tmmDGge4yKtMX2JiG%2FwDUM71ynyQT7RbJoU11b0YDd9HlFHt7HyAzjs6fc3NWWaWMh0KFnxyFpn64P%2BYd0DsP9txibiO6qAhADNu03HJRS6lLSg9GgHrApfZOX5jQhBJTmCDk%2FnNIIC6nJF8wJ8EMo2l6LsqM7uwSvxceekiUuQLuNI5gUpygbW6qF9yqjjCgy9usBjqyAof4bJa5BhIQ6nBacdlpQNu86Y1%2BlSsxtrmNJjkaH%2Bb3G%2B3384CWDhDNK7GKcL9qPNbaH7qesq%2F0e%2BeNZ9vsLr4n9ea2wyqBt%2F7wKbwwUr%2BkAFmMN6Ubpq47nQMr2kMU5ak3ICIpJDO%2FhR%2Fu%2FawQNq6mkuMCH86bdbs%2BTWsIsAN17e5jALsBmd0r5crVEFTHgLbyqrqbcoQ6C8vW8IXZIbIq7f%2BC0jhjsWhtyX9Xo0vzBp1sg0hj8FaknPJFptqP9uVWtsU9pddaecayf2K9huGQryzNwIXuj8CaNvNrBmsNtp00PdhQ1BCHOcIZjNy7OkaIUk9kwN0%2FGm5wuLzsxAmIoWFOR4SDH2epCzMYgxynwaf4gPgcTefnASQpYyxpSZyQBU822UjWw%2FVm8k%2By%2BmGi2A%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240104T210456Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2QCICK42RQK7Y2ED%2F20240104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bfcb50420e0f3804995a520c2603a6db0dfec801e1ef519d878c72f421d5bb29";

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="gradient-text text-transparent animate-gradient">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Saurav",
                1000,
                "a SWE",
                1000,
                "a Trader",
                1000,
                "a Student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am currently a Junior full stack software engineer. I enjoy building new things, working out, and watching movies.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 hover:bg-slate-200 text-white font-medium animate-gradient"
            >
              Hire Me
            </Link>
            <Link
              href={s3Url}
              download="Saurav_CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-medium">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/memojitwo.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;