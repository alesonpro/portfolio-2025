import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/logo-dark.svg'; // Import your SVG logo

function Navbar() {
    const [ isOpen, setIsOpen ] = useState( false );

    // Disable/Enable scrolling when the menu is open/closed
    useEffect( () => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [ isOpen ] );

    // Close navbar when a link is clicked
    const handleLinkClick = () => {
        setIsOpen( false );
    };

    return (
        <nav className="fixed bottom-4 right-4 z-50">
            {/* Floating Circular Button */ }
            <button
                onClick={ () => setIsOpen( !isOpen ) }
                className="bg-military-green-secondary text-white-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-military-green-secondary transition-all duration-300 ease-in-out"
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

            {/* Sliding Menu */ }
            <div
                className={ `fixed top-0 right-0 h-full bg-military-green-secondary text-white-primary shadow-lg p-6 flex flex-col space-y-4 transform transition-all duration-500 ease-out ${ isOpen ? 'translate-x-0' : 'translate-x-full'
                    }` }
            >
                {/* Close Button */ }
                <button
                    onClick={ () => setIsOpen( false ) }
                    className="text-white-primary self-end focus:outline-none transition-transform duration-300 hover:scale-105"
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

                {/* Navigation Links */ }
                { [
                    { href: '#hero', label: 'HOME' },
                    { href: '#work', label: 'WORK' },
                    { href: '#about', label: 'ABOUT' },
                    { href: '#testimonials', label: 'TESTIMONIALS' },
                    { href: '#contact', label: 'CONTACT' },
                    { href: '#resume', label: 'RESUME' },
                ].map( ( link ) => (
                    <a
                        key={ link.href }
                        href={ link.href }
                        onClick={ handleLinkClick }
                        className="text-4xl sm:text-5xl lg:text-7xl text-white-primary font-medium transition-all duration-300 hover:scale-105 hover:text-military-green-secondary hover:underline hover:underline-offset-4"
                    >
                        { link.label }
                    </a>
                ) ) }

                {/* Email Section */ }
                <div>
                    <p className="mt-60 sm:mt-60 md:mt-56 lg:mt-32 text-base sm:text-base lg:text-xl text-white-dark-theme font-medium">
                        EMAIL ADDRESS
                    </p>
                    <a
                        href="mailto:rolfaleson.pro@gmail.com"
                        className="text-xl sm:text-base lg:text-xl text-off-white-dark-theme font-medium transition-all duration-300 hover:scale-105 hover:text-military-green-secondary hover:underline hover:underline-offset-4 mt-2"
                    >
                        rolfaleson.pro@gmail.com
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
