import React from 'react'
import OfferingBox from '../components/OfferingBox'
import Job from '../../assets/svgs/gettings_jobs.svg'
import Chat from '../../assets/svgs/gettings_chat.svg'
import Video from '../../assets/svgs/gettings_video.svg'
import Course from '../../assets/svgs/gettings_course.svg'
import GettingBox from '../components/GettingBox'



const Gettings = () => {
  return (
    <div id="gettings">
      <h1 class="py-16 font-bold text-4xl text-center text-gray-800">
        Program Benefits
      </h1>
      <div class="flex flex-col bg-white m-auto p-auto">
        <div
          class="flex overflow-x-scroll pb-10 hide-scroll-bar"
        >
          <div
            class="flex justify-around flex-nowrap lg:mx-auto md:mx-20 mx-10 "
          >
            <GettingBox Icon={Job} text="Job Guarantee Program" />
            <GettingBox Icon={Chat} text="Instant chat/email support" />
            <GettingBox Icon={Video} text="Video Solution to problems" />
            <GettingBox Icon={Course} text="Post course 18 month access and support" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gettings
