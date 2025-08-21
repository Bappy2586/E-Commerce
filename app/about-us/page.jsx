import React from 'react'

const About = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-6">
            <div className="max-w-3xl text-center bg-white shadow-lg rounded-2xl p-10 border border-gray-100">

                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Welcome to <span className="text-blue-600">Our E-Commerce Platform</span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We are providing <span className="font-semibold text-gray-800">trusted, reliable, and innovative</span>
                    e-commerce services across the globe. From electronics to fashion,
                    we bring the world’s best products right to your doorstep.
                </p>

                <div className="flex justify-center gap-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
                        Shop Now
                    </button>
                    <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
