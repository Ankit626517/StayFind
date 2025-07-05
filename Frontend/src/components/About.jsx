import React, { useState } from 'react';

function About() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 py-12">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full transition-all duration-500 hover:scale-105">
                <h1 className="text-4xl font-extrabold text-purple-700 mb-4 text-center animate-fade-in">
                    About Us
                </h1>
                <p
                    className={`text-gray-700 text-lg leading-relaxed transition-all duration-700 ${
                        showMore ? 'max-h-96 opacity-100' : 'max-h-20 opacity-80'
                    } overflow-hidden`}
                >
                    Welcome to <span className="text-blue-600 font-semibold">StayFinder</span>, your go-to platform for finding the perfect stay.
                    <span
                        className={`block transition-opacity duration-700 ${
                            showMore ? 'opacity-100' : 'opacity-0 h-0'
                        }`}
                    >
                        <br />
                        <br />
                        We offer a seamless experience to help you discover, compare, and book accommodations that suit your needs. Our mission is to make your travel planning easy and enjoyable.
                    </span>
                </p>
                <div className="flex justify-center mt-6">
                    <button
                        className="relative px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 group"
                        onClick={() => setShowMore(!showMore)}
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:scale-110">
                            {showMore ? 'Show Less' : 'Read More'}
                        </span>
                        <svg
                            className={`inline-block ml-2 w-5 h-5 transform transition-transform duration-300 ${
                                showMore ? 'rotate-180' : 'rotate-0'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;
