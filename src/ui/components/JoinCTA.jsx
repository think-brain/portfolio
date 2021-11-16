import React from 'react'

const JoinCTA = () => {
  return (

    <div class="bg-gray-50 dark:bg-gray-800 ">
      <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block">
            Ai revolution has already begun.<br /> Are you skilled enough to lead the revolution?
          </span>
          <span class="block text-green-500 py-4">
            Join our Job Guarantee Program to step in AI world.
          </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <button type="button" class="py-4 px-6 cursor-pointer bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default JoinCTA
