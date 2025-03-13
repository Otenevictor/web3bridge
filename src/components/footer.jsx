import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#384a62] text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Content Column 1 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <ul className="mt-4">
                        <li><a href="#" className="text-gray-300 hover:text-white">Our Story</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Team</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                    </ul>
                </div>

                {/* Content Column 2 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Products</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-300 hover:text-white">Desktop</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Laptop</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Tablet</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">smartphon</a></li>
                    </ul>
                </div>

                {/* Content Column 3 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Content Column 4 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Connect</h3>
                    <div className="flex justify-center md:flex md:justify-start md:p-0 p-2 space-x-4">
                                <a href="mailto:solomonotene36@gmail.com" target="blank" rel="noopener noreferrer">
                                    <FaEnvelope className='"text-white text-2xl  hover:text-gray-300"' />
                                </a>
                                <a href="https://github.com/Otenevictor" target="_blank"
                                    rel="noopener noreferrer">
                                    <FaGithub className="text-white text-2xl 
                                            hover:text-gray-300" />
                                </a>
                                <a href="https://x.com/BlessedVictoo" target="_blank"
                                    rel="noopener noreferrer">
                                    <FaTwitter className="text-white text-2xl
                                            hover:text-gray-300" />
                                </a>
                                <a href=": https://www.instagram.com/solomonotene36" target="_blank"
                                    rel="noopener noreferrer">
                                    <FaInstagram className="text-white text-2xl
                                            hover:text-gray-300" />
                                </a>
                                <a href="https://www.linkedin.com/in/victor-otene-26a4a023a/" target="_blank"
                                    rel="noopener noreferrer">
                                    <FaLinkedin className="text-white text-2xl
                                            hover:text-gray-300" />
                                </a>
                            </div>
                </div>
            </div>
            <div className="text-center mt-8 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;