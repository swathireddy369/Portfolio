import React from 'react';
import { personalData } from './Utils/data/personal-data';
import "../../CSS/Layout.css"
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { FaTwitterSquare } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';
import { MdDownload } from 'react-icons/md';

function Layout() {
    return (
        <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
            {/* <Image
            src="/hero.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute -top-[98px] -z-10"
                  /> */}
            <image
                src="/hero.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute -top-[98px] -z-10"
            />
            {/* <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('/hero.svg')`, width: "100%", height: "100%" }}
                /> */}

            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
                {/* left hand side code part */}
               <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-black md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
           Hello,<br />
                        This is {' '}
                        <span className="gradient-name bg-clip-text text-transparent">
                            {personalData.name}
                            {` , I'm a Professional `}
                            <span className="gradient-designation bg-clip-text text-transparent">
                                {personalData.designation}
                            </span>
                        </span>
                        .
                    </h1>

                    <div className="my-12 flex items-center gap-5">
                        <Link href={personalData.linkedIn} target='_blank' className='transition-all text-[#0a66c2] hover:scale-125 duration-300' >
                            <BsLinkedin size={30} />
                        </Link>
                        <Link href={personalData.github} target='_blank' className=' text-[#171515] hover:scale-125 duration-300' >
                            <BsGithub size={30} />
                        </Link>
                        <Link href={personalData.leetcode} target='_blank' className=' text-[#FFA116] hover:scale-125 duration-300' >
                            <SiLeetcode size={30} />
                        </Link>
                        <Link href={personalData.twitter} target='_blank' className=' text-[#1DA1F2] hover:scale-125 duration-300' >
                            <FaTwitterSquare size={30} />
                        </Link>
                        {/* <Link href={personalData.} target='_blank'className=' text-[#171515] hover:scale-125 duration-300' >
                        <BsGithub size={30}/>
                        </Link> */}
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link href="#contact" className="bg-gradient-name-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                            <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#FC1500] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3 hover:bg-blue-500">
                                <span>Contact me</span>
                                <RiContactsFill size={16} />
                            </button>
                        </Link>
                        <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#046a38] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
                        >
                            <span>Get Resume</span>
                            <MdDownload size={16} />
                        </Link>
                    </div>
                </div>

                {/* Right hand side code part */}
                <div className="order-1 lg:order-2 bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg">
                    <div className="flex flex-row">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                    </div>
                    <div className="px-4 lg:px-8 py-5">
                        <div className="flex flex-row space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                            <div className="h-3 w-3 rounded-full bg-[#23950A]"></div>
                        </div>
                    </div>
                    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                        <code className="font-mono text-xs md:text-sm lg:text-base">
                            <div className="blink">
                                <span className="mr-2 text-pink-500">const</span>
                                <span className="mr-2 text-white">coder</span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                <span className="text-gray-400">{`'`}</span>
                                <span className="text-amber-300">Neha Nooka</span>
                                <span className="text-gray-400">{`',`}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">skills:</span>
                                <span className="text-gray-400">{`['`}</span>
                                <span className="text-amber-300">React</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Python</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">C#</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Express</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Javascript</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">MySql</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Node.js</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Docker</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">AWS</span>
                                <span className="text-gray-400">{"'],"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                                <span className="text-orange-400">function</span>
                                <span className="text-gray-400">{'() {'}</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                                <span className="text-gray-400">{`(`}</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                <span className="mr-2 text-white">hardWorker</span>
                                <span className="text-amber-300">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                <span className="mr-2 text-white">problemSolver</span>
                                <span className="text-amber-300">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                <span className="mr-2 text-white">skills.length</span>
                                <span className="mr-2 text-amber-300">&gt;=</span>
                                <span className="text-orange-400">5</span>
                            </div>
                            <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                            <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                            <div><span className="text-gray-400">{`};`}</span></div>
                        </code>
                    </div>
                </div>
            </div>





        </section>


    )
}

export default Layout
