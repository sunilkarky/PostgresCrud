import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'


const CreatePage = () => {
  const navigate=useNavigate()

  const [bookData,setBookData]=useState({
    bookName:"",
    bookAuthor:"",
    bookPrice:"",
    bookGenre:"",
    bookImage:""
  })
 
  const handleChange =(event)=>{
    let name=event.target.name
    let value=event.target.value
    let {type,files}=event.target
    
    // setBookData({
    //   ...bookData,
    //   [name]:value
    // })
  //  console.log(bookData) 

   if (type === "file") {
      setBookData({
        ...bookData,
        [name]: files[0]
      })
    } else {
      setBookData({
        ...bookData,
        [name]: value
      })
    }
  }
  // const addBook=async(e)=>{
  //   e.preventDefault()
  //   console.log("call")
  //   ret
  //    const response=await axios.post('http://localhost:3000/api/books',bookData)
  //   }
  console.log(bookData)

  const addBook = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("bookName", bookData.bookName)
    formData.append("bookAuthor", bookData.bookAuthor)
    formData.append("bookPrice", bookData.bookPrice)
    formData.append("bookGenre", bookData.bookGenre)
    formData.append("bookImage", bookData.bookImage)

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/books`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      alert("Book added successfully!")
      navigate('/')
      
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message))
    }
  }
  return (
    <div>
      <Navbar />
      <div className="bg-white border border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">
            Add Book
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <form onSubmit={addBook}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bookName" className="text-sm font-medium text-gray-900 block mb-2">Book Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="bookName"
                  id="bookName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Book Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="bookAuthor" className="text-sm font-medium text-gray-900 block mb-2">Author</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="bookAuthor"
                  id="bookAuthor"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Author"
                  required
                />
              </div>
              <div>
                <label htmlFor="bookPrice" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="bookPrice"
                  id="bookPrice"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Price"
                  required
                />
              </div>
       <div className="text-sm font-medium text-gray-900 block mb-2">
  <label htmlFor="bookImage" className="mb-1 block text-sm font-medium text-gray-700">Upload file</label>
  <input onChange={handleChange} name="bookImage" id="bookImage" type="file" className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-cyan-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-amber-400 focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
</div>

              <div className="md:col-span-2">
                <label htmlFor="bookGenre" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                <textarea
                  onChange={handleChange}
                  name="bookGenre"
                  id="bookGenre"
                  rows={6}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <button 
                className="text-white bg-cyan-600 hover:bg-amber-400 focus:ring-4 focus:ring-amber-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
                type="submit"
              >
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CreatePage
