import React from 'react'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { author } from '../../assets/images'
function DashboardHeader() {
  const arrayName = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Statistics', link: '/dashboard/statistics' },
    { name: 'Payment', link: '/dashboard/payment' },
    { name: 'Customer', link: '/dashboard/customer' },
    { name: 'Products', link: '/dashboard/products' },
    { name: 'Comment', link: '/dashboard/message' },
    { name: 'Coupon', link: '/dashboard/coupon' },
  ]
  return (
    <div className="w-full bg-white h-16 sticky top-0 border-0 border-solid border-l-[1px] border-gray-300 shadow-sm">
      <div className="header flex justify-between items-center h-full p-4">
        <div className="left">
          <FontAwesomeIcon
            icon={faBarsStaggered}
            className="mr-4 cursor-pointer "
            size="xl"
          />
          {arrayName.map((item) => {
            return (
              <span className="text-xl font-normal text-primary-600">
                {(window.location.href.endsWith(item.link) ? item.name : '')}
              </span>
            )
          })}
        </div>
        <div className="right flex items-center">
          <div className="avatar w-10 mr-2">
            <img
              src={author}
              alt=""
              className="w-full h-full object-cover rounded-full cursor-pointer"
            />
          </div>
          <span className="user">admin</span>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
