import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const UpdatePage = () => {

  //first approch problem more state for more input fields not suitable fo rbig project
  const [bookName,setBookName]=useState("")
  const [bookGenre,setBookGenre]=useState("")
  const [bookAuthor,setBookAuthor]=useState("")
  const [bookPrice,setBookPrice]=useState(0)

  //second approach
  


 
  

  return (
      <>
       <Navbar />
       <div className="bg-white border border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">
            Add Book
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bookName" className="text-sm font-medium text-gray-900 block mb-2">Book Name</label>
                <input
                  onChange={(event)=>{setBookName(event.target.value)}}
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
                  onChange={(event)=>setBookAuthor(event.target.value)}
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
                  onChange={(e)=>setBookPrice(e.target.value)}
                  type="number"
                  name="bookPrice"
                  id="bookPrice"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$14"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="bookDescription" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                <textarea
                  onChange={(e)=>setBookGenre(e.target.value)}
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
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
  )
}

export default UpdatePage
