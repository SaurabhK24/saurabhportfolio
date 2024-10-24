import autolabz from "../public/autolabs.png";
import alphalens from "../public/alphalens.png";
import langmodel from "../public/languagemodel.png";
import georgetown from "../public/GTown.png";

import sparksoft from "../public/sparksoft.png";
import headstarter from "../public/headstarter.png";

export const experienceData = [
    {
        position: "Full Stack Engineer",
        company: "SparkSoft",
        date: "June 2023 - Present",
        description:
            "Managed team of developers designing and developing the club site and an algorithmic trading backtesting platform with real time stock and crypto data.",
        tags: ["Node.js", "Angular.js", "Typescript", "Java SpringBoot", "AWS"],
        link: "https://sparksoftcorp.com/",
        imageUrl: sparksoft,
        alt: "Wat Street Logo",
    },
    {
        position: "Software Engineer Intern",
        company: "Headstarter",
        date: "June 2022 - Aug 2022",
        description:
            "Designed and Developed  web apps to production, built serverless APIs with AWS Lambda, and optimized backend performance, improving API response times for open-source projects.",
        tags: ["Node.js", "Angular.js", "Typescript", "Java SpringBoot", "AWS"],
        link: "https://www.linkedin.com/company/headstarterai/",
        imageUrl: headstarter,
        alt: "Wat Street Logo",
    },
    {
        position: "ML Undergraduate Researcher",
        company: "GeorgeTown University",
        date: "May 2021 - Aug 2021",
        description:
            "As an ML Undergraduate Researcher at Georgetown University, I built and optimized machine learning models, boosting prediction accuracy to 90%. I improved precision by 15% through gradient boosting and processed 1TB+ of netCDF data for reliable outcomes.",
        tags: ["Gradient Boosted Regression", "Random Forest", "Machine Learning"],
        link: "#",
        imageUrl: georgetown,
        alt: "GeorgeTown Logo",
    },
] as const;

export const projectsData = [
    {
        title: "AutoLabz",
        description:
            "A LLM powered car search engine to find your dream car in minutes.",
        tags: ["Next.js", "Python", "FastAPI", "LLMs", "GPT4o", "Pinecone"],
        imageUrl: autolabz,
        link: "https://github.com/orgs/AutoLabz/repositories",
        isLink: true,
        alt: "Autolabz Image",
        achievement: "",
        hasAchievement: false,
    },
    {
        title: "Market Data Prediction Model",
        description:
            "Competing in Jane Streets Real Time Market Forcasting competition. This is a machine learning model predicting future market data.",
        tags: ["Python", "Pytorch", "Machine Leanring"],
        imageUrl: alphalens,
        link: "https://github.com/SaurabhK24/AlphaLens",
        isLink: false,
        alt: "Financial Modeling",
        achievement: "",
        hasAchievement: false,
    },
    {
        title: "Character Level Language Model",
        description: 
            "Autoregressive character-level language model using PyTorch, featuring advanced architectures including Transformers with multi-head self-attention",
        tags: ["Python", "Neural Networks"],
        imageUrl: langmodel,
        link: "#",
        isLink: true,
        alt: "Click Clack Project Image",
        achievement: "",
        hasAchievement: false,
    },
] as const;
