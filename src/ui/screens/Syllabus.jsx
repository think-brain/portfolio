import React from 'react'
import OfferingBox from '../components/OfferingBox'
import SyllabusBox from '../components/SyllabusBox'

const Syllabus = () => {
  return (
    <div className="bg-green-50 py-8">
      <p className="text-center font-bold py-12 text-4xl">Program Courseware</p>
      <div className="lg:flex items-center justify-evenly m-8">
        <SyllabusBox text="Python Fundamental" content="This module covers the fundamentals of programming , Introduction to  Data Structure and Algorithms, and Advance Programming concepts." />
        <SyllabusBox text="Pandas, Numpy, Scipy" content="This module covers the hands on session of different Packages used in Data Science work for data handling , data transformation, applied numerical methods etc." />
        <SyllabusBox text="Data science Fundamental" content="This module covers the basic of data science , covering concepts of statistcs, Linear Algebra ,Probability." />
      </div>
      <div className="lg:flex items-center justify-evenly m-8">
        <SyllabusBox text="A Tour of Data Visualization" content="This module covers the hands on session different visualization packages to understand the problem, displaying the result and different metrics." />
        <SyllabusBox text="Applied Machine Learning" content="This modules covers the theory and hands on session of popular machine learning technique." />
        <SyllabusBox text="Deep Learning Fundamental" content="This module covers the concepts of Neural Network, Back Propagation and Different Optimization algorithms." />
      </div>
      <div className="lg:flex items-center justify-evenly m-8">
        <SyllabusBox text="Computer Vision" content="This Module covers the concepts of Computer Vision , detailed study of popular architectures and Hands on session on real usecases." />
        <SyllabusBox text="Natural Language Processing" content="This Module covers the concepts of Computer Vision , detailed study of popular architectures and Hands on session on real usecases." />
        <SyllabusBox text="Capstone Project" content="3 real-life end to end Projects." />
      </div>
    </div>
  )
}

export default Syllabus
