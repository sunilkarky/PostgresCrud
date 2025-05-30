import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({searchTerm, setSearchTerm, handleSearch ,onSearchInputChange}) => {
  return (
    <div>
      <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-gradient-to-r from-indigo-700 to-violet-500 text-white">
  <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
    <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
      Ready to browse exciting Books?<br />Feel free to add your books.
    </h2>
    
    <div className=" mt-1 xl:mt-10">
      <form
  id="search-bar"
  className="mx-auto mt-6 w-fit bg-white rounded-md shadow-lg z-10 flex justify-center"
  onSubmit={handleSearch}
>
  <div className="flex items-end justify-center p-2">
    <input
      type="text"
      placeholder="Search here"
      value={searchTerm}
      onChange={onSearchInputChange}
      className="w-full text-gray-600 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
    />
    <button
      type="submit"
      className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
    >
      Search
    </button>
  </div>
</form>
      <p className="mt-7 text-base">© 2025 Book Store, LLC</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
