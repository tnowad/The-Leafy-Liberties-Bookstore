import ButtonWhite from '../../components/Button/ButtonWhite'
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
    <div className="w-[32%] md:w-[15%] lg:w-[13%] bg-white">
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
            <ButtonWhite
              key={item.name}
              title={item.name}
              color={props.color}
              link={item.link}
            >
              <FontAwesomeIcon icon={item.icon} />
            </ButtonWhite>
          )
        })}
      </div>
    </div>
  )
}

export default DashboardManager
