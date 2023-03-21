import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faBarsStaggered,
  faDollar,
  faMessage,
  faSignal,
  faUserGroup,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { logo } from '../../assets/images'
import { useState } from 'react'

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
      name: 'Message',
      link: '/dashboard/message',
      icon: faMessage,
    },
  ]

  return (
    <div className=" xl:w-64 bg-white lg:w-10">
      <div className="sticky top-0 hidden xl:block">
        <Link to="/dashboard" className="flex items-center justify-center py-4">
          <img src={logo} alt="" />

          <h3 className="ml-12 sm:ml-0 text-green-800 text-xl">Dashboard</h3>
        </Link>

        <div className="flex flex-col justify-center px-5">
          {arrayDashboard.map((item) => {
            return (
              <span
                className={
                  'h-12 flex items-center hover:bg-primary hover:text-white cursor-pointer my-[2px] rounded-md box-border px-4 ' +
                  (window.location.href.endsWith(item.link)
                    ? 'bg-primary text-white'
                    : '')
                }
                key={item.name}
              >
                <FontAwesomeIcon icon={item.icon} />
                <Link to={item.link} className="ml-2">
                  {' '}
                  {item.name}
                </Link>
              </span>
            )
          })}
        </div>
      </div>
      {isIconsVisible ? (
        <button onClick={toggleIconsVisibility} className="xl:hidden p-2">
          <FontAwesomeIcon icon={faBars} size="xl"/>
        </button>
      ) : (
        <button onClick={toggleIconsVisibility} className="xl:hidden p-2">
          <FontAwesomeIcon icon={faClose} size="xl"/>
        </button>
      )}
    </div>
  )
}

export default DashboardMenu
