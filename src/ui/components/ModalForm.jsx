import React from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'



export default function ModalForm() {
  const [showModal, setShowModal] = React.useState(false);
  const [num, setNum] = React.useState('')
  return (
    <>
      <button
        className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-2xl hover:bg-green-800 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Join Us
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Book a Free Live Class. <span className="text-green-500">Now</span>
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4">
                    <label >Email ID</label>
                    <input type="email" className="w-full bg-gray-200 rounded p-2 focus:outline-none" placeholder="Enter your email address" />
                  </div>
                  <div className="my-4">
                    <label >Graduating Year</label>
                    <input type="email" className="w-full bg-gray-200 rounded p-2 focus:outline-none" placeholder="Year of Passing" />
                  </div>
                  <div className="my-4">
                    <label htmlFor="">Phone Number</label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      defaultCountry="IN"
                      value={num}
                      onChange={setNum} />
                  </div>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}