import React from "react"

import './Hero.css'
import profilePicture from "./../Hero/profile.jpeg"
import useDarkMode from "../../hooks/useDarkMode"

const Hero = () => {
  const [colorTheme, setTheme] = useDarkMode()
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 items-center align-middle h-screen place-content-center dark:bg-gray-900 border-b-2 border-gray-100 dark:border-gray-800">
      <div className="sm:mx-auto lg:max-w-2xl max-w-full align-middle h-full place-content-center">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0 h-full place-content-center">
          <span className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-40 h-40 rounded-full bg-indigo-50">
              <img
                className="h-50 w-50 rounded-full ring-2  filter brightness-100 dark:brightness-0"
                src={profilePicture}
                alt="Profile"
                width="160px"
                height="160px"
              />
            </div>
          </span>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto dark:text-gray-200">
              <span className="relative inline-block dark:text-gray-200">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block animate-bounce"
                >
                  <defs>
                    <pattern
                      id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                    width="52"
                    height="24"

                  />
                </svg>
                <span className="inline-block pl-2 transform hover:-translate-y-1 hover:scale-105 relative transition duration-500 ease-in-out text-blue-600 hover:text-indigo-400">Lee O'Connell</span>
              </span>{' '}
              , Software Engineering Student
            </h2>
            <p className="text-base text-gray-700 md:text-lg dark:text-gray-200">
              3rd year software engineering student currently studying at Ulster University Jordanstown.
              I have a real passion for everything technology and love what I do.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-full mb-12">

              <label
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input id="darkToggle" type="checkbox" className="sr-only" onClick={() => setTheme(colorTheme)} defaultChecked={false} />
                  <div className="w-10 h-4 bg-gray-400 dark:bg-gray-50 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white dark:bg-blue-600 rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium dark:text-gray-50">
                  Too Bright?
                </div>
              </label>

            </div>
            <a href="mailto:info@leeoconnell.co.uk?subject=Getting in touch about leeoconnell.co.uk">
              <button

                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-indigo-600 focus:shadow-outline focus:outline-none hover:-translate-y-1 hover:scale-110"
              >
                Contact me!
              </button>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero