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
    <header className="flex justify-center w-full sticky top-0 bg-white z-10">
      <div className="mt-5 container flex justify-between items-center">
        <img src={logo} alt="logo" className="h-20" />
        {/* button dropdown */}
        <Dropdown
          trigger={
            <ButtonPill className="hidden lg:flex">
              <FontAwesomeIcon className="mr-1" icon={faList} />
              Categories
            </ButtonPill>
          }
          menu={
            <div
              className="p-5 absolute top-24 h-full bg-white box-border
            border border-solid border-gray-400 rounded-lg"
            >
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
            <FontAwesomeIcon
              className=' className="cursor-pointer text-gray-300 transition-all hover:text-green-800 "'
              icon={faSearch}
            />
          </button>
        </form>

        {/* List icons */}
        <div className="w-20 flex justify-between">
          <FontAwesomeIcon
            className="cursor-pointer text-gray-300 hover:text-green-800 transition-all"
            icon={faUser}
          />
          <span className="relative bottom-1.5">|</span>
          <FontAwesomeIcon
            className="cursor-pointer text-gray-300 hover:text-green-800 transition-all"
            icon={faHeart}
          />
          <span className="relative bottom-1.5">|</span>
          <FontAwesomeIcon
            className="cursor-pointer text-gray-300  hover:text-green-800 transition-all"
            icon={faShoppingCart}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
