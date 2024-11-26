import React, { useState, useEffect, useRef } from "react";
import testimonialImage1 from "../assets/testimonials-1.png";
import testimonialImage2 from "../assets/testimonials-2.png";
import testimonialImage3 from "../assets/testimonials-3.png";

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

    // Show/Hide buttons when the section is in the viewport
    useEffect( () => {
        const observer = new IntersectionObserver(
            ( [ entry ] ) => {
                setShowButtons( entry.isIntersecting );
            },
            { root: null, threshold: 0.3 } // Adjusted for smoother detection
        );

        const section = sectionRef.current;
        if ( section ) observer.observe( section );

        return () => {
            if ( section ) observer.unobserve( section );
        };
    }, [] );

    return (
        <div id="testimonials">
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
                    {/* Left Column (Text and Details) */ }
                    <div className="flex flex-col justify-start px-4 order-last md:order-first">
                        <h3 className="text-military-green font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            (testimonials)
                        </h3>
                        <h4
                            className={ `mt-4 sm:mt-8 text-grey-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left transition-all duration-500 ${ isAnimating ? "opacity-0 translate-x-[-20px]" : "opacity-100 translate-x-0" }` }
                        >
                            { testimonials[ currentIndex ].quote }
                        </h4>
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

                    {/* Right Column (Image) */ }
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
                    className={ `flex justify-center space-x-4 mt-8 mb-12 transition-opacity duration-500 ${ showButtons ? "opacity-100" : "opacity-0 pointer-events-none" }` }
                >
                    <button
                        onClick={ handlePrev }
                        className="bg-black-secondary text-white-primary font-medium px-6 py-3 rounded-lg hover:bg-military-green-secondary"
                    >
                        PREV
                    </button>
                    <button
                        onClick={ handleNext }
                        className="bg-black-secondary text-white-primary font-medium px-6 py-3 rounded-lg hover:bg-military-green-secondary"
                    >
                        NEXT
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Testimonials;
