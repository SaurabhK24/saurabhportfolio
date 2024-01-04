"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const s3Url = "https://sauravportbucket.s3.us-east-1.amazonaws.com/Saurabh_Khanal.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDT8N0CxWFSiDL4AJLjqk%2FEPy9wKk6Fq%2B1In47mS81v1wIhAJDjhxTP2c2r9u2GWLafaCWI1zPgmkijFht7iVqP1fFoKvsCCGwQARoMNzIxNzA1NjU0MDY5IgyCO8VmWyZlhAmRt%2BEq2AKkCdxCBhc6knv7VnQNDu8xHaDpPMAVFYoi0vmEyTQLCBpeUUL%2BN4vjJLWRHLakI4GYD9OzQtz31AUPfGqyiA3XxFww42OnkAOiYvr7fCcr61lYcT6tpJMV2XVitcQMfyzcY%2BCDVtJ6368DbfHNJ16fRSSkY%2FaLjg4E721tKaRSycbLGMConYRLMbTMGCFIyyFojjOdXExx7v63X7OEXiBWnKdLU9AQOTalV6mZWDuoNVpx5XM5UwPymkC2ljRz%2FVDK56csTJ3ZJnOD0IKQkVDbE24Rt6LU28SEJe6WUUbc5lV%2FAisSlXEQSLJ7aLuzQll08BKfiyCVOsoC%2BbZ%2Bb4KJQ01Gwh1o9RxFt6qpHBYnyIXqaSCUuOIFmPdjZnYj%2B1wR94iax%2BfBijytE3%2BqffdSSmyXBJdnJ5XKq1LWT%2BeGN%2BP0dfEIA7T2cEqeiav12sf04Hqi2LG1ADCEuNisBjqyAskN0qkxJcVdoN0P3F2S7lrmTdQWXznAkx%2B9mYAUitG7FENJSVaPykOz2cJCoeQg5lh2Cck09Igf3n5iASBFs28KsHT4euJ59KdVXrPKVg2PNCGcEn2Ols%2BphPDN5ES8G%2BPv4P%2F5M5TAc%2FPzd%2BkzwvwnUPQhrIOUzLhQjTJYpf0XpEIpPyCFDOg%2B4JjMm9uTZD1NzwfzRv2PpFDwebhH0DcUdEeicDDYnLg%2BF9eNHI8UD5JjnL2p1uGi4TPcyqCqcGKJsurSpaW91rjMCbzWnM7DGNY89PbB90GkL6iSeBcOMVLQfzDRARe0nVIN9qn12s6MHF%2F43yDkSeiHZBT1D%2BC7jHFwg1cDAEGdfarekB80wYxJNE5YdBGOXLSwxCuLJZQIb2juNIVy629L2BQ1tzYFjg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240104T030335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2QCICK42VKK7P4FH%2F20240104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=247a286c898dad17750687f5b874a7508caabff5f54c90b005aa1a124700adef";

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