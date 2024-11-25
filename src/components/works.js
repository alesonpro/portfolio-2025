import React, { useState, useEffect, useRef } from 'react';
import backgroundBlack from '../assets/background-black.png'; // Background image
import projectImage from '../assets/project-1.png'; // Replace with your actual project image
import projectImage2 from '../assets/project-2.png'; // Replace with your second project image
import projectImage3 from '../assets/project-3.png'; // Replace with your third project image
import aboutProfileImage from '../assets/about-profile.png'; // Profile image

function Works() {
    const [ currentProject, setCurrentProject ] = useState( 1 );
    const projectRefs = useRef( [] );

    useEffect( () => {
        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: "0px",
            threshold: 0.5, // Trigger when 50% of the project is in view
        };

        const observer = new IntersectionObserver( ( entries ) => {
            entries.forEach( entry => {
                if ( entry.isIntersecting ) {
                    const index = projectRefs.current.indexOf( entry.target );
                    if ( index !== -1 ) {
                        setCurrentProject( index + 1 ); // Set the project number based on its position
                    }
                }
            } );
        }, observerOptions );

        // Observe each project section
        projectRefs.current.forEach( project => {
            observer.observe( project );
        } );

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, [] );

    return (
        <section
            className="relative bg-cover bg-center min-h-screen sm:min-h-[calc(100vh-50px)]"
            style={ {
                backgroundImage: `url(${ backgroundBlack })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
                zIndex: 10,
            } }
        >
            {/* Top Section: Heading and Intro */ }
            <div className="relative flex flex-col justify-start items-start p-4 sm:p-6 h-full mt-12 sm:mt-24 md:mt-32 lg:mt-40">
                {/* Main Heading */ }
                <h2
                    className="text-off-white-dark-theme font-bold text-center w-full 
                    text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-9xl tracking-tight sm:tracking-normal"
                >
                    SELECTED WORKS
                </h2>

                {/* Intro Section */ }
                <div
                    className="flex flex-col sm:flex-row justify-start sm:justify-end items-center sm:items-start mt-12 sm:mt-16 
                    px-4 sm:px-12 w-full"
                >
                    {/* Left Column: Label */ }
                    <div className="text-military-green font-bold text-2xl sm:text-3xl md:text-4xl text-center sm:text-right mb-4 sm:mb-0">
                        (Project)
                    </div>

                    {/* Right Column: Description */ }
                    <div
                        className="text-off-white-black text-lg sm:text-xl md:text-2xl sm:ml-8 text-center sm:text-left 
                        max-w-lg lg:max-w-md xl:max-w-[40ch]"
                    >
                        Showcasing projects crafted with passion, including a case study and work for real-world clients.
                    </div>
                </div>
            </div>

            {/* Project Section 1 (Taraki Website) */ }
            <div
                ref={ ( el ) => projectRefs.current[ 0 ] = el }
                className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-start px-4 sm:px-12 mt-16"
            >
                <div className="text-off-white-dark-theme font-bold text-3xl sm:text-4xl md:text-9xl mb-6 sm:mb-0">
                    { currentProject === 1 ? '01' : '' }
                </div>
                <div className="flex flex-col w-full sm:w-[930px]">
                    <img
                        src={ projectImage }
                        alt="Project Thumbnail"
                        className="w-full rounded-lg"
                    />
                    <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mt-4 sm:mt-6">
                        <h3 className="text-off-white-dark-theme text-2xl sm:text-3xl font-bold">
                            Taraki Website
                        </h3>
                        <div className="flex gap-4 mt-4 sm:mt-0 flex-wrap justify-center sm:justify-start">
                            <button className="text-sm sm:text-base font-semibold text-off-white-dark-theme border border-off-white-dark-theme px-4 py-2 rounded-lg">
                                DESIGN
                            </button>
                            <button className="text-sm sm:text-base font-semibold text-background-black bg-grey-primary px-4 py-2 rounded-lg transition">
                                2024
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Section 2 (INTTO Website) */ }
            <div
                ref={ ( el ) => projectRefs.current[ 1 ] = el }
                className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-start px-4 sm:px-12 mt-16"
            >
                <div className="text-off-white-dark-theme font-bold text-3xl sm:text-4xl md:text-9xl mb-6 sm:mb-0">
                    { currentProject === 2 ? '02' : '' }
                </div>
                <div className="flex flex-col w-full sm:w-[930px]">
                    <img
                        src={ projectImage2 }
                        alt="Project Thumbnail"
                        className="w-full rounded-lg"
                    />
                    <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mt-4 sm:mt-6">
                        <h3 className="text-off-white-dark-theme text-2xl sm:text-3xl font-bold">
                            INTTO Website
                        </h3>
                        <div className="flex gap-4 mt-4 sm:mt-0 flex-wrap justify-center sm:justify-start">
                            <button className="text-sm sm:text-base font-semibold text-off-white-dark-theme border border-off-white-dark-theme px-4 py-2 rounded-lg">
                                DESIGN
                            </button>
                            <button className="text-sm sm:text-base font-semibold text-background-black bg-grey-primary px-4 py-2 rounded-lg transition">
                                2024
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Section 3 (FitFUTR Case Study) */ }
            <div
                ref={ ( el ) => projectRefs.current[ 2 ] = el }
                className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-start px-4 sm:px-12 mt-16"
            >
                <div className="text-off-white-dark-theme font-bold text-3xl sm:text-4xl md:text-9xl mb-6 sm:mb-0">
                    { currentProject === 3 ? '03' : '' }
                </div>
                <div className="flex flex-col w-full sm:w-[930px]">
                    <img
                        src={ projectImage3 }
                        alt="Project Thumbnail"
                        className="w-full rounded-lg"
                    />
                    <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mt-4 sm:mt-6">
                        <h3 className="text-off-white-dark-theme text-2xl sm:text-3xl font-bold">
                            FitFUTR Case Study
                        </h3>
                        <div className="flex gap-4 mt-4 sm:mt-0 flex-wrap justify-center sm:justify-start">
                            <button className=" text-sm sm:text-base font-semibold text-off-white-dark-theme border border-off-white-dark-theme px-4 py-2 rounded-lg">
                                DESIGN
                            </button>
                            <button className="text-sm sm:text-base font-semibold text-background-black bg-grey-primary px-4 py-2 rounded-lg transition">
                                    2024
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */ }
            <div className="flex flex-col sm:flex-row justify-center pb-20 items-center sm:items-center mt-16 sm:mt-24 px-4 sm:px-8 w-full sm:gap-8 lg:gap-12">
                {/* Left Column: Image */ }
                <div className="w-full sm:w-[45%] mb-8 sm:mb-0 flex justify-center">
                    <img
                        src={ aboutProfileImage }
                        alt="Profile"
                        className="w-[300px] sm:w-[300px] md:w-[350px] lg:w-[425px] h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Right Column: Text */ }
                <div className="w-full sm:w-[50%] text-center sm:text-left flex flex-col items-center sm:items-start">
                    <h3 className="text-off-white-dark-theme font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        PRODUCT DESIGNER
                    </h3>
                    <p className="text-off-white-black text-xl sm:text-xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 max-w-lg lg:max-w-md xl:max-w-[45ch] mx-auto sm:mx-0">
                        I'm passionate about user experiences and the journey they take. I specialize in designing and building minimal, user-centered, and responsive web pages.
                    </p>
                    <div className="mt-6 sm:mt-8 text-military-green font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left">
                        (about me)
                    </div>
                    <p className="text-off-white-black text-base sm:text-lg md:text-xl lg:text-2xl mt-6 sm:mt-8 max-w-lg lg:max-w-md xl:max-w-[45ch] mx-auto sm:mx-0">
                        I'm Aleson, a passionate product designer with roots in Italy and the Philippines. I thrive on creating digital solutions that truly meet client needs, always with creativity and a commitment to growth. Recently graduated, I’m eager to apply my skills and contribute to dynamic teams. When I'm not designing, you’ll find me staying active at the gym. I'm excited to connect and take the next step in my career!
                    </p>
                </div>
            </div>



        </section>
    );
}

export default Works;
