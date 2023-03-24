import React, { useState } from 'react'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import { deleteCookie, getCookie } from '../../hooks/useCookie'
import { userData } from '../../pages/Login/FakeData'

function IconHeader({ className }) {
  const arrayIconsHeader = [
    { icon: faHeart, path: '/wishlist' },
    { icon: faUser },
    { icon: faShoppingCart, path: '/cart' },
  ]

  const checkRole = () => {
    const currentUser = getCookie('currentUser')
    const currentUserData = currentUser
      ? userData.find(
          (user) =>
            user.username === currentUser.username &&
            user.password === currentUser.password
        ).role
      : null
    return currentUser !== null ? currentUserData : currentUser
  }
  return (
    <div
      className={`flex flex-col md:flex-row justify-between ${className} md:flex`}
    >
      {arrayIconsHeader.map((item, index) => {
        return index === 1 ? (
          <Dropdown
            key={index}
            trigger={
              <FontAwesomeIcon
                className="mt-2 md:mt-0 cursor-pointer text-gray-800 hover:text-green-800 transition-all"
                icon={item.icon}
              />
            }
            options={[
              { label: <Link to="/profile">Settings</Link> },
              {
                label: (
                  <Link
                    to="/login"
                    onClick={() => {
                      deleteCookie('currentUser')
                    }}
                  >
                    Logout
                  </Link>
                ),
              },
              checkRole() != null && checkRole() === 'admin'
                ? { label: <Link to="/dashboard">Dashboard</Link> }
                : '',
            ]}
          />
        ) : (
          <Dropdown
            key={index}
            trigger={
              <FontAwesomeIcon
                className="mt-2 md:mt-0 cursor-pointer text-gray-800 hover:text-green-800 transition-all"
                icon={item.icon}
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
