import { Transition } from '@headlessui/react';
import React, { useState } from 'react'
import { Link } from "react-scroll"
import ThinkBrain from '../../assets/svgs/thinkbrain.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setChangeColor(true);
    }
    else {
      setChangeColor(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <nav className={`fixed inset-x-0 z-10 ${changeColor ? 'bg-white' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 cursor-pointer"
                src={ThinkBrain}
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="home"
                  spy={true}
                  duration={500}
                  smooth={true}
                  activeClass="active"
                  className="hover:bg-green-500 px-3 hover:text-white py-2 rounded-full text-lg font-medium cursor-pointer"
                >
                  Home
                </Link>

                {/* <Link
                  to="offering"
                  spy={true}
                  duration={500}
                  smooth={true}
                  activeClass="active"
                  className="hover:bg-green-500 hover:text-white px-3 py-2 rounded-full text-lg font-medium cursor-pointer"
                >
                  Offerings
                </Link> */}

                <Link
                  to="courses"
                  spy={true}
                  duration={600}
                  smooth={true}
                  activeClass="active"
                  className="hover:bg-green-500 hover:text-white px-3 py-2 rounded-full text-lg font-medium cursor-pointer"
                >
                  Courses
                </Link>

                <Link
                  to="gettings"
                  spy={true}
                  duration={800}
                  smooth={true}
                  activeClass="active"
                  className="hover:bg-green-500 hover:text-white px-3 py-2 rounded-full text-lg font-medium cursor-pointer"
                >
                  Resources
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  duration={800}
                  smooth={true}
                  activeClass="active"
                  className="hover:bg-green-500 hover:text-white px-3 py-2 rounded-full text-lg font-medium cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="hover:bg-green-500 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link
                to="home"
                className="hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>

              {/* <Link
                to="#offering"
                className="hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Offering
              </Link> */}

              <Link
                to="courses"
                className="hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Courses
              </Link>

              <Link
                to="outcomes"
                className="hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Resources
              </Link>

              <Link
                to="contact"
                className="hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;