import React from "react";
import logo from '../assets/logo.png';  // Ensure correct path to logo.png

const Footer = () => {
    return (
        <footer className="py-10 px-5 sm:px-10 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Desktop and Tablet Layout */ }
                <div className="hidden sm:grid sm:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <h3 className="text-gray-primary font-semibold mb-4">MENU</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-military-green-secondary hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#works" className="text-military-green-secondary hover:underline">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-military-green-secondary hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-military-green-secondary hover:underline">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-military-green-secondary hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="text-gray-primary font-semibold mb-4">SOCIALS</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#instagram" className="text-military-green-secondary hover:underline">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#spotify" className="text-military-green-secondary hover:underline">
                                    Spotify
                                </a>
                            </li>
                            <li>
                                <a href="#wix" className="text-military-green-secondary hover:underline">
                                    Wix
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="text-gray-primary font-semibold mb-4">WORK</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#linkedin" className="text-military-green-secondary hover:underline">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#behance" className="text-military-green-secondary hover:underline">
                                    Behance
                                </a>
                            </li>
                            <li>
                                <a href="#dribbble" className="text-military-green-secondary hover:underline">
                                    Dribbble
                                </a>
                            </li>
                            <li>
                                <a href="#github" className="text-military-green-secondary hover:underline">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Layout */ }
                <div className="sm:hidden grid grid-cols-2 gap-8 mt-10">
                    <div className="flex flex-col items-center">
                        <div className="mb-4">
                            {/* Logo */ }
                            <img
                                src={ logo }
                                alt="Logo"
                                className="mx-auto mb-4"
                                style={ { maxWidth: '100px' } }
                            />
                        </div>

                        {/* MENU */ }
                        <h3 className="text-gray-primary font-semibold mb-4">MENU</h3>
                        <ul className="space-y-2 text-center">
                            <li>
                                <a href="#home" className="text-military-green-secondary hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#works" className="text-military-green-secondary hover:underline">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-military-green-secondary hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-military-green-secondary hover:underline">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-military-green-secondary hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="mb-6">
                            <h3 className="text-gray-primary font-semibold mb-4">SOCIALS</h3>
                            <ul className="space-y-2 text-center">
                                <li>
                                    <a href="#instagram" className="text-military-green-secondary hover:underline">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#spotify" className="text-military-green-secondary hover:underline">
                                        Spotify
                                    </a>
                                </li>
                                <li>
                                    <a href="#wix" className="text-military-green-secondary hover:underline">
                                        Wix
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-gray-primary font-semibold mb-4">WORK</h3>
                            <ul className="space-y-2 text-center">
                                <li>
                                    <a href="#linkedin" className="text-military-green-secondary hover:underline">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="#behance" className="text-military-green-secondary hover:underline">
                                        Behance
                                    </a>
                                </li>
                                <li>
                                    <a href="#dribbble" className="text-military-green-secondary hover:underline">
                                        Dribbble
                                    </a>
                                </li>
                                <li>
                                    <a href="#github" className="text-military-green-secondary hover:underline">
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Logo and Copyright */ }
                <div className="text-center mt-10">
                    <p className="text-military-green-secondary">
                        © 2024 Rolf Aleson Galvez. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
