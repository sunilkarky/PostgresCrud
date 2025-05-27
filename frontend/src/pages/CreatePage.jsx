import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"



function CreatePage(){
  const navigate = useNavigate()
    // first approach 
    // const [bookName,setBookname] = useState("")
    // const [bookGenre,setBookgenre] = useState("")
    // const [bookAuthor,setBookauthor] = useState("")
    // const [bookPrice,setBookprice] = useState("")

    // console.log(bookName,bookGenre,bookAuthor,bookPrice)

    // second approach
    const [bookData,setBookData] = useState({
        bookName : "", 
        bookGenre : "", 
        bookAuthor : "", 
        bookPrice : ""
    })
    const handleChange = (event)=>{
        // let value = event.target.value // k type haneko 
        // let name = event.taget.name  // kun ma type haneko 
        let {name,value} =event.target
        // bookName c programming
        // bookAuthor hello
        setBookData({
            ...bookData, // agadi j xa jasto xa testai hoss 
            [name] : value  // value --> nepali, name --> bookName
        })
    }

    const submitData = async (event)=>{
      event.preventDefault()
      // mathi state ma vako data lai api lai dine -- localhost:4000/api/books - post method 
      // post garda dueta pathaunai paryo , pathaune data ko format always object hunu parxa, jun at the end axios le json ma convert garera pathaedinxa 
      const response = await axios.post("http://localhost:4000/api/books",bookData)
      if(response.status === 200){
        alert("Book added successfully")
        navigate("/")
      }else{
        alert("Something went wrong")
      }

      }

    return (
        <>
       <Navbar />
   <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold">Contact Us</div>
  <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
  <div className="p-8">
    <div className="flex gap-4">
      <input type="Name" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Full Name *" />
      <input type="email" name="email" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Email *" />
    </div>
    <div className="my-6 flex gap-4">
      <select name="select" id="select" className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
        <option className="font-semibold text-slate-300">Please Select</option>
      </select>
      <select name="select" id="select" className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
        <option className="font-semibold text-slate-300">4:00 Available</option>
      </select>
    </div>
    <div className>
      <textarea name="textarea" id="text" cols={30} rows={10} className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" defaultValue={"Message"} />
    </div>
    <div className="text-center">
      <a className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Book Appoinment</a>
    </div>
  </div>
</div>


        </>

    )
}
  export default CreatePage