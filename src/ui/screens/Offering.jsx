import React from 'react'
import OfferingBox from '../components/OfferingBox'
import Industry from '../../assets/svgs/offering_industry.svg'
import Data from '../../assets/svgs/offering_data.svg'


const Offering = () => {
  return (
    <div id="offering">
      <p className="text-center font-bold text-4xl">What we Offer?</p>
        <div className="lg:flex items-center justify-around m-6">
          <OfferingBox text="Industry oriented curriculum,we only teach you the in demand skills." Icon={Industry} />
          <OfferingBox text="Core concepts and more practical sessions of Data science." Icon={Data} />
        </div>
    </div>
  )
}

export default Offering
