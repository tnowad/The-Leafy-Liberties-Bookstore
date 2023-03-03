import { logo } from '../../../assets/images'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
  return (
    <header className="flex justify-center w-full sticky top-0 bg-white">
      <div className="container flex justify-between">
        <img src={logo} alt="logo" className="h-20" />
        {/* button */}
        <button className="flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full">
          test
        </button>
        {/* Search form */}
        <form className="flex items-center justify-center w-1/2 h-10 bg-gray-100 rounded-full">
          <input type="text" className="w-full h-full bg-transparent" />
          <button className="flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full">
            test
          </button>
        </form>

        {/* List icons */}
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  )
}

export default Header
