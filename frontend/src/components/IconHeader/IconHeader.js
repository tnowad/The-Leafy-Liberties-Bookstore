import React from 'react'
import { useCookies } from 'react-cookie'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import { RemoveCookie } from '../../hooks/useCookie'

function IconHeader({ className }) {
  const arrayIconsHeader = [
    { icon: faHeart, path: '/wishlist' },
    { icon: faUser },
    { icon: faShoppingCart, path: '/cart' },
  ]

  return (
    <div
      className={`flex flex-col md:flex-row justify-between ${className} md:flex`}
    >
      {arrayIconsHeader.map((item, index) => {
        return index === 1 ? (
          <Dropdown
            trigger={
              <FontAwesomeIcon
                className="mt-2 md:mt-0 md:mr-2 cursor-pointer text-gray-800 hover:text-green-800 transition-all"
                icon={item.icon}
                key={index}
              />
            }
            options={
              index === 1
                ? [
                    { label: <Link to="/profile">Account setting</Link> },
                    {
                      label: (
                        <Link
                          to="/login"
                          onClick={() => {
                            RemoveCookie('currentUser')
                          }}
                        >
                          Logout
                        </Link>
                      ),
                    },
                  ]
                : ''
            }
          />
        ) : (
          <Dropdown
            trigger={
              <FontAwesomeIcon
                className="mt-2 md:mt-0 md:mr-2 cursor-pointer text-gray-800 hover:text-green-800 transition-all"
                icon={item.icon}
                key={index}
              />
            }
            path={item.path}
          />
        )
      })}
    </div>
  )
}

export default IconHeader
