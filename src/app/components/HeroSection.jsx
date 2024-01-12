"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const s3Url = "https://auravportfoliobucket.s3.us-east-1.amazonaws.com/saurabh_khanal_resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIF6GA7T0CfrWgD8R64kj6lJArUJzewK1ZZKu2xqDSI8nAiAG8Y2hcCBvzEEVQvZJV7MVrJvAR%2F2UH8Fbviwvw%2Bt%2F%2BSrkAgg9EAEaDDcyMTcwNTY1NDA2OSIMP1TYoVDf3mHH%2BNlOKsECQd%2FlBi6PyalhT6gQGCZVcuOAU%2B7YLN%2BfAPnGhPs6qgizflMRmIbVnMQMOnD2RDfUAtIsAkWVqOUzB94Rbl3OPGAmkp1KZRv4Ioya7f5Wf%2B3dFg1WkC5V%2FDxuYzWyUVZJyIfJisVJRthJylTDM5TmjqEZAG1jD0lGojnfpX3sVIkzKr759g6GmiuSwWgSEEYz%2FdzUtf7S2NiDuzQr3AEEOfA50VlVqWBF5qz8bfNhoqKSiZUghcuf5zUnNjIOCFuWTFBdpAaVVmy8g1netbRcQlRwQ8Efs636TxiqYsQvAyV5tC2ofo1Fe1MfoynXuz6kNm7KHHH4U7C7mOUbGAHLtqRncQPcPfJhq5fJpa%2FFchLR6TbH90k5JgWZ%2FHUvUD5A%2Bu3aZQVVEXKKX7sQZVbtAt60ZPqIkAxQ6cdxF0sc%2FKOhMMH8gq0GOrQCoE4uWSqeQOM0CwohNB2kZYt%2Ftzo1AsshRz744DRsXRvcWRD1bnyEgC88n6oIma3sMcLndaXhMS2NVdGE7jNO374SIrtZWg%2B7bafYEPrhTbbQDfofz6FGKd40kRRB2eMhQZJW0oJ7J9Lsbb06Zp6V49ND6FKgZT2aWsS3ngLV0jCYeOAsyyejpQbnjdKWiq47GEVFTzaWRY4J1C7GbXDMSrcdaPa9vWfeWHsLsr66BfM2TZ234gNRrCGDStyquh6guVi%2BiXSZzW%2FfhwvzXOt%2BmEJ%2Bs3GLotMjbq2nsG4dXaUwGSOMQpd1rBCDY7heixBUv7eL0FO8bXEh1EbBdrLg2lLplnjvS9%2FufU6X9cd4fD6%2BrHA%2Fipk0onzB3XBHd%2FkF5U6asWwLJVHP4xBJu0v%2BvEl3%2FOY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240112T042143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2QCICK42RL5MVZNM%2F20240112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65a1fc00d8c5aa0aa2b92e854f7d76061358404fce99b2cc669d0da45e931e93";

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