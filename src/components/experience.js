import './experience.css'

const Experience = () => {
    return ( 
        <div className='experience'>
            <p style={{margin:'3%',fontSize:'40px'}}>Experience</p>
            <div className='work'> 
                <span className='des'>Software Developer </span>
                <span className='company'>@Rubus Digital Inc</span>
                <p>April 2023 - December 2023 | Full Time</p>
                <ul className='content'>
                    <li>Engineered scalable web applications for industrial process management, improving system efficiency by 30%.</li>
                    <li> Integrated API integrations for real-time data monitoring, optimizing backend response times by 40%.</li>
                    <li>Enhanced UI performance by 30% through optimized state management in React.js Redux.</li>
                     </ul>
                <p className='techStack'>  
                        <img
                            src="https://img.shields.io/badge/ReactJS-E23237?style=for-the-badge&logo=react&logoColor=white"
                            alt="ReactJS"
                        />
                         <img
                            src="https://img.shields.io/badge/redux-2C2255?style=for-the-badge&logo=redux&logoColor=white"
                            alt="redux"
                        />
                         <img
                            src="https://img.shields.io/badge/Antdesign-6DB33F?style=for-the-badge&logo=antdesign&logoColor=white"
                            alt="Antdesign"
                        />
                         <img
                            src="https://img.shields.io/badge/apacheecharts-DC382D?style=for-the-badge&logo=apacheecharts&logoColor=white"
                            alt="apacheecharts"
                        />
                          <img
                            src="https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white"
                            alt="Nodejs"
                        />
                        <img
                            src="https://img.shields.io/badge/angular-0052CC?style=for-the-badge&logo=angular&logoColor=white"
                            alt="Angular"
                        />
                          <img
                            src= 'https://img.shields.io/badge/springboot-F37626?style=for-the-badge&logo=springboot&logoColor=white'
                            alt="SpringBoot"
                        />
                       
                        {/* <img
                            src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
                            alt="Docker"
                        /> */}
 
                </p>
            </div>
        </div>
    );}



export default Experience;