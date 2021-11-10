/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import HomeSvg from '../../assets/svgs/home_education.svg'
import ModalForm from '../components/ModalForm'

const Home = () => {
    return (
        <div id="home" className="h-screen bg-grey-100 mx-10 lg:mx-1">
            <div className="relative">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50 animate-blob"></div>
                <div className="absolute top-0 right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50 animate-blob"></div>
                <div className="absolute -bottom-24 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50"></div>
                <div className="md:flex md:px-5 max-w-7xl mx-auto justify-between items-center">
                    <img src={HomeSvg} alt="SVG" className="" />
                    <div className="md:px-6">
                        <p className="text-green-500 font-semibold text-xl my-4">Make your great Future</p>
                        <p className="text-5xl font-bold my-2">Online Course Expert Teaching</p>
                        <p className="text-gray-400 my-8">
                        By 2030, AI will have contributed $16.1 trillion to the global economy. AI will revolutionise the workforce with 133 million more engaging, less repetitive employment.
                        </p>
                        <ModalForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
