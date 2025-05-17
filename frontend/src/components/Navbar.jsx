import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
   <div>
  <header className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          
            <span className="sr-only"></span>
            <div className="flex-shrink-0">
              <Link to="/">
      <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" src="./book.svg" alt="User Avatar" /></Link>
    </div>
         
               
          

        
        </div>
        <div className="md:flex md:items-center md:gap-12">
         
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link to="/create">
                <Button text="Create" />
              </Link>
              
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>

  )
}

export default Navbar
