import React, { useState } from 'react';
import './experience.css';

import University_of_Bridgeport from '../img/University_of_Bridgeport.png';
import suraaga_logo from "../img/suraaga_logo.png";
import envision from "../img/envision.png"
import rubus_logo from "../img/rubus_logo.png"


const experiences = [
  {
    id: 1,
    title: "Graduate Teaching Assistant Bridgeport Unversity-School of Computer Science & Engineering",
    company: "@Bridgeport Unversity",
    website: "https://www.bridgeport.edu/",
    logo: University_of_Bridgeport, 
    duration: "Sept 2024 - Present",
    type: "Remote",
    description: [
      "Mentored 50+ students in Natural Language Processing (NLP) Large Language Models (LLMs), improving comprehension and project implementation.",
" Conducted lab sessions and guided real-world project applications, assisting in an 25% increase in student project completion rates. Collaborated with faculty on LLM research initiatives. "],
    techStack: [
      {name: 'python', badge: 'https://img.shields.io/badge/python-%2335495e.svg?style=for-the-badge&logo=python&logoColor=%234FC08D'},
      {name: 'numpy', badge: 'https://img.shields.io/badge/numpy-%23E0234E.svg?style=for-the-badge&logo=numpy&logoColor=white'},
      {name: 'pytorch', badge: 'https://img.shields.io/badge/pytorch-%EE4C2C.svg?style=for-the-badge&logo=pytorch&logoColor=white'},
      // {name: 'Docker', badge: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'},
    ],
  },
  {
    id: 2,
    title: "Software Developer, E3",
    company: "@Rubus Digital Inc",
    website: "https://www.rubusdigital.com/",
    logo: rubus_logo, 
    duration: "April 2023 - December 2023",
    type: "On-site",
    description: [
      "Engineered scalable web applications for industrial process management, improving system efficiency by 30%.",
                    "Integrated API integrations for real-time data monitoring, optimizing backend response times by 40%.",
                   "Enhanced UI performance by 30% through optimized state management in React.js Redux."
                   ],
    techStack: [
      {name: 'ReactJS', badge: "https://img.shields.io/badge/ReactJS-E23237?style=for-the-badge&logo=react&logoColor=white"},
      {name: 'redux', badge: "https://img.shields.io/badge/redux-2C2255?style=for-the-badge&logo=redux&logoColor=white"},
       {name: 'Antdesign', badge: "https://img.shields.io/badge/Antdesign-6DB33F?style=for-the-badge&logo=antdesign&logoColor=white"},
      {name: 'apacheecharts', badge: "https://img.shields.io/badge/apacheecharts-DC382D?style=for-the-badge&logo=apacheecharts&logoColor=white"},
    ],
  },
  {
    id: 3,
    title: "Software Developer, E2",
    company: "@Envision Enterprise Solutions Pvt Ltd",
    website: "https://www.envisionesl.com/",
    logo: envision, 
    duration: "Jul 2020 - Mar 2023",
    type: "On-site",
    description: [
      "Designed and deployed full-stack enterprise solutions using Java Spring Boot, React.js, and PostgreSQL.",
"Led application optimization, reducing database query times by 50% and enhancing scalability.",
"Integrated Dockerized microservices, reducing deployment downtime by 30%."  ],
    techStack: [
      {name: 'ReactJS', badge: "https://img.shields.io/badge/ReactJS-E23237?style=for-the-badge&logo=react&logoColor=white"},
      {name: 'redux', badge: "https://img.shields.io/badge/redux-2C2255?style=for-the-badge&logo=redux&logoColor=white"},
       {name: 'Antdesign', badge: "https://img.shields.io/badge/Antdesign-6DB33F?style=for-the-badge&logo=antdesign&logoColor=white"},
      {name: 'apacheecharts', badge: "https://img.shields.io/badge/apacheecharts-DC382D?style=for-the-badge&logo=apacheecharts&logoColor=white"},
      { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
      { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
    
    ],
  },
  {
    id: 4,
    title: " Associate Software Developer",
    company: "@Suraaga Technologies Pvt Ltd",
    website: "https://suraaga.beyondscale.tech/",
    logo: suraaga_logo, 
    duration: "May 2019 - Jun 2020",
    type: "On-site",
    description: [
      "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐢𝐧𝐠 𝐚𝐧𝐝 𝐢𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐢𝐧𝐠 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐥𝐢𝐭𝐞𝐫𝐚𝐜𝐲 𝐰𝐨𝐫𝐤𝐬𝐡𝐨𝐩𝐬 for 50+ Syracuse residents, aimed at reducing the racial wealth gap through improved access to digital tools, workforce development, and STEM education.",
      "𝐂𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐧𝐠 𝐚𝐧𝐝 𝐚𝐧𝐚𝐥𝐲𝐳𝐢𝐧𝐠 𝐩𝐫𝐞- 𝐚𝐧𝐝 𝐩𝐨𝐬𝐭-𝐰𝐨𝐫𝐤𝐬𝐡𝐨𝐩 𝐬𝐮𝐫𝐯𝐞𝐲 𝐝𝐚𝐭𝐚 for 50 participants using Qualtrics to assess the impact of digital literacy interventions on self-efficacy and job readiness",
      "𝐒𝐮𝐩𝐩𝐨𝐫𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐜𝐫𝐞𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐚 𝐬𝐮𝐬𝐭𝐚𝐢𝐧𝐚𝐛𝐥𝐞 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐨𝐮𝐭𝐫𝐞𝐚𝐜𝐡 𝐦𝐨𝐝𝐞𝐥, impacting underserved households by increasing access to technology and information, particularly in public housing.",
    ],
    techStack: [
      { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
      {name: 'ReactJS', badge: "https://img.shields.io/badge/ReactJS-E23237?style=for-the-badge&logo=react&logoColor=white"},
      {name: 'redux', badge: "https://img.shields.io/badge/redux-2C2255?style=for-the-badge&logo=redux&logoColor=white"},
       {name: 'Antdesign', badge: "https://img.shields.io/badge/Antdesign-6DB33F?style=for-the-badge&logo=antdesign&logoColor=white"},
       { name: 'Express.js', badge: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' },
       { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
       { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
       { name: 'postgresql', badge: 'https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white' },
          ],
  }

  // Add more experiences here as objects in the array
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <>
      <p style={{margin:'3%',fontSize:'40px', fontFamily: 'Montserrat'}}>Experience</p>
      <div className='experience'>
        <div className='sidebar'>
          <ul>
            {experiences.map(experience => (
              <li key={experience.id} onClick={() => handleExperienceClick(experience)} className={selectedExperience?.id === experience.id ? 'active' : ''}>
                {experience.title}, {experience.company.split('@')[1]}
              </li>
            ))}
          </ul>
        </div>
        <div className='details'>
          {selectedExperience && (
            <div className='card1'>
              <p className='title1'>
                {selectedExperience.title} <span className='company1'>
                  <a href={selectedExperience.website} target='_blank' rel='noopener noreferrer'>
                  {selectedExperience.company}
                    <img src={selectedExperience.logo} alt={`${selectedExperience.company.split('@')[1]} logo`} className='company-logo' />
                    
                  </a>
                </span>
              </p>
              <p className='duration'>{selectedExperience.duration} | {selectedExperience.type}</p>
              <ul>
                {selectedExperience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className='tech-stack' >
                {selectedExperience.techStack.map((tech, index) => (
                  <img style={{ marginRight: '5px', padding: '5px' }} key={index} src={tech.badge} alt={tech.name} className='tech-badge' />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Experience;
