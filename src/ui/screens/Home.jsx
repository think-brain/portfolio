/* eslint-disable jsx-a11y/anchor-is-valid */
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import HomeSvg from '../../assets/svgs/home_education.svg'
import HomeSlide from '../components/HomeSlide'
import ModalForm from '../components/ModalForm'
import Navbar from '../components/Navbar'
import 'pure-react-carousel/dist/react-carousel.es.css';
import SlideOne from '../components/carousel/SlideOne'
import SlideThree from '../components/carousel/SlideThree'
import SlideTwo from '../components/carousel/SlideTwo'

const Home = () => {
    return (
        <div id="home" className="h-screen bg-grey-100 mx-10 lg:mx-1">
            <div className="relative h-full">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50 animate-blob"></div>
                <div className="absolute top-0 right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50 animate-blob"></div>
                <div className="absolute -bottom-24 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl lg:block hidden opacity-50"></div>
                <div className="h-full">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={3}
                        interval={3000}
                        isPlaying={true}
                        className="h-full"
                    >
                        <Slider className="h-full">
                            <Slide index={0}><SlideOne /></Slide>
                            <Slide index={1}><SlideTwo /></Slide>
                            <Slide index={2}><SlideThree /></Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default Home
