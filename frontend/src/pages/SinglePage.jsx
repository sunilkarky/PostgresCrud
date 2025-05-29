import React, { use, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const SinglePage = () => {
const navigate=useNavigate()
  const[book, setBook]=useState({})
  const {id}=useParams()

  const fetchBook=async ()=>{
    const response=await axios.get(`http://localhost:3000/api/books/${id}`)
  
    setBook(response.data.book)
  }


  useEffect(()=>{
    fetchBook()
  },[])
const deleteBook=async ()=>{
 const response= await axios.delete(`http://localhost:3000/api/books/${id}`)
  if(response.status===200){
    alert("Book deleted successfully")
    navigate('/')
  }else{
    alert("Error deleting book")
  }
}

 const timeStamp = book.createdAt ? book.createdAt.slice(0, 10) : '';
  return (

    <>
      <Navbar />
<div className=''>
    <div className=' flex  mr-4 justify-center min-h-screen w-full sm:w-[90vh] '>

    <div className="   max-w-fit w-full h-full rounded-lg sm:rounded-lg overflow-hidden shadow-sm my-2 bg-gradient-to-r from-indigo-700 to-violet-500">
  <article className="p-4 flex space-x-3">
    {/* Avatar Column */}
    
    {/* Content Column */}
  
    <div className="flex-1 min-w-0">
      {/* Header image */}
      <div className=" rounded-xl mb-2  overflow-hidden">
        <img loading="lazy" src={book.bookImage} alt="image" className="w-full object-cover aspect-video" />
      </div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-baseline space-x-1  min-w-0">
          <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100 truncate hover:underline cursor-pointer">
            {book.bookName}
          </h2>
          
          <span className="text-gray-500 dark:text-gray-400">·</span>
          <span className="text-gray-500 dark:text-gray-400 hover:underline cursor-pointer whitespace-nowrap">
          {timeStamp}
          </span>
        </div>
         
      </div>
      <div className="flex items-end justify-between">
      <div className="flex text-2xl font-bold hover: items-baseline space-x-2 mt-2">Price
      <span className="mx-2 text-2xl font-semibold hover:underline"> ${book.bookPrice}</span>
      <span className="text-gray-400 text-sm line-through">${book.bookPrice -1}</span>
    </div>
     
    </div>
      {/* Tweet Content */}
       <p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base leading-normal mb-2">
        {book.bookGenre}</p>

      {/* Media (Optional) */}
      
      <div className='flex flex-row gap-2 mt-4 justify-end  '>
        <Link to={`/update-page/${id}`}>
        <button className="rounded-md bg-teal-600 px-10 py-2.5 text-sm font-medium text-white shadow" >
                Update
              </button>
        </Link>
        <button onClick={deleteBook} className="rounded-md bg-teal-600 px-10 py-2.5 text-sm font-medium text-white shadow" >
                Delete
              </button>
      </div>

      
      {/* Action Bar */}
      {/* <div className="flex justify-between items-center mt-4 text-gray-500 dark:text-gray-400 text-xs sm:text-sm -ml-2">
        <button aria-label="Reply" className="flex items-center space-x-1 group hover:text-blue-500 dark:hover:text-blue-400 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 dark:hover:bg-opacity-50">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14l-3-3m3 3l-3 3" /></svg>
        <span>15</span>
        </button>
        <button aria-label="Retweet" className="flex items-center space-x-1 group hover:text-green-500 dark:hover:text-green-400 p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900 dark:hover:bg-opacity-50">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2A8.001 8.001 0 0019.418 15m0 0H15" /></svg>
        <span>88</span>
        </button>
        <button aria-label="Like" className="flex items-center space-x-1 group hover:text-red-500 dark:hover:text-red-400 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 dark:hover:bg-opacity-50">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        <span>312</span>
        </button>
        <button aria-label="View tweet analytics" className="flex items-center space-x-1 group hover:text-blue-500 dark:hover:text-blue-400 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 dark:hover:bg-opacity-50">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        <span>21.5K</span>
        </button>
        <button aria-label="Share or Bookmark" className="flex items-center space-x-1 group hover:text-blue-500 dark:hover:text-blue-400 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 dark:hover:bg-opacity-50">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
        </button>
        </div> */}
    </div>
  </article>
</div>

    </div>
        </div>
    </>
  )
}

export default SinglePage
