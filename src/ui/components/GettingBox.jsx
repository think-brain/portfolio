import { motion } from 'framer-motion'
import React from 'react'

const GettingBox = ({ text, Icon }) => {
  return (
    <motion.div class={`inline-block mx-4`}>
      <div class="flex-col items-center w-64 h-64 max-w-xs overflow-hidden rounded-lg text-center shadow-md bg-white hover:shadow-xl cursor-pointer px-6 py-5 transition-shadow duration-300 ease-in-out flex justify-around">
        <img
          src={Icon}
          alt=""
          className="h-48 w-48"
        />
        <p
          className="text-xl text-center font-semibold"
        >
          {text}
        </p>
      </div>
    </motion.div>
  )
}

export default GettingBox
