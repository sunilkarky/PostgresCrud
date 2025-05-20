import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CardsOther from '../components/CardsOther'
import axios from "axios"
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const HomePage = () => {
  const [books, setBooks] = useState([])
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books")
    setBooks(response.data.books)
  }
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <Navbar />
      <div class="relative bg-gradient-to-r from-violet-700 to-indigo-500 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="./bg.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Book Store</h1>
    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
    <Link to="/" class="bg-amber-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</Link>
  </div>
</div>
<div class="max-w-3xl mx-auto text-center mt-16">
    <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Available Books</span>
        <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
    </h1>
</div>
<Card />
<Card />
<Card />
      <div className="w-full flex flex-wrap justify-center p-16 gap-8">
        {books.map((book)=>{
          return(

            <CardsOther  image="qqq.jpg" books={books} />
          )
        })
      }

                    
       
      </div>
      
    </div>
  )
}

export default HomePage