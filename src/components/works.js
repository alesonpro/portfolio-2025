import React from 'react';
import backgroundBlack from '../assets/background-black.png'; // Background image
import projectImage from '../assets/project-1.png'; // Replace with your actual project image
import projectImage2 from '../assets/project-2.png'; // Replace with your second project image
import projectImage3 from '../assets/project-3.png'; // Replace with your second project image

function Works() {
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
                className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-start px-4 sm:px-12 mt-16"
            >
                {/* Left Column: Project Number */ }
                <div className="text-off-white-dark-theme font-bold text-3xl sm:text-4xl md:text-9xl mb-6 sm:mb-0">
                    01
                </div>

                {/* Right Column: Project Image and Details */ }
                <div className="flex flex-col w-full sm:w-[930px]">
                    {/* Project Image */ }
                    <img
                        src={ projectImage }
                        alt="Project Thumbnail"
                        className="w-full rounded-lg"
                    />

                    {/* Project Title and Buttons */ }
                    <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mt-4 sm:mt-6">
                        {/* Title */ }
                        <h3 className="text-off-white-dark-theme text-2xl sm:text-3xl font-bold">
                            Taraki Website
                        </h3>

                        {/* Buttons */ }
                        <div className="flex gap-4 mt-4 sm:mt-0 flex-wrap justify-center sm:justify-start">
                            <button
                                className="text-sm sm:text-base font-semibold text-off-white-dark-theme border border-off-white-dark-theme 
                                px-4 py-2 rounded-lg hover:bg-off-white-dark-theme hover:text-background-black transition"
                            >
                                DEVELOPMENT
                            </button>
                            <button
                                className="text-sm sm:text-base font-semibold text-off-white-dark-theme border border-off-white-dark-theme 
                                px-4 py-2 rounded-lg hover:bg-off-white-dark-theme hover:text-background-black transition"
                            >
                                DESIGN
                            </button>
                            <button
                                className="text-sm sm:text-base font-semibold text-background-black bg-grey-primary 
                                px-4 py-2 rounded-lg transition"
                            >
                                2024
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Section 3 (FitFUTR Case Study) */ }
            <div
                className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-start px-4 sm:px-12 mt-16"
            >
                {/* Left Column: Project Number */ }
                <div className="text-off-white-dark-theme font-bold text-3xl sm:text-4xl md:text-9xl mb-6 sm:mb-0">
                    02
                </div>

                {/* Right Column: Project Image and Details */ }
                <div className="flex flex-col w-full sm:w-[930px]">
                    {/* Project Image */ }
                    <img
                        src={ projectImage2 }
                        alt="Project Thumbnail"
                        className="w-full rounded-lg"
                    />

                    {/* Project Title and Buttons */ }
                    <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mt-4 sm:mt-6">
                        {/* Title */ }
                        <h3 className="text-off-white-dark-theme text-2xl sm:text-3xl font-bold">
                            INTTO Website
                        </h3>

                        {/* Buttons */ }
                        <div className="flex gap-4 mt-4 sm:mt-0 flex-wrap justify-center sm:justify-start">
                            <button
                                className="text-sm sm:text-base font-semibold text-off-white-dark-theme border border-off-white-dark-theme 
                                px-4 py-2 rounded-lg hover:bg-off-white-dark-theme hover:text-background-black transition"
                            >
                                DESIGN
                            </button>
                            <button
                                className="text-sm sm:text-base font-semibold text-background-black bg-grey-primary 
                                px-4 py-2 rounded-lg transition"
                            >
                                2024
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Section 2 (INTTO Website) */ }
            <div
                className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-start px-4 sm:px-12 mt-16"
            >
                {/* Left Column: Project Number */ }
                <div className="text-off-white-dark-theme font-bold text-3xl sm:text-4xl md:text-9xl mb-6 sm:mb-0">
                    03
                </div>

                {/* Right Column: Project Image and Details */ }
                <div className="flex flex-col w-full sm:w-[930px]">
                    {/* Project Image */ }
                    <img
                        src={ projectImage3 }
                        alt="Project Thumbnail"
                        className="w-full rounded-lg"
                    />

                    {/* Project Title and Buttons */ }
                    <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mt-4 sm:mt-6">
                        {/* Title */ }
                        <h3 className="text-off-white-dark-theme text-2xl sm:text-3xl font-bold">
                            FitFUTR Case Study
                        </h3>

                        {/* Buttons */ }
                        <div className="flex gap-4 mt-4 sm:mt-0 flex-wrap justify-center sm:justify-start">
                            <button
                                className="text-sm sm:text-base font-semibold text-off-white-dark-theme border border-off-white-dark-theme 
                                px-4 py-2 rounded-lg hover:bg-off-white-dark-theme hover:text-background-black transition"
                            >
                                DESIGN
                            </button>
                            <button
                                className="text-sm sm:text-base font-semibold text-background-black bg-grey-primary 
                                px-4 py-2 rounded-lg transition"
                            >
                                2024
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;
