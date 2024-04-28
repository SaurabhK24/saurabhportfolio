export const education = [
    {
      school: "George Mason University",
      logo: "/images/masonlogo.jpg",
      degree: "Bachelors of Science",
      degreeAbbreviation: "B.S.",
      major: "Computer Science",
      coursework:
        "Data Structures & Algorithms, Software Development, Machine Learning, Operating Systems, Computer Architecture, Cybersecurity, Discrete Mathematics, Linear Algebra, Probability, Statistics, Calculus, & Physics",
    },
  ];
  
  export const experiences = [
    {
      company: "Paradyme - Contractor at C3 AI",
      logo: "/images/paradyme_logo.png",
      position: "Junior ML/AI Engineer",
      location: "Tysons, VA",
      time: "Incoming May 2024",
      description: [],
      skills: [],
    },
    {
      company: "Sparksoft",
      logo: "/images/sparksoft.png",
      position: "Junior Software Engineer",
      location: "Columbia, MD",
      time: "June 2023 – May 2024",
      description: [
        "Spearheaded transition from manual database process to an automated GitHub-integrated pipeline which cut resolution time for database backup-related tickets by 50% and yielding accelerated delivery on EPS team.",
        "Implemented and managed a robust deployment pipeline for front-end and back-end microservices (File Manager), resulting in a 50% decrease in deployment time.",
        "Utilized Angular, Node.js, Jenkins, Splunk, GitLab, to optimize project performance, maniging 80% of change requests on backlog & increased turnaround rate to end users.",
        "Deployed on AWS cloud infrastructure (IAM, EC2, S3, ECS & EKS, Lambda) and DynamoDB."
      ],
      skills: [
        "Angular",
        "Javascript",
        "Node.js",
        "Jenkins",
        "AWS",
        "DynamoDB",
        "CI/CD",
        "Nginx",
        "Splunk"
      ],
    },
    {
      company: "Headstarter",
      logo: "/images/headstarter.png",
      position: "Software Engineering Intern",
      location: "Remote",
      time: "May 2022 – August 2022",
      description: [
        "Implemented web apps to production using React, AWS, and Rest APIs to open-source projects",
        "Built serverless APIs using AWS Lambda with 99% uptime and real-time DynamoDB data entry tables",
        "Improved resume parsing web application API response time’s by 20% by reducing redundant database queries and caching reused data"
      ],
      skills: ["Python", "AWS", "Tableau", "Excel"],
    },
    {
      company: "GeorgeTown University",
      logo: "/images/GTown.png",
      position: "Machine Learning Undergraduate Researcher",
      location: "GeorgeTown, DC",
      time: "May 2021 – Aug 2021",
      description: [
        "Engineered peak vegetation prediction with ML algorithms (random forest, gradient boosting), resulting in an exceptional 90% correlation with actual greenness levels/historic data.",
        "Improved model’s precision yield by over 15% by helping data transition from random forest model to gradient boosted model",
        "Overlooked extensive netCDF data, effectively handling 1TB+ datasets, a critical contribution to reliable predictions.",
      ],
      skills: [
        "Python",
        "Scikit Learn",
        "Jupyter Notebooks",
        "Pandas",
        "Numpy"
      ],
    },
  ];
  
  export const projects = [
    {
      title: "DefibRadar",
      subtitle: "React Native, Django, PostgreSQL, AWS, Supabase, SQL",
      description:
        "DefibRadar is a mobile application that  that navigates users to AEDs by scraping public data via API in the backend.",
      image: "/images/defibradar.png",
      link: "https://github.com/vjz3qz/defib-radar",
    },
    {
      title: "Leftover Link",
      subtitle: "React.js, Node.js, Express.js, MongoDB, AWS, NoSQL",
      description:
        "Leftover Link is a full-stack application that aims to bridge the gap between local restaurants and homeless shelters, facilitating the donation of unused food before it goes to waste.",
      image: "/images/leftoverlink.png",
      link: "https://github.com/vjz3qz/leftover-link",
    },
    {
      title: "Brick Breaker",
      subtitle: "Java, Gradle, JUnit",
      description:
        "A Java-based GUI application replicating the classic Brick Breaker game, incorporating object oriented design and real-life physics principles.",
      image: "/images/brickbreaker.png",
      link: "https://github.com/vjz3qz/brick-breaker",
    },
    {
      title: "RateMyUVACourse",
      subtitle: "Java, Gradle, SQLite",
      description:
        "A secure Java-based Course Review Software System with a three-layer architecture, featuring user authentication and database persistence with SQLite.",
      image: "/images/coursereview.png",
      link: "https://github.com/vjz3qz/course-review",
    },
    {
      title: "FitLog",
      subtitle: "React.js, Node.js, Express.js, MongoDB, AWS",
      description:
        "Created a workout catalog/tracker enabling users to create, track, and add new workouts.",
      image: "/images/fitlog.png",
      link: "https://github.com/sanyashetty/workout-app",
    },
    {
      title: "Wordle",
      subtitle: "Java, Gradle, SQLite",
      description:
        "Developed a CLI-based Wordle clone. Followed TDD, achieving 100% unit test coverage with exception handling.",
      image: "/images/wordle.png",
      link: "https://github.com/vjz3qz/wordle",
    },
    {
      title: "Socket Chat",
      subtitle: "C, Unix/Linux, Socket Programming",
      description:
        "Socket Chat is a basic chat program written in C that enables real-time communication between two users over a network. It uses BSD-sockets to establish connections.",
      image: "/images/socketchat.png",
      link: "https://github.com/vjz3qz/socket-chat",
    },
  ];
  
  export const skills = {
    languages: ["Python", "JavaScript", "Java", "SQL"],
    concepts: [
      "Object-Oriented Programming",
      "Machine Learning",
      "Web/Mobile Development",
      "CI/CD",
    ],
    frameworks: ["React/React Native", "Node.js/Express.js", "Flask", "Django"],
    devops: ["Git", "Docker", "AWS", "Linux/Unix"],
    databases: ["MongoDB", "PostgreSQL", "SQLite"],
    ml: [
      "LangChain",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Reinforcement Learning",
    ],
  };