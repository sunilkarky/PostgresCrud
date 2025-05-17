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

const CardsOther = ({ book }) => {
  return (
    <div className="flex flex-col hover:bg-gray-900 hover:text-white transition duration-300 rounded overflow-hidden shadow-lg min-w-[280px] max-w-sm">
      <Link to="/single-page">
        <div className="py-4 px-8">
          <h4 className="text-lg mb-3 font-semibold">{book.bookName}</h4>
          <p className="mb-2 text-sm text-gray-600">
            {book.bookAuthor} | {book.bookGenre} | Price: {book.bookPrice}
          </p>
          <img src={book.bookImage} className="w-full object-cover" alt={book.bookName} />
          <hr className="mt-4" />
          <span className="text-xs">ARTICLE</span>
          &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
        </div>
      </Link>
    </div>
  )
}

export default CardsOther
