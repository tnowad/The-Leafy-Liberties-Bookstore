import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faList,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import { logo } from '../../../assets/images'
import ButtonPill from '../../../components/Button/ButtonPill'
import Dropdown from '../../../components/Dropdown/Dropdown'
import MenuLinks from '../../../components/Menu/MenuLinks'
import { Link } from 'react-router-dom'
import IconHeader from '../../../components/IconHeader/IconHeader'

function Header() {
  const [isIconsVisible, setIconsVisibility] = useState(false)

  const toggleIconsVisibility = () => {
    setIconsVisibility(!isIconsVisible)
  }

  return (
    <header className="flex justify-center w-full sticky top-0 bg-white z-10">
      <div className="mt-5 h-24 container flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-20" />
        </Link>

        <Dropdown
          trigger={
            <ButtonPill className="hidden lg:flex">
              <FontAwesomeIcon className="mr-1" icon={faList} />
              Categories
            </ButtonPill>
          }
          menu={
            <div
              className="p-5 absolute top-[85px] h-full bg-white box-border
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
        <form className="flex items-center justify-center w-1/2 h-10 bg-gray-100 rounded-full">
          <input
            type="text"
            className="pl-5 w-full h-full bg-transparent rounded-tl-full rounded-bl-full ring-0"
            placeholder="Search products..."
          />
          <button className="flex items-center justify-center w-10 h-10">
            <FontAwesomeIcon
              className=' className="cursor-pointer text-gray-300 transition-all hover:text-green-800 "'
              icon={faSearch}
            />
          </button>
        </form>

        {isIconsVisible ? (
          <div className="flex flex-col w-auto mr-4">
            <button onClick={toggleIconsVisibility} className="md:hidden">
              <FontAwesomeIcon icon={faClose} />
            </button>
            <IconHeader />
          </div>
        ) : (
          <button onClick={toggleIconsVisibility} className="mr-5 md:hidden">
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        {isIconsVisible || <IconHeader className="hidden" />}
      </div>
    </header>
  )
}

export default Header
