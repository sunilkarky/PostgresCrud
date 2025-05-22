// import { Link } from 'react-router-dom'

// const cardData = [
//   {
//     title: 'How to be effective at working remotely?',
//     desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
//     img: 'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },

// ];

// const CardsOther = () => {
//   return (
//     <div className="w-full flex flex-wrap justify-center p-16 gap-8">
//       {cardData.map((card, idx) => (
//         <div key={idx} className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg flex-1 min-w-[280px] max-w-[350px]">
//           <Link to="/single-page">
//             <div className="py-4 px-8">
//               <h4 className="text-lg mb-3 font-semibold">{card.title}</h4>
//               <p className="mb-2 text-sm text-gray-600">{card.desc}</p>
//               <img src={card.img} className="w-full object-cover" />
//               <hr className="mt-4" />
//               <span className="text-xs">ARTICLE</span>
//               &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default CardsOther
import { Link } from 'react-router-dom'

const CardsOther = (props) => {
// 
console.log(props)
const { image, book } = props

  return (
    
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 overflow-hidden">
    {/* Image Section - Taller Aspect Ratio */}
   <Link to={`/single-page/${book.id}`}>
    <div className="relative aspect-[3/4]"> {/* Changed to 3:4 aspect ratio */}
        <img 
            className="w-[50vw] h-[50vh] object-cover rounded-t-lg hover:opacity-90 transition-opacity duration-200"
            src={book.bookImage} 
            alt="Take the Risk book cover"
            loading="lazy"
            />
    <div className="p-6 space-y-4">
        {/* Title Section */}
        <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                <br />
                <span className="text-blue-600 dark:text-blue-400">RISK</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                Learning to Identify, Choose, and Live with Acceptable Risk
            </p>
        </div>

        {/* Author Section */}
        <div className="border-t pt-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
                <span className="font-semibold">Dr. Ben Carson</span> has conquered many risky situations 
                in his lifetime, both personally and professionally...
            </p>
        </div>


        {/* Author Credit */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-right">
            with Gregg Lewis
        </p>
    </div>
    </div>

    {/* Book Details */}
  </Link>
</div>
  )}
  {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 overflow-hidden">
    <a href="#" className="block relative aspect-video">
    <img 
    className="w-full h-full object-cover rounded-t-lg hover:opacity-90 transition-opacity duration-200" 
    src={image} 
    alt=""
    loading='lazy'
    
    />
    </a>
    
    
    <div class="p-5">
    <a href="#">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Read more
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    </a>
    </div>
    </div>  */}
    
    // <div className="flex flex-col hover:bg-teal-900 hover:text-white transition duration-300 rounded overflow-hidden shadow-lg min-w-[280px] max-w-sm">
    //   <Link to="/single-page">
    //     <div className="py-4 px-8">
    //       <h4 className="text-lg mb-3 font-semibold">{book.bookName}</h4>
    //       <p className="mb-2 text-sm text-gray-600">
    //         {book.bookAuthor} | {book.bookGenre} | Price: {book.bookPrice}
    //       </p>
    //       <img src={book.bookImage} className="w-full object-cover" alt={book.bookName} />
    //       <hr className="mt-4" />
    //       <span className="text-xs">ARTICLE</span>
    //       &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
    //     </div>
    //   </Link>
    // </div>
    
    
    {/* Endorsement */}
    {/* <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <p className="text-xs italic text-gray-600 dark:text-gray-300">
        "Reading this book will cause you to examine your approach to living..."
        </p>
        <p className="mt-2 text-xs font-medium text-gray-700 dark:text-gray-400">
            Tony Dungy, Head Coach,<br />
            Indianapolis Colts
        </p>
    </div> */}
    
    export default CardsOther
    