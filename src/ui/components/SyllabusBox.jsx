import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { VscArrowRight } from 'react-icons/vsc'

const SyllabusBox = ({ text, content }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive(!active)
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      class="p-5 lg:w-1/4 bg-white rounded-lg flex-col cursor-pointer my-4"
    >
      <div className="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xl font-semibold">{text}</p>
        </div>
        <div>
          <div class="w-24 h-8 rounded-lg bg-green-300 flex items-center justify-around" onClick={toggleAccordion}>
            <VscArrowRight className={`${rotate} text-white`} />
          </div>
        </div>
      </div>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out hide-scroll-bar"
      >
        <div className="text-gray-600 text-xs mt-2">{content}</div>
      </div>

    </motion.div>
  )
}

export default SyllabusBox
