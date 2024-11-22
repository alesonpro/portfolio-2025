import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg'; // Import your SVG logo

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
                        <a href="#work" className="relative text-military-green group">
                            work
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a href="#about" className="relative text-military-green group">
                            about
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a href="#testimonials" className="relative text-military-green group">
                            testimonials
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a href="#contact" className="relative text-military-green group">
                            contact
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a href="#resume" className="relative text-military-green group">
                            resume
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-military-green transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */ }
                    <div className="md:hidden">
                        <button
                            onClick={ () => setIsOpen( !isOpen ) }
                            className={ `text-white-primary hover:text-white-primary focus:outline-none focus:text-white-primary 
                            ${ isOpen ? 'bg-white-primary' : 'bg-off-white-dark-theme' } 
                            rounded-full p-3 transition duration-300 ease-in-out`}
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
                className={ `fixed inset-0 bg-grey-primary w-full h-full transform ${ isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50` }
            >
                <div className="px-4 pt-5 pb-3 flex justify-end">
                    <button
                        onClick={ () => setIsOpen( false ) }
                        className="text-off-white-primary hover:text-off-white-primary focus:outline-none focus:text-off-white-primary"
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
                <div className="flex flex-col items-start justify-between h-full space-y-4 px-6 pt-20 relative">
                    {/* Top Navigation Links */ }
                    <div>
                        <a
                            href="#work"
                            className="block text-4xl font-medium text-white-primary hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            WORK
                        </a>
                        <a
                            href="#about"
                            className="block text-4xl font-medium text-white-primary hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#testimonials"
                            className="block text-4xl font-medium text-white-primary hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            TESTIMONIALS
                        </a>
                        <a
                            href="#contact"
                            className="block text-4xl font-medium text-white-primary hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            CONTACT
                        </a>
                        <a
                            href="#resume"
                            className="block text-4xl font-medium text-white-primary hover:text-military-green-secondary transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            RESUME
                        </a>
                    </div>

                    {/* Bottom Section */ }
                    <div className="absolute bottom-20 left-6 right-6">
                        {/* Email Section */ }
                        <div className="mt-4">
                            <p className="text-white-primary text-s font-medium">EMAIL ADDRESS</p>
                            <p className="text-white-secondary text-s">rolfaleson.pro@gmail.com</p>
                        </div>

                        {/* Social Media Links */ }
                        <div className="mt-4 flex justify-evenly space-x-2">
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm border border-off-white-black text-white-secondary px-2 py-2 rounded-2xl hover:bg-white-primary hover:text-military-green transition duration-300 ease-in-out"
                            >
                                LINKEDIN
                            </a>
                            <a
                                href="https://www.behance.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm border border-off-white-black text-white-secondary  px-2 py-2 rounded-2xl hover:bg-white-primary hover:text-military-green transition duration-300 ease-in-out"
                            >
                                BEHANCE
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm border border-off-white-black text-white-secondary px-2 py-2 rounded-2xl hover:bg-white-primary hover:text-military-green transition duration-300 ease-in-out"
                            >
                                INSTAGRAM
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
