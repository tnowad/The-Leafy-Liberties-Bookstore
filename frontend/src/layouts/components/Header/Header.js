import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faList,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

import { logo } from '../../../assets/images'
import ButtonPill from '../../../components/Button/ButtonPill'
import Dropdown from '../../../components/Dropdown/Dropdown'
import MenuLinks from '../../../components/Menu/MenuLinks'

function Header() {
  return (
    <header className="flex justify-center w-full sticky top-0 bg-white">
      <div className="mt-5 container flex justify-between items-center">
        <img src={logo} alt="logo" className="h-20" />
        {/* button dropdown */}
        <Dropdown
          trigger={
            <ButtonPill>
              <FontAwesomeIcon icon={faList} />
              <p className="px-4">Categories</p>
            </ButtonPill>
          }
          menu={
            <div className="absolute top-32 h-full bg-white">
              <MenuLinks
                items={[
                  { name: 'Category 1', link: '/category-1' },
                  { name: 'Category 2', link: '/category-2' },
                  { name: 'Category 3', link: '/category-3' },
                ]}
              />
            </div>
          }
        />
        {/* Search form */}
        <form className="flex items-center justify-center w-1/2 h-10 bg-gray-100 rounded-full">
          <input
            type="text"
            className="pl-5 w-full h-full bg-transparent"
            placeholder="Search products..."
          />
          <button className="flex items-center justify-center w-10 h-10">
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
