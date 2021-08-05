import React from 'react'

import ExperienceCard from '../ExperienceCard/ExperienceCard'
import experienceData from './experienceData'

const Experience = (props) => {

  const cards = experienceData.map((data, index) => {
    return (<ExperienceCard data={{ title: data.title, position: data.position, text: data.text }} key={index} />)
  })
  return (
    <div className="bg-gray-100 dark:bg-gray-700">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100 dark:text-indigo-800"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none z-50">
          <span className="inline-block pl-2 transform hover:-translate-y-1 hover:scale-110 relative transition duration-500 ease-in-out text-blue-600 hover:text-indigo-400">
            Experience
          </span>
        </h2>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards}
        </div>
      </div>
    </div>
  );
};

export default Experience