import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
// ...other imports...

const HomePage = () => {
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [allBooks, setAllBooks] = useState([])
  const availableBooksRef = useRef(null)

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books")
    setBooks(response.data.books)
     setAllBooks(response.data.books)
  }
 const handleSearch = (e) => {
  e.preventDefault();
  if (!searchTerm.trim()) {
    setBooks(allBooks);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top (welcome)
    return;
  }
  const filtered = allBooks.filter(book =>
    book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setBooks(filtered);
  // Scroll to results
  availableBooksRef.current?.scrollIntoView({ behavior: "smooth" });
};
  useEffect(() => {
    fetchBooks()
  }, [])

  // Scroll handler
  const handleGetStarted = () => {
    availableBooksRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <Navbar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  handleSearch={handleSearch}
  onSearchInputChange={e => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setBooks(allBooks);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }}
/>
      <div className="relative bg-gradient-to-r from-violet-700 to-indigo-500 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" src="./bg.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Book Store</h1>
          <p className="text-lg text-gray-300 mb-8">Discover amazing Books and Articles that await you.</p>
          <div className='flex flex-row gap-2'>


          <button
            onClick={handleGetStarted}
            className="bg-amber-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
            Get Started
          </button>
          
        <Link to="/create-page">
          <button type="button" className="bg-amber-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 cursor-pointer rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">      <p className=" md:mb-0.5">Add Book</p>
          </button>
        </Link>
            </div>
     
        </div>
      </div>

      {/* Available Books Section */}
      <div ref={availableBooksRef} className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Available Books</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
        </h1>
      </div>

      <div className="w-full flex flex-wrap justify-center p-16 gap-8">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
            <Footer
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  handleSearch={handleSearch}
  onSearchInputChange={e => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setBooks(allBooks);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }}
/>
    </div>
  )
}

export default HomePage