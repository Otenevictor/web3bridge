
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    return (

        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center min-h-screen p-4 md:p-8 bg-gray-50">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className="text-blue-600">Quality Prints</span></h1>
                    <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">Shipped to your doorstep</h2>
                    <p className="text-lg text-gray-600 mb-8">
                       What will you like to print today
                    </p>
                    <div className="flex space-x-2 md:space-x-4 ">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-2 rounded-lg transition-colors duration-300"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </button>
                        {/* <button
                            className="border border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer px-6 py-2 rounded-lg transition-colors duration-300"
                            onClick={() => navigate('/projects')}
                        >
                            View Projects
                        </button> */}
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative group overflow-hidden">
                    <div className="relative w-70 h-70  md:w-full md:h-full mx-auto  overflow-hidden shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                        
                        {/* Image with dynamic lighting */}
                        <div className="relative w-full h-full  overflow-hidden">
                            <img
                            src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1623764552/printivo/Card3_n9kqin.png" alt="card mockup"

                                // src={Prof1}
                                className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-110"
                            />
                        </div>
                    </div>

                </div>

            </section>
        </div>

);
};

export default HomePage;