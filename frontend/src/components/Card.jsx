import { Link } from 'react-router-dom'

const Card = ({book}) => {
  const SmallSummary = book.bookGenre
  ? book.bookGenre.length > 50
    ? book.bookGenre.slice(0, 100) + '...'
    : book.bookGenre
  : '';
  return (
    <div>
       
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <Link to={`/single-page/${book.id}`}>

            <img
            loading="lazy"
              className="w-[50vh] h-[40vh] object-cover mx-auto mt-4 rounded"
              src={book.bookImage}
              alt="Book Cover"
            />
            </Link>
            <div className="px-6 py-4">
              <div className="max-w-3xl mx-auto  mt-5">
    <p className=" font-bold text-gray-700 leading-tight mb-2 pb-4 relative">{book.bookName}
    </p>
</div>
              <div className="text-gray-700 text-base">
               

               {SmallSummary }
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 text-right">
            with {book.bookAuthor}
        </p>
              </div>
            </div>
            <div className="px-3 gap-2 flex flex-col">
              <Link to={`/single-page/${book.id}`}>
              <button type="button" className=" w-full cursor-pointer bg-indigo-500 mt-4 mb-3 ml-2 px-2 py-2 font-medium rounded text-white">
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>
   
      </div>
  )
}

export default Card