import React, { useState, useEffect, useRef } from 'react';
// import {  FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);

    // Handle scroll event to change HomeNav style
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest('button[aria-label="menu"]')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-blue-600 shadow-md' : 'bg-white'
        } p-4`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className={`text-2xl font-semibold hover:text-gray-400 transition-colors ${
                    scrolled ? 'text-white' : 'text-blue-600'
                }`}>
                    Web3Bridge 
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`focus:outline-none md:hidden z-50 transition-colors ${
                        scrolled ? 'text-white' : 'text-blue-600'
                    }`}
                    aria-label="menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>

                <div
                    ref={menuRef}
                    className={`md:flex md:items-center md:space-x-4 absolute md:static left-0 w-full md:w-auto
                    ${scrolled ? 'bg-blue-600' : 'bg-blue-500'} md:bg-transparent transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-[500px] opacity-100 top-14' : 'max-h-0 opacity-0 top-[-100%] md:max-h-full md:opacity-100 md:top-0'}
                    z-40`}
                >
                    <div className="flex flex-col md:flex-row p-4 md:p-0">
                        <div className="flex flex-col md:flex-row md:mr-4">
                            <Link
                                to="printivo"
                                onClick={closeMenu}
                                className={`py-2 px-4 hover:text-gray-400 hover:underline text-xl ${
                                    scrolled ? 'text-white md:text-white' : 'text-white md:text-blue-600'
                                }`}
                            >
                                Printivo
                            </Link>
                            <Link
                                to="schoolportal"
                                onClick={closeMenu}
                                className={`py-2 px-4 hover:text-gray-400 hover:underline text-xl ${
                                    scrolled ? 'text-white md:text-white' : 'text-white md:text-blue-600'
                                }`}
                            >
                                SchoolPortal
                            </Link>
                            <Link
                                to="music"
                                onClick={closeMenu}
                                className={`py-2 px-4 hover:text-gray-400 hover:underline text-xl ${
                                    scrolled ? 'text-white md:text-white' : 'text-white md:text-blue-600'
                                }`}
                            >
                                MusicApp
                            </Link>
                            {/* <Link
                                to="contact"
                                onClick={closeMenu}
                                className={`py-2 px-4 hover:text-gray-400 hover:underline text-xl ${
                                    scrolled ? 'text-white md:text-white' : 'text-white md:text-blue-600'
                                }`}
                            >
                                Marketplace 
                            </Link> */}
                            {/* <Link
                                to="contact"
                                onClick={closeMenu}
                                className={`py-2 px-4 hover:text-gray-400 hover:underline text-xl ${
                                    scrolled ? 'text-white md:text-white' : 'text-white md:text-blue-600'
                                }`}
                            >
                                Sign in
                            </Link> */}
                            {/* <Link
                                to="contact"
                                onClick={closeMenu}
                                className={`py-2 px-4 hover:text-gray-400 hover:underline text-xl ${
                                    scrolled ? 'text-white md:text-white' : 'text-white md:text-blue-600'
                                }`}
                            >
                                create Account
                            </Link> */}
                        </div>

                        {/* <div className="flex justify-center md:justify-center md:items-center space-x-4 mt-4 md:mt-0 border-t md:border-t-0 pt-4 md:pt-0">
                            {[
                                { icon:  FaShoppingCart, url: 'https://github.com/Otenevictor' }
                               
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    to={social.url}
                                    target="_blank"
                                    onClick={closeMenu}
                                    className={`hover:text-gray-400 ${
                                        scrolled ? 'text-white md:text-white' : 'text-white md:text-blue-600'
                                    }`}
                                >
                                    <social.icon className="text-2xl" />
                                </Link>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HomeNav;