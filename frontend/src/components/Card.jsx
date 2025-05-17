
import { Link } from 'react-router-dom'

const Card = () => {
  return (
      <Link to="/single-page">
        <div>
          <div className="flex px-3 py-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                
        </p>
      </div>
      <div className="px-3 gap-2 flex flex-col">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
        <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-4 mb-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit excepturi, quo ab delectus eveniet vitae quae laudantium officia, expedita eum qui non totam nam ipsum nesciunt neque explicabo perspiciatis at.</span>
      </div>
    </div>
  </div>
</div>
    </Link>

  )
}

export default Card
