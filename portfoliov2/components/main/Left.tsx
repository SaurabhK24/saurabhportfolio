import React from "react";
import Nav from "../sub/Nav";
import Links from "../sub/Links";

const Left = () => {
    const LinkSquare02Icon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
            {...props}
        >
            <path
                d="M11.0991 3.00012C7.45013 3.00669 5.53932 3.09629 4.31817 4.31764C3.00034 5.63568 3.00034 7.75704 3.00034 11.9997C3.00034 16.2424 3.00034 18.3638 4.31817 19.6818C5.63599 20.9999 7.75701 20.9999 11.9991 20.9999C16.241 20.9999 18.3621 20.9999 19.6799 19.6818C20.901 18.4605 20.9906 16.5493 20.9972 12.8998"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.556 3.49612L11.0487 13.0586M20.556 3.49612C20.062 3.00151 16.7343 3.04761 16.0308 3.05762M20.556 3.49612C21.05 3.99074 21.0039 7.32273 20.9939 8.02714"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
                    Saurabh Khanal
                </div>
                <a
                    className="flex text-slate-200 group"
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <div className="font-medium tracking-tight text-slate-200 sm:text-xl text-nowrap mt-4">
                        Software Engineer @ Sparksoft
                        <span className="">
                            <LinkSquare02Icon className="inline h-5 w-5 ml-2 -mt-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-500 ease-in-out text-slate-200" />
                        </span>
                    </div>
                </a>

                <div className="mt-4 max-w-xs leading-normal">
                    Full stack developer building ai and aesthetic ui/ux
                </div>
                <div className="lg:mr-[70px] mt-4 md:mt-8 leading-relaxed">
                    <div className="mb-4">
                        I&apos;m an passionate software engineer with interests in
                        crafting aesthetic UI/UX and exploring ai and design.
                    </div>
                    <div className="mb-4">
                    I&apos;m currently exploring the intersection of large language models and financial time series modeling, 
                    deepening my machine learning expertise while working to integrate cutting-edge technologies into impactful projects.
                    Check out <a href="https://www.kaggle.com/competitions/jane-street-real-time-market-data-forecasting" 
                    className="text-blue-500 hover:text-blue-700 underline"
                    target="_blank" 
                    rel="noopener noreferrer">
                    this competition
                    </a> that I&apos;m working on!
                    </div>
                    <div>
                        I spend my free time hanging with friends and traveling.
                        I also enjoy playing basketball, weight lifting, and playing
                        video games.
                    </div>
                </div>
                <Nav />
            </div>
            <Links />
        </div>
    );
};

export default Left;
