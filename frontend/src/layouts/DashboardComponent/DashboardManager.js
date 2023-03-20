import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faBarsStaggered,
  faDollar,
  faMessage,
  faSignal,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { logo } from '../../assets/images'

function DashboardManager({ ...props }) {
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
    <div className="w-64 bg-white">
      <div className='sticky top-0'>
        <Link
          to="/"
          className="flex flex-col items-center sm:flex-row box-border"
        >
          <img src={logo} alt="" />
          <h3 className="ml-12 sm:ml-0 text-green-800 text-xl">Dashboard</h3>
        </Link>
        {/*//* manager  */}
        <div className="flex flex-col justify-center pl-5">
          {arrayDashboard.map((item) => {
            return (
              <span
                className={"h-12 flex items-center hover:bg-primary hover:text-white cursor-pointer my-[2px] rounded-md box-border px-4 " + (window.location.href.endsWith(item.link) ? "bg-primary text-white" : "")}
                key={item.name}
              >
                <FontAwesomeIcon icon={item.icon} />
                <Link to={item.link} className="ml-2" > {item.name}</Link>
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DashboardManager
