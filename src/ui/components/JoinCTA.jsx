import React from 'react'
import ModalForm from './ModalForm'

const JoinCTA = () => {
  return (
    <div class="bg-gray-50 dark:bg-gray-800 ">
      <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-2xl font-extrabold text-black dark:text-white sm:text-3xl">
          <span class="block">
            Ai revolution has already begun.<br /> Are you skilled enough to lead the revolution?
          </span>
          <span class="block text-xl text-gray-400 py-2">
            Join our Job Guarantee Program to step in AI world.
          </span>
          <span class="block text-green-500 py-2">
            No fees upfront, Only pay after job.
          </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex">
            {/* <ModalForm /> */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflD_S5_9hCBkGSGQnWlnYfZO-OmZeyXkM_jEuoDI3kPavRdg/viewform"
              rel="noreferrer"
              target="_blank"
              className="bg-green-500 text-white active:bg-pink-600 font-bold text-xl uppercase px-6 py-3 rounded-2xl hover:bg-green-800 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default JoinCTA
