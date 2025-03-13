import React from 'react'
import HomeNav from '../components/HomeNav'

const HomePage = () => {
    return (
        <>
            <HomeNav />
            <div
                className="w-full h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://res.cloudinary.com/de5sm2jjl/image/upload/v1741833237/logoweb3_dsinx5.jpg')" }}
            >
                <div className="text-4xl text-white p-6 bg-blue-600 bg-opacity-50 rounded-lg">
                    <h3>Hi Welcome to Web3Bridge </h3>
                </div>
            </div>
        </>
    )
}

export default HomePage