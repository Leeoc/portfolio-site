import { React, useState, useEffect } from "react"
import BlogCard from "../BlogCard/BlogCard"

// function for getting my blog posts from dev.to.
const getPosts = async () => {
  const result = await fetch('https://dev.to/api/articles?username=leeoc')
    .then((response) => response.json())
    .then(data => data)
    .catch((error) => console.log("Couldn't fetch posts! ", error));
  return result
}

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts().then(res => {
      // Set the state using hooks syntax 
      setPosts(res)
      setLoading(false)
    })
  }, [])

  return (
    <div className="bg-gray-100 dark:bg-gray-700">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100 dark:text-blue-700"
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
            Blog Posts
          </span>
        </h2>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loading && <h1>loading posts...</h1>}

          {/* If we have loaded the posts display them */}
          {!loading &&
            posts.map((post, index) => {
              return (
                <BlogCard data={{
                  imgSrc: post.cover_image,
                  title: post.title,
                  date: post.created_at.slice(0, 10),
                  description: post.description,
                  sourceUrl: post.canonical_url
                }}
                  key={index}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Blog