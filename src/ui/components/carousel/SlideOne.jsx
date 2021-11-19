/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import HomeSvg from '../../../assets/svgs/home_education.svg'
import ModalForm from '../ModalForm'


const SlideOne = () => {
    return (
        <div className="h-screen bg-grey-100 mx-10 lg:mx-1">
            <div className="relative h-full">
                {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50 animate-blob"></div>
                <div className="absolute top-0 right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50 animate-blob"></div>
                <div className="absolute -bottom-24 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50"></div> */}
                <div className="flex flex-col lg:flex-row md:px-5 max-w-7xl mx-auto justify-evenly items-center h-full">
                    <img src={HomeSvg} alt="SVG" className="lg:w-2/3" />
                    <div className="md:px-6">
                        <p className="text-green-500 font-semibold text-xl my-4">Make your great Future</p>
                        <p className="text-5xl font-bold my-2">Get job ready with Thinkbrain’s AI program.</p>
                        <p className="text-gray-400 mt-8">
                            "By 2030, AI will have contributed $16.1 trillion to the global economy. AI will revolutionise the workforce with 133 million more engaging, less repetitive employment." The combination of data science and artificial intelligence (AI) is causing a revolution in the commercial world.
                        </p>
                        <p className="text-gray-400 my-4">
                            So what are you waiting for. Get industry ready with our Job Guarantee Program in AI and Data Science taught by industry experts and grab those ever increasing job vacancies before anyone else does.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideOne
