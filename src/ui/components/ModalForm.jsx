import React from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function ModalForm() {
  const [showModal, setShowModal] = React.useState(false);
  const [num, setNum] = React.useState('')
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
                <iframe width="600" height="800" src="https://ccd62e79.sibforms.com/serve/MUIEANytT-92i46E8Hy4DI0oSExOcfoWiNDol3UQHbF0loe09MG7Sz5k_gGT2t3AMgn4nQKprlPcvYtXSM3kc9sQ_Uu5O-ocM4lVkUJ-ByMeMD7e3oG-rdr10vZG7MgkgZIfEgJW_LKlg8dTivewa_V0KDtdlUT5ELs5ZM2vAnnF4yLQeHWAktP-fHtGrIve9QFOQECd_jWHPvnZ" frameborder="0" scrolling="auto" allowfullscreen className="block" ></iframe>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}