
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

<nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all">
      <Link to="/">
      <img className="w-10 sm:w-16 sm:h-16 rounded-full object-cover bg-amber-400 mx-1" src="/book.svg" alt="User Avatar" />
      </Link>
 <div className="  flex  items-center justify-center ">
  <span className=" absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-indigo-500 via-amber-500 to-pink-500 bg-clip-text  box-content  text-transparent text-center select-none">
    Book Store
  </span>
  <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-indigo-500 via-amber-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent text-center select-auto">
    Book Store
  </h1>
</div>
               <Link to="/create-page">
                   <button type="button" className="w-30 py-3 cursor-pointer active:scale-95 transition text-sm text-white bg-amber-400 rounded-full  flex items-center justify-center gap-1">
                       <img className="w-5 h-5" src="/add.svg" alt="plus icon" />
                       <p className="mb-0.5">Add new</p>
                   </button>
               </Link>
              
  

</nav>


  
  )
}

export default Navbar
