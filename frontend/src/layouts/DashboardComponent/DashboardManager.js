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
    <div>
      <div>
        <Link to="/">
          <img src={logo} alt="" />
          <h3>Dashboard</h3>
        </Link>
        {/*//* manager  */}
        <div className="flex flex-col">
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
    </div>
  )
}

export default DashboardManager
