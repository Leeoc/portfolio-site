import React from 'react'

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-900 border-b-2 border-gray-100 dark:border-gray-800">
      <div className="flex flex-col lg:flex-row">
        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none">
            About
            <span className="inline-block text-purple-400 pl-2">
              {' '}me
            </span>
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 dark:text-gray-50">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
            perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque rem aperiam, eaque
            ipsa quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About