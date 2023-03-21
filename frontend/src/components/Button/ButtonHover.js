import React, { Children, useState } from 'react'

const ButtonHover = ({ children, text, hoverText }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="relative">
      <button
        className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </button>
      {isHovering ? (
        <span className="text-base text-green-800 absolute right-8">
          {hoverText}
        </span>
      ) : (
        ''
      )}
    </div>
  )
}

export default ButtonHover
