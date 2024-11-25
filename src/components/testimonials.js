import React, { useState, useEffect, useRef } from "react";
import testimonialImage1 from "../assets/testimonials-1.png";
import testimonialImage2 from "../assets/testimonials-2.png";
import testimonialImage3 from "../assets/testimonials-3.png";
import backgroundImage from '../assets/background-black.png';
import contactLogo from "../assets/contact-logo.svg"; // Adjust the path if needed

function Testimonials() {
    const testimonials = [
        {
            quote: "Aleson is exceptional—he stays true to his principles and is a pleasure to work with!",
            name: "Rizagail Requiero",
            title: "Business Development Associate @INTTO",
            image: testimonialImage1,
        },
        {
            quote: "Aleson’s designs are thoughtful and precise—working with him as a front-end developer was a pleasure!",
            name: "Miguel De Leon",
            title: "Software Engineer @BitrockIT",
            image: testimonialImage2,
        },
        {
            quote: "Working with Rolf was inspiring due to his passion for UI/UX design, commitment to improvement, and supportive guidance.",
            name: "Leslie Fuentes",
            title: "Graphic Designer Freelance",
            image: testimonialImage3,
        },
    ];

    const [ currentIndex, setCurrentIndex ] = useState( 0 );
    const [ showButtons, setShowButtons ] = useState( false );
    const [ isAnimating, setIsAnimating ] = useState( false );
    const sectionRef = useRef( null );

    // Handle navigation
    const handleNext = () => {
        if ( isAnimating ) return;
        setIsAnimating( true );
        setTimeout( () => {
            setCurrentIndex( ( prevIndex ) => ( prevIndex + 1 ) % testimonials.length );
            setIsAnimating( false );
        }, 500 ); // Match animation duration
    };

    const handlePrev = () => {
        if ( isAnimating ) return;
        setIsAnimating( true );
        setTimeout( () => {
            setCurrentIndex( ( prevIndex ) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
            setIsAnimating( false );
        }, 500 ); // Match animation duration
    };

    // Show/Hide buttons when the section is in the center
    useEffect( () => {
        const observer = new IntersectionObserver(
            ( [ entry ] ) => {
                setShowButtons( entry.isIntersecting );
            },
            { root: null, threshold: 0.6 }
        );

        const section = sectionRef.current;
        if ( section ) {
            observer.observe( section );
        }

        return () => {
            if ( section ) {
                observer.unobserve( section );
            }
        };
    }, [] );

    // Local time formatting
    const [ localTime, setLocalTime ] = useState( "" );

    useEffect( () => {
        const updateTime = () => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const ampm = hours >= 12 ? "PM" : "AM";
            const formattedTime = `LOCAL TIME ${ hours % 12 }:${ minutes < 10 ? `0${ minutes }` : minutes }:${ seconds < 10 ? `0${ seconds }` : seconds } ${ ampm }, PH`;
            setLocalTime( formattedTime );
        };

        // Update time every second
        const timeInterval = setInterval( updateTime, 1000 );

        // Initial update
        updateTime();

        return () => clearInterval( timeInterval ); // Cleanup interval
    }, [] );

    return (
        <div>
            <section
                ref={ sectionRef }
                className="px-4 sm:px-6 lg:px-8 py-16 overflow-x-hidden"
            >
                {/* Title Section */ }
                <h2 className="text-black-secondary font-bold text-left leading-tight text-[35px] md:text-[50px] lg:text-[110px] max-w-[25ch]">
                    Words from Those Who’ve Worked With Me
                </h2>

                {/* Testimonials Layout */ }
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 relative">
                    {/* Left Column (Testimonials, Quote, Name, Title) for Desktop */ }
                    <div className="flex flex-col justify-start px-4 order-last md:order-first">
                        {/* (Testimonials) Text */ }
                        <h3
                            className="text-military-green  font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                        >
                            (testimonials)
                        </h3>

                        {/* Testimonial Quote */ }
                        <h4
                            className={ `mt-4 sm:mt-8 text-grey-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left transition-all duration-500 ${ isAnimating ? "opacity-0 translate-x-[-20px]" : "opacity-100 translate-x-0" }` }
                        >
                            { testimonials[ currentIndex ].quote }
                        </h4>

                        {/* Name and Title */ }
                        <div
                            className={ `mt-6 transition-all duration-500 ${ isAnimating ? "opacity-0 translate-x-[-20px]" : "opacity-100 translate-x-0" }` }
                        >
                            <p className="text-black-secondary font-bold text-[18px] lg:text-[22px]">
                                { testimonials[ currentIndex ].name }
                            </p>
                            <p className="text-grey-primary text-[16px] lg:text-[20px]">
                                { testimonials[ currentIndex ].title }
                            </p>
                        </div>
                    </div>

                    {/* Right Column for Image */ }
                    <div className="flex justify-center items-center px-4 order-first md:order-last">
                        <img
                            src={ testimonials[ currentIndex ].image }
                            alt={ `Testimonial ${ currentIndex + 1 }` }
                            className={ `w-full max-w-[320px] md:max-w-[350px] lg:max-w-[510px] object-contain box-border transition-all duration-500 ${ isAnimating ? "opacity-0 translate-x-[20px]" : "opacity-100 translate-x-0" }` }
                        />
                    </div>
                </div>

                {/* Navigation Buttons */ }
                <div
                    className={ `fixed bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 transition-opacity duration-500 ${ showButtons ? "opacity-100" : "opacity-0 pointer-events-none" } sm:flex` }
                >
                    <button
                        onClick={ handlePrev }
                        className="relative bg-black-secondary text-white-primary font-medium px-6 py-3 rounded-lg overflow-hidden group transition-transform duration-300 transform hover:scale-105"
                    >
                        <span className="absolute inset-0 bg-military-green-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                        <span className="relative z-10">PREV</span>
                    </button>
                    <button
                        onClick={ handleNext }
                        className="relative bg-black-secondary text-white-primary font-medium px-6 py-3 rounded-lg overflow-hidden group transition-transform duration-300 transform hover:scale-105"
                    >
                        <span className="absolute inset-0 bg-military-green-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                        <span className="relative z-10">NEXT</span>
                    </button>
                </div>
            </section>

            <section
                className="relative rounded-[10px] p-8 sm:p-16 mt-16 mx-auto"
                style={ {
                    background: `url(${ backgroundImage })`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundColor: 'black',
                    maxWidth: '1500px',
                    padding: '50px',
                } }
            >
                <div className="rounded-[50px] text-center text-white min-h-[500px] sm:min-h-0 flex flex-col justify-center">
                    <p className="text-grey-secondary text-xl sm:text-2xl md:text-3xl font-medium mb-6">
                        (got a challenge?)
                    </p>
                    <h2 className="font-bold text-off-white-dark-theme text-4xl sm:text-5xl md:text-7xl lg:text-9xl leading-tight mb-6">
                        LET'S MAKE <br /> IT HAPPEN
                    </h2>
                    {/* Updated Button */ }
                    <div className="flex justify-center">
                        <button
                            className="inline-flex bg-grey-primary text-white-secondary py-3 px-6 rounded-md text-lg sm:text-xl font-semibold mb-6 transition-all duration-500 ease-in-out transform hover:bg-military-green hover:scale-110"
                        >
                            <a href="mailto:rolfaleson.pro@gmail.com" className="w-full text-center">
                                rolfaleson.pro@gmail.com
                            </a>
                        </button>
                    </div>
                    <div className="text-off-white-dark-theme text-md sm:text-lg md:text-xl font-medium">
                        <p>{ localTime }</p>
                    </div>
                </div>
            </section>

            
        </div>
    );
}

export default Testimonials;
