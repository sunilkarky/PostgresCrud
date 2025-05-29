import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdatePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [bookName, setBookName] = useState("")
  const [bookGenre, setBookGenre] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const [bookPrice, setBookPrice] = useState(0)
  const [bookImage, setBookImage] = useState("")

  const previousData = async () => {
    const response = await axios.get(`http://localhost:3000/api/books/${id}`)
    const data = response.data.book
    setBookName(data.bookName)
    setBookGenre(data.bookGenre)
    setBookAuthor(data.bookAuthor)
    setBookPrice(data.bookPrice)
  }

  useEffect(() => {
    previousData();
  }, []);

  const handleChange = (event) => {
    const { name, type, value, files } = event.target;
    if (type === "file") {
      setBookImage(files[0]);
    }
  };

  const editBook = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("bookName", bookName)
    formData.append("bookAuthor", bookAuthor)
    formData.append("bookPrice", bookPrice)
    formData.append("bookGenre", bookGenre)
    formData.append("bookImage", bookImage)
    try {
      const response = await axios.patch(`http://localhost:3000/api/books/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      alert("Book Edited successfully!")
      navigate(`/single-page/${id}`)
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message))
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-white border border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">
            Edit Book
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <form onSubmit={editBook}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bookName" className="text-sm font-medium text-gray-900 block mb-2">Book Name</label>
                <input
                  onChange={(event) => setBookName(event.target.value)}
                  value={bookName}
                  type="text"
                  name="bookName"
                  id="bookName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="The Mountain is You"
                  required
                />
              </div>
              <div>
                <label htmlFor="bookAuthor" className="text-sm font-medium text-gray-900 block mb-2">Author</label>
                <input
                  onChange={(event) => setBookAuthor(event.target.value)}
                  value={bookAuthor}
                  type="text"
                  name="bookAuthor"
                  id="bookAuthor"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Brianna Wiest"
                  required
                />
              </div>
              <div>
                <label htmlFor="bookPrice" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                <input
                  onChange={(e) => setBookPrice(e.target.value)}
                  value={bookPrice}
                  type="number"
                  name="bookPrice"
                  id="bookPrice"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$14"
                  required
                />
              </div>
              <div className="text-sm font-medium text-gray-900 block mb-2">
                <label htmlFor="bookImage" className="mb-1 block text-sm font-medium text-gray-700">Upload file</label>
                <input onChange={handleChange} name="bookImage" id="bookImage" type="file" className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-cyan-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-amber-400 focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="bookDescription" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                <textarea
                  onChange={(e) => setBookGenre(e.target.value)}
                  value={bookGenre}
                  name="bookDescription"
                  id="bookDescription"
                  rows={6}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="This is a book about self-sabotage. Why we do it, when we do it, and how to stop doing it—for good"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdatePage