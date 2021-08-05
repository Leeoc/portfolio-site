import React from "react"
import TechnologiesItem from "../TechnologiesItem/TechnologiesItem"
import technologiesData from "../TechnologiesItem/technologiesData";

const Technologies = () => {
  const techItems = technologiesData.map((data, index) => {
    return (<TechnologiesItem data={{ title: data.title, text: data.text }} key={data.id} />)
  })
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none z-50">
        <span className="inline-block pl-2 transform hover:-translate-y-1 hover:scale-110 relative transition duration-500 ease-in-out text-blue-600 hover:text-indigo-400">
          Technologies
        </span>
      </h2>
      <br />
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {techItems}
      </div>
    </div>
  );
};

export default Technologies