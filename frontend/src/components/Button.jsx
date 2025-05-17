import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <div className="rounded-md bg-teal-600 px-10 py-2.5 text-sm font-medium text-white shadow" to="/create">
                {text}
              </div>
    </div>
  )
}

export default Button
