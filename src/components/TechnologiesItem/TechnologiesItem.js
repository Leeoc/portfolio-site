import React from "react"

const TechnologiesItem = (props) => {
  return (
    <div className="px-12 text-center sm:px-0 pt-3">
      <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12 dark:bg-indigo-900 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      </div>
      <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase dark:text-gray-50">
        {props.data.title}
      </h6>
      <div className="mb-2 text-gray-700 dark:text-gray-50">
        {props.data.text}
      </div>
    </div>
  )
}

export default TechnologiesItem