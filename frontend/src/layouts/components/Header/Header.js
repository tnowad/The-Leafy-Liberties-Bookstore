import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faList,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

import { logo } from '../../../assets/images'

function Header() {
  return (
    <header className="flex justify-center w-full sticky top-0 bg-white">
      <div className="mt-5 container flex justify-between">
        <img src={logo} alt="logo" className="h-20" />
        {/* button */}
        <button className="flex items-center justify-around w-44 h-10 text-white bg-primary rounded-full">
          <FontAwesomeIcon icon={faList} />
          <select className="bg-primary cursor-pointer">
            <option value="">Categories</option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
          </select>
          <div></div>
        </button>
        {/* Search form */}
        <form className="flex items-center justify-center w-1/2 h-10 bg-gray-100 rounded-full">
          <input
            type="text"
            className="pl-5 w-full h-full bg-transparent"
            placeholder="Search products..."
          />
          <button className="flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        {/* List icons */}
        <div className="w-20 flex justify-around">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  )
}

export default Header
