import React from 'react';
import { personalData } from './Utils/data/personal-data';
import "../../CSS/Layout.css"
import { Link } from 'react-router-dom';

function Layout() {
    return (
        <section className='relative flex flex-col items-center justify-between  py-4 lg:py-12'>
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

                    <div className='' >
                        <Link href={personalData.linkedIn} target='_blank' >
                        </Link>
                    </div>

                </div>
            </div>



        </section>


    )
}

export default Layout
