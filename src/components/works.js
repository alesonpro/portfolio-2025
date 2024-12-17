import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import backgroundBlack from '../assets/background-black.png'; // Background image
import projectImage from '../assets/project-1.png'; // Replace with your actual project image
import projectImage2 from '../assets/project-2.png'; // Replace with your second project image
import projectImage3 from '../assets/project-3.png'; // Replace with your third project image
import projectImage4 from '../assets/project-4.png'; // Replace with your third project image

function Works() {
    const [ currentProject, setCurrentProject ] = useState( 1 );
    const projectRefs = useRef( [] );

    // Project details with added links
    const projects = [
        {
            image: projectImage4,
            title: 'FeeLancer Case Study',
            year: 2024,
            link: 'https://www.behance.net/gallery/214688511/UX-Case-Study-FeeLancer' 
        },
        {
            image: projectImage3,
            title: 'FitFUTR Case Study',
            year: 2024,
            link: 'https://www.behance.net/gallery/212090317/UX-Case-Study-FitFUTR' 
        },
        {
            image: projectImage,
            title: 'Taraki Consortium',
            year: 2024,
            link: 'https://taraki.vercel.app/' 
        },
        {
            image: projectImage2,
            title: 'INTTO',
            year: 2024,
            link: 'https://intto.vercel.app/' 
        },
    ];

    useEffect( () => {
        // Initialize AOS
        AOS.init( {
            duration: 1000, // Animation duration
            once: true, // Trigger animations only once
        } );

        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the project is in view
        };

        const observer = new IntersectionObserver( ( entries ) => {
            entries.forEach( ( entry ) => {
                if ( entry.isIntersecting ) {
                    const index = projectRefs.current.indexOf( entry.target );
                    if ( index !== -1 ) {
                        setCurrentProject( index + 1 ); // Set the project number based on its position
                    }
                }
            } );
        }, observerOptions );

        // Observe each project section
        projectRefs.current.forEach( ( project ) => {
            observer.observe( project );
        } );

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, [] );

    return (
        <section
            id="work"
            className="relative bg-cover bg-center min-h-screen sm:min-h-[calc(100vh-50px)]"
            style={ {
                backgroundImage: `url(${ backgroundBlack })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 10,
            } }
        >
            {/* Top Section: Heading and Intro */ }
            <div
                className="relative flex flex-col justify-start items-start p-4 sm:p-6 h-full mt-12 sm:mt-24 md:mt-32 lg:mt-40"
                data-aos="fade-down"
            >
                <h2 className="text-off-white-dark-theme font-bold text-center w-full text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-9xl tracking-tight sm:tracking-normal">
                    SELECTED WORKS
                </h2>
                <div className="flex flex-col sm:flex-row justify-start sm:justify-end items-center sm:items-start mt-12 sm:mt-16 px-4 sm:px-12 w-full">
                    <div className="text-military-green font-bold text-2xl sm:text-3xl md:text-4xl text-center sm:text-right mb-4 sm:mb-0">
                        (project)
                    </div>
                    <div className="text-off-white-black text-lg sm:text-xl md:text-2xl sm:ml-8 text-center sm:text-left max-w-lg lg:max-w-md xl:max-w-[40ch]">
                        Showcasing projects crafted with passion, including case studies and work for real-world clients.
                    </div>
                </div>
            </div>

            {/* Project Sections */ }
            { projects.map( ( project, index ) => (
                <div
                    key={ index }
                    ref={ ( el ) => ( projectRefs.current[ index ] = el ) }
                    className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-start px-4 sm:px-12 mt-16"
                    data-aos={ index % 2 === 0 ? 'fade-right' : 'fade-left' }
                >
                    <div className="text-off-white-dark-theme font-bold text-3xl sm:text-4xl md:text-9xl mb-6 sm:mb-0">
                        { currentProject === index + 1 ? `0${ index + 1 }` : '' }
                    </div>
                    <div className="flex flex-col w-full sm:w-[930px]">
                        {/* Add anchor tag to make image clickable */ }
                        <a href={ project.link } target="_blank" rel="noopener noreferrer">
                            <img
                                src={ project.image }
                                alt={ `${ project.title } Thumbnail` }
                                className="w-full rounded-lg"
                            />
                        </a>
                        <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mt-4 sm:mt-6">
                            <h3 className="text-off-white-dark-theme text-2xl sm:text-3xl font-bold">
                                { project.title }
                            </h3>
                            <div className="flex gap-4 mt-4 sm:mt-0 flex-wrap justify-center sm:justify-start">
                                <button className="text-sm sm:text-base font-semibold text-off-white-dark-theme border border-off-white-dark-theme px-4 py-2 rounded-lg">
                                    DESIGN
                                </button>
                                <button className="text-sm sm:text-base font-semibold text-background-black bg-grey-primary px-4 py-2 rounded-lg transition">
                                    { project.year }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) ) }
        </section>
    );
}

export default Works;
