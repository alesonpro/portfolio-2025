import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg'; // Import your SVG logo
import backgroundWhite from '../assets/background-white.png'; // Import the background image


function Navbar() {
    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */ }
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold">
                            <Logo className="h-8 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Menu */ }
                    <div className="hidden md:flex space-x-4">
                        <a
                            href="#work"
                            className="relative text-military-green group"
                        >
                            work
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a
                            href="#about"
                            className="relative text-military-green group"
                        >
                            about
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a
                            href="#testimonials"
                            className="relative text-military-green group"
                        >
                            testimonials
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a
                            href="#contact"
                            className="relative text-military-green group"
                        >
                            contact
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a
                            href="#resume"
                            className="relative text-military-green group"
                        >
                            resume
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */ }
                    <div className="md:hidden">
                        <button
                            onClick={ () => setIsOpen( !isOpen ) }
                            className="text-white-primary hover:text-white-primary focus:outline-none focus:text-white-primary bg-military-green rounded-full p-2"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                { isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={ 2 }
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={ 2 }
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                ) }
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */ }
            <div
                className={ `fixed inset-y-0 right-0 bg-white-primary text-military-green w-64 transform ${ isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50` }
            >
                <div className="px-4 pt-5 pb-3">
                    <button
                        onClick={ () => setIsOpen( false ) }
                        className="text-black-primary hover:to-black-secondary focus:outline-none focus:text-black-secondary"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={ 2 }
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="px-2 space-y-2">
                    <a
                        href="#work"
                        className="block px-3 py-2 rounded-md text-base font-medium text-military-green hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        work
                    </a>
                    <a
                        href="#about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-military-green hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        about
                    </a>
                    <a
                        href="#testimonials"
                        className="block px-3 py-2 rounded-md text-base font-medium text-military-green hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        testimonials
                    </a>
                    <a
                        href="#contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-military-green hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        contact
                    </a>
                    <a
                        href="#resume"
                        className="block px-3 py-2 rounded-md text-base font-medium text-military-green hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        resume
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
