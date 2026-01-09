import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import testimonialImage1 from "../assets/testimonials-1.png";
import testimonialImage2 from "../assets/testimonials-2.png";
import testimonialImage3 from "../assets/testimonials-3.png";
import backgroundImage from "../assets/background-black.png";
import { DateTime } from "luxon"; // Import luxon for handling timezones

// Initialize AOS
AOS.init();

function Testimonials() {
    const testimonials = [
        {
            quote: "Aleson is exceptional—he stays true to his principles and is a pleasure to work with!",
            name: "Rizagail Requiero",
            title: "Business Development Associate @INTTO",
            image: testimonialImage1,
        },
        {
            quote: "Aleson's designs are thoughtful and precise—working with him as a front-end developer was a pleasure!",
            name: "Miguel De Leon",
            title: "Software Engineer @BitrockIT",
            image: testimonialImage2,
        },
        {
            quote: "Working with Rolf was inspiring due to his passion for UI/UX design, commitment to growth, and supportive guidance.",
            name: "Leslie Fuentes",
            title: "Graphic Designer Freelance",
            image: testimonialImage3,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [time, setTime] = useState('');
    const [location] = useState('Philippines'); // Use country name here

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % testimonials.length
        );
    };

    useEffect(() => {
        // Function to update time every second
        const updateTime = () => {
            const now = DateTime.now().setZone("Asia/Manila"); // Set to the Philippines timezone
            const timeString = now.toFormat("hh:mm:ss a"); // Format the time as hh:mm:ss AM/PM
            setTime(timeString);
        };

        // Update time every second
        const interval = setInterval(updateTime, 1000);
        updateTime(); // Initialize with current time

        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <div id="testimonials">
                <section className="px-4 sm:px-6 lg:px-8 py-16 overflow-x-hidden">
                    <div className="text-military-green font-bold text-2xl sm:text-3xl md:text-4xl sm:text-left mb-4 sm:mb-0">
                        (testimonial)
                    </div>
                    <h2 className="text-black-secondary font-bold text-left leading-tight text-[35px] md:text-[50px] lg:text-[110px] max-w-[25ch]">
                        Words from Those Who’ve Worked With Me
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        {/* Left Column */}
                        <div className="flex flex-col justify-start px-4 order-last md:order-first relative">
                            <h4 className="mt-4 sm:mt-8 text-grey-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left min-h-[180px] overflow-hidden testimonial-text">
                                {testimonials[currentIndex].quote}
                            </h4>
                            <div className="mt-6 sm:mt-8 md:mt-10">
                                <p className="text-black-secondary font-bold text-[18px] lg:text-[22px]">
                                    {testimonials[currentIndex].name}
                                </p>
                                <p className="text-grey-primary text-[16px] lg:text-[20px]">
                                    {testimonials[currentIndex].title}
                                </p>
                            </div>
                            {/* Navigation Buttons */}
                            <div className="flex gap-4 mt-8">
                                <button
                                    onClick={handlePrev}
                                    className="bg-grey-primary text-white py-4 px-12 rounded-2xl font-semibold hover:bg-military-green transition duration-300"
                                >
                                    PREV
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-grey-primary text-white py-4 px-12 rounded-2xl font-semibold hover:bg-military-green transition duration-300"
                                >
                                    NEXT
                                </button>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex justify-center items-center px-4 order-first md:order-last">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={`Testimonial ${currentIndex + 1}`}
                                className="w-full max-w-[320px] md:max-w-[350px] lg:max-w-[510px] object-contain testimonial-image"
                            />
                        </div>
                    </div>
                </section>

                <section
                    className="relative rounded-[10px] p-8 sm:p-16 mt-16 mx-auto"
                    style={{
                        background: `url(${backgroundImage})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundColor: "black",
                        maxWidth: "1500px",
                    }}
                >
                    <div id="contact" className="rounded-[50px] text-center text-white min-h-[500px] sm:min-h-0 flex flex-col justify-center">
                        <p className="text-grey-secondary text-xl sm:text-2xl md:text-3xl font-medium mb-6" data-aos="fade-up">
                            Got a challenge?
                        </p>
                        <h2 className="font-bold text-off-white-dark-theme text-4xl sm:text-5xl md:text-7xl lg:text-9xl leading-tight mb-6" data-aos="zoom-in">
                            LET'S MAKE <br /> IT HAPPEN
                        </h2>
                        <div className="flex justify-center">
                            <button className="inline-flex bg-grey-primary text-white-secondary py-3 px-6 rounded-md text-lg sm:text-xl font-semibold mb-6" data-aos="zoom-in">
                                <a
                                    href="mailto:rolfaleson.pro@gmail.com"
                                    className="w-full text-center"
                                >
                                    rolfaleson.pro@gmail.com
                                </a>
                            </button>
                        </div>

                        {/* Local Time Tracker */}
                        <div className="mt-6">
                            <p className="text-off-white-dark-theme font-bold text-xl">
                                LOCAL TIME
                            </p>
                            <p className="text-off-white-dark-theme font-medium text-lg">
                                <span className="block sm:inline">{time}</span>
                                <span className="block sm:inline"> - {location}</span>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Testimonials;
