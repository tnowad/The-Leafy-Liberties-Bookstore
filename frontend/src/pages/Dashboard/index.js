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

function Dashboard() {
  return (
    <div>
      <div>
        {/*//* manager  */}
        <div className="flex flex-col">
          {[
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
          ].map((item) => {
            return (
              <ButtonWhite
                key={item.name}
                title={item.name}
                className="text-blue-500"
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

export default Dashboard
