import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faBarsStaggered,
  faDollar,
  faMessage,
  faSignal,
  faUserGroup,
  faTicket,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { logo } from '../../assets/images'
import { useState } from 'react'
import { Tooltip } from '../../components/Tooltip/Tooltip'
function DashboardMenu({ ...props }) {
  const [isIconsVisible, setIconsVisibility] = useState(false)
  const toggleIconsVisibility = () => {
    setIconsVisibility(!isIconsVisible)
  }
  const arrayDashboard = [
    { name: 'Dashboard', link: '/dashboard', icon: faBarsStaggered },
    {
      name: 'Statistics',
      link: '/dashboard/statistics',
      icon: faSignal,
    },
    { name: 'Payment', link: '/dashboard/payment', icon: faDollar },
    {
      name: 'Customer',
      link: '/dashboard/customer',
      icon: faUserGroup,
    },
    {
      name: 'Products',
      link: '/dashboard/products',
      icon: faBagShopping,
    },
    {
      name: 'Comment',
      link: '/dashboard/message',
      icon: faMessage,
    },
    {
      name: 'Coupon',
      link: '/dashboard/coupon',
      icon: faTicket,
    },
  ]

  return (
    <div className=" xl:w-64 bg-white shadow-md">
      <div className="sticky top-0 hidden xl:block">
        <Link to="/" className="flex items-center justify-center py-4">
          <img src={logo} alt="" />
        </Link>
        <div className="flex flex-col justify-center px-5">
          {arrayDashboard.map((item) => {
            return (
              <span
                className={
                  'h-12 flex items-center transition-colors hover:bg-primary hover:text-white cursor-pointer my-[2px] rounded-md box-border px-4 ' +
                  (window.location.href.endsWith(item.link)
                    ? 'bg-primary text-white'
                    : '')
                }
                key={item.name}
              >
                <FontAwesomeIcon icon={item.icon} />
                <Link to={item.link} className="ml-2 w-full h-full flex items-center">
                  {item.name}
                </Link>
              </span>
            )
          })}
        </div>
      </div>
      {isIconsVisible ? (
        <div className="sticky xl:hidden"></div>
      ) : (
        <div className="xl:hidden w-full">
          <div className="sticky top-0">
            <div className="flex flex-col justify-center px-3">
              <Link to="/dashboard" className="object-cover w-14 h-14 mb-8">
                <img src={logo} alt="" className="w-full h-full" />
              </Link>
              {arrayDashboard.map((item) => {
                return (
                  <Tooltip message={item.name} key={item.name}>
                    <span
                      key={item.name}
                      className={
                        'h-12 flex items-center hover:bg-primary hover:text-white cursor-pointer my-[2px] rounded-md box-border px-4 ' +
                        (window.location.href.endsWith(item.link)
                          ? 'bg-primary text-white'
                          : '')
                      }
                    >
                      <Link to={item.link}>
                        <FontAwesomeIcon icon={item.icon} />
                      </Link>
                    </span>
                  </Tooltip>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DashboardMenu
