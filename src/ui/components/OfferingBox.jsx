import { motion } from 'framer-motion'
import React from 'react'

const OfferingBox = ({ text, Icon }) => {
  return (
    <motion.div
      className="bg-green-500 bg-opacity-20 m-8 py-6  lg:w-1/3 h-full rounded-2xl sm:text-center flex flex-col items-center justify-evenly cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={Icon}
        alt=""
        className="h-48 w-48"

      />
      <p
        className="text-2xl text-center font-semibold">
        {text}
      </p>
    </motion.div>
  )
}

export default OfferingBox
