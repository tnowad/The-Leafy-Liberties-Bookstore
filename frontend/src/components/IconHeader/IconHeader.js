import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function IconHeader({ className }) {
  const arrayIconsHeader = [
    { icon: faHeart },
    { icon: faUser },
    { icon: faShoppingCart },
  ]
  return (
    <div
      className={`flex flex-col sm:flex-row justify-between ${className} lg:flex`}
    >
      {arrayIconsHeader.map((item, index) => {
        return (
          <FontAwesomeIcon
            className="mt-2 sm:mt-0 cursor-pointer text-gray-800 hover:text-green-800 transition-all"
            icon={item.icon}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default IconHeader
