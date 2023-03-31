import React, { useState } from 'react'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { author } from '../../assets/images'
import Dropdown from '../../components/Dropdown/Dropdown'
import { Link } from 'react-router-dom'
function DashboardHeader({handleTrigger}) {
  const arrayName = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Statistics', link: '/dashboard/statistics' },
    { name: 'Payment', link: '/dashboard/payment' },
    { name: 'Customer', link: '/dashboard/customer' },
    { name: 'Products', link: '/dashboard/products' },
    { name: 'Comment', link: '/dashboard/message' },
    { name: 'Coupon', link: '/dashboard/coupon' },
  ]
  const [isOpen, setIsOpen] = useState(false)
  let timeoutId
  function handleMouseOver() {
    setIsOpen(true)
    timeoutId = setTimeout(() => {}, 1000)
  }
  function handleMouseOut() {
    clearTimeout(timeoutId)
    setIsOpen(false)
  }

  return (
    <div className="w-full bg-white h-16 sticky top-0 border-0 border-solid border-l-[1px] border-gray-300 shadow-sm">
      <div className="header flex justify-between items-center h-full p-4">
        <div className="left">
          <FontAwesomeIcon
            icon={faBarsStaggered}
            className="mr-4 cursor-pointer "
            size="xl"
            onClick={() => handleTrigger()}
          />
          {arrayName.map((item) => {
            return (
              <span className="text-xl font-normal text-primary-600">
                {window.location.href.endsWith(item.link) ? item.name : ''}
              </span>
            )
          })}
        </div>
        <div className="right flex items-center relative">
          <div
            className="avatar w-10 mr-2"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img
              src={author}
              alt=""
              className="w-full h-full object-cover rounded-full cursor-pointer"
            />

            {isOpen && (
              <ul className="absolute top-full right-[0%] flex flex-col gap-2 bg-white p-2 rounded-lg shadow-md">
                <li className="whitespace-nowrap hover:bg-primary-200  transition-all cursor-pointer p-2 text-left text-gray-600">
                  <Link to="/">User Setting</Link>
                </li>
                <li className="whitespace-nowrap cursor-pointer hover:bg-primary-200 transition-all p-2 text-left text-gray-600">
                  <Link to="/">Change password</Link>
                </li>
                <li className="whitespace-nowrap cursor-pointer hover:bg-primary-200  transition-all p-2 text-left text-gray-600">
                  <Link to="/">Logout</Link>
                </li>
              </ul>
            )}
          </div>
          <span className="user">admin</span>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
