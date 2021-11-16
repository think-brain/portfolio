/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import HomeSvg from '../../../assets/svgs/home_education.svg'
import ModalForm from '../ModalForm'
import DataSvg from '../../../assets/svgs/offering_data.svg'


const SlideThree = () => {
    return (
        <div className="h-screen bg-grey-100 mx-10 lg:mx-1">
            <div className="relative h-full">
                {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50 animate-blob"></div>
                <div className="absolute top-0 right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50 animate-blob"></div>
                <div className="absolute -bottom-24 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50"></div> */}
                <div className="flex flex-col lg:flex-row md:px-5 max-w-7xl mx-auto justify-evenly items-center h-full">
                    <img src={DataSvg} alt="SVG" className="lg:w-2/3" />
                    <div className="md:px-6">
                        <p className="text-green-500 font-semibold text-xl my-4">Grow data knowledge</p>
                        <p className="text-5xl font-bold my-2">Data science Advanced Practices and Applications</p>
                        <p className="text-gray-400 mt-8">
                            Core concepts and more practical sessions of Data science.
                        </p>
                        {/* <p className="text-gray-400 my-4">
                            Get industry ready with our 100% job guaranteed and 100% free courses taught by industry experts and grab those ever increasing job vacancies before anyone else does.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideThree
