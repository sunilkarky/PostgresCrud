import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CardsOther from '../components/CardsOther'
import axios from "axios"

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
      <div className="w-full flex flex-wrap justify-center p-16 gap-8">
        {books.map((book) => (
          <CardsOther key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default HomePage