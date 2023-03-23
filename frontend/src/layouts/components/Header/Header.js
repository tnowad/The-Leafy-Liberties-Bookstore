import { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
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
import Search from '../../../components/Search'

import { useNavigate } from 'react-router-dom'

function Header() {
  const [isIconsVisible, setIconsVisibility] = useState(false)
  const navigate = useNavigate()
  const toggleIconsVisibility = () => {
    setIconsVisibility(!isIconsVisible)
  }

  return (
    <header className="flex justify-center w-full sticky top-0 bg-white z-10 border-0 border-solid border-gray-200 border-b-[1px]">
      <div className="mt-5 h-24 container flex justify-between items-center">
        <Link to="/" className="w-48">
          <img src={logo} alt="logo" className="h-20" />
        </Link>
        <div className="hidden sm:block w-full max-w-[140px]">
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
        </div>
        <div className="w-full box-border px-10">
          <Search
            placeholder="Search Products..."
            onSearch={(searchQuery) => {
              navigate(`/products?search=${searchQuery}`)
            }}
          />
        </div>

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
