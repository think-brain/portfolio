import React from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function ModalForm() {
  const [showModal, setShowModal] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [num, setNum] = React.useState('')
  const [fName, setFName] = React.useState('')
  const [lName, setLName] = React.useState('')
  const [email, setEmail] = React.useState('')

  function SuccessDialog() {
    return (
      <>
        {success ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Form Submitted Successfully
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
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      You're form has been submitted successfully.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setSuccess(false)}
                    >
                      Close
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

  const addToContact = () => {
    let contact = {
      "email": email,
      "attributes": {
        "FNAME": fName,
        "LNAME": lName,
        "SMS": num
      }
    }
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': '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'
      },
      body: JSON.stringify(contact)
    };

    fetch('https://api.sendinblue.com/v3/contacts', options)
      .then(response => response.json())
      .then(response => {

      })
      .catch(err => console.error(err));
  }
  return (
    <>
      <button
        className="bg-green-500 text-white active:bg-pink-600 font-bold text-xl uppercase px-6 py-3 rounded-2xl hover:bg-green-800 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                    <label >First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-200 rounded p-2 focus:outline-none"
                      placeholder="Enter your first name"
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </div>
                  <div className="my-4">
                    <label >Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-200 rounded p-2 focus:outline-none"
                      placeholder="Enter your last name"
                      value={lName}
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </div>
                  <div className="my-4">
                    <label >Email ID</label>
                    <input
                      type="email"
                      className="w-full bg-gray-200 rounded p-2 focus:outline-none"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* <div className="my-4">
                    <label >Graduating Year</label>
                    <input type="email" className="w-full bg-gray-200 rounded p-2 focus:outline-none" placeholder="Year of Passing" />
                  </div> */}
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
                    onClick={() => {
                      addToContact()
                      setShowModal(false)
                      setSuccess(true)
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {<SuccessDialog />}
    </>
  );
}