import React from "react"

const BlogCard = (props) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white dark:bg-gray-800 rounded shadow-sm hover:shadow-md">
      {props.data.imgSrc == null ?
        <div className="flex w-full h-64 bg-gradient-to-r from-green-400 to-blue-500 justify-center items-center">
          <h3 className="m-auto text-gray-50 text-center">{props.data.title}</h3>
        </div>
        :
        <img
          src={props.data.imgSrc}
          className="object-cover w-full h-64"
          alt="Blog post"
          height="16rem"
        />
      }
      <div className="p-5">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <span className="text-gray-600 dark:text-gray-50">{props.data.date}</span>
        </p>
        <a
          href={props.data.sourceUrl}
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 dark:text-gray-50"
        >
          {props.data.title}
        </a>
        <p className="mb-2 text-gray-700 dark:text-gray-50">
          {props.data.description}
        </p>
        <a
          href={props.data.sourceUrl}
          className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-indigo-400"
        >
          Read
        </a>
      </div>
    </div>
  )
}

export default BlogCard