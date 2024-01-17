import React from 'react';

const Timeline = () => {
  return (
    <div className="bg-gray-50 font-sans leading-normal text-gray-800">
      <div className="container mx-auto p-5">
        <div className="mb-4">
          <h2 className="text-4xl font-bold leading-tight text-center">My Experience</h2>
        </div>
        <ul className="timeline">
          <li className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-graduation-cap text-lg"></i>
            </div>
            <div className="timeline-content">
              <h3>Graduated Bootcamp</h3>
              <time>Miami, FL - 2019</time>
              <p>I graduated after 6 months of studying. I immediately found a job as a front-end developer.</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-briefcase text-lg"></i>
            </div>
            <div className="timeline-content text-right">
              <h3>Front-End Developer</h3>
              <time>Orlando, FL - 2019 - 2021</time>
              <p>I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-laptop-code text-lg"></i>
            </div>
            <div className="timeline-content">
              <h3>Full-Stack Developer</h3>
              <time>Houston, TX - 2021 - present</time>
              <p>I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
