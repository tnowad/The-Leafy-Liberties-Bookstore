import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faList,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { logo } from '../../../assets/images'
import ButtonPill from '../../../components/Button/ButtonPill'
import Dropdown from '../../../components/Dropdown/Dropdown'
import IconHeader from '../../../components/IconHeader/IconHeader'
import MenuLinks from '../../../components/Menu/MenuLinks'

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
            <>
              <FontAwesomeIcon className="mr-1" icon={faList} />
              Categories
            </>
          }
          options={[
            { label: <Link to="/products?category=echill">Category 1</Link> },
            { label: <Link to="/products?category=echill">Category 2</Link> },
            { label: <Link to="/products?category=echill">Category 3</Link> },
            { label: <Link to="/products?category=echill">Category 4</Link> },
            { label: <Link to="/products?category=echill">Category 5</Link> },
          ]}
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
          <div className="flex flex-col w-auto translate-y-10 mr-4">
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
