import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { infoBookDetail } from '../../assets/images'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import ButtonPill from '../../components/Button/ButtonPill'
import { star } from '../../assets/images'
import WindowSize from '../../components/WindowSize/WindowSize'
import { useState } from 'react'

function ProductDetail() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleSizeChange = (size) => {
    setWindowSize(size)
  }
  return (
    <div className="pt-3 p-5 sm:pt-10 sm:p-12 md:p-25 md:pt-12 lg:p-36 lg:pt-20 box-border">
      {/* // ? option */}
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div
          className="lg:mr-5 p-5 border border-solid border-gray-400 rounded-3xl box-border
          flex justify-center
        "
        >
          <img className="h-full" src={infoBookDetail} alt="book_detail" />
        </div>
        <div className="p-4 lg:p-10 mt-5 lg:mt-0 w-auto h-auto border border-solid border-gray-400 rounded-3xl box-border">
          <p className="p-1 mb-2 md:mb-6 text-[11px] sm:text-sm text-green-400 bg-gray-200 inline-block">
            IN STOCK
          </p>
          <br />
          <label className="text-2xl md:text-3xl lg:text-4xl">
            DIRE WOLF STAKES
          </label>
          <br />
          <p className="mt-4 sm:mt-8 md:mt-10 mr-1 inline-block text-[10px] sm:text-xs">
            Author :
          </p>
          <p className="inline-block text-[10px] sm:text-xs"> JESSICA MUNOZ</p>
          <span className="ml-5 inline-block">
            <img className="w-12 sm:w-20 inline-block" src={star} alt="" />
          </span>
          <p className="ml-5 mr-1 inline-block text-[10px] sm:text-xs text-gray-400">
            BKU :
          </p>
          <p className="mb-4 sm:mb-10 inline-block text-xs">65377017</p>
          <div className="border border-solid border-gray-400 box-border border-x-0">
            <span className="text-green-800 text-2xl sm:text-3xl">
              150.000 VNĐ
            </span>
            <p className="mt-4 sm:mt-8 text-xs">
              Aliquid nesciunt molestiae totam. Nostrum quidem officia dolores
              quo ut. Autem conse quatur molestiae quos tempore sunt.
            </p>
            <div className="mt-8 sm:mt-28 mb-6 sm:mb-10 flex flex-wrap sm:flex-row justify-around">
              <div className=" p-2 w-2/5 sm:w-3/12 flex justify-around border border-solid border-gray-400 rounded-3xl box-border">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <ButtonPill className="order-last w-3/4">
                <FontAwesomeIcon className="mr-1" icon={faShoppingCart} />
                Add to cart
              </ButtonPill>
              <div className="p-2 w-2/4 sm:w-3/12 flex justify-around border border-solid border-gray-400 rounded-3xl box-border">
                <FontAwesomeIcon className="pt-1" icon={faHeart} />
                <a href="/wishlist" src="" alt="" className="pt-1 text-xs">
                  <WindowSize onSizeChange={handleSizeChange} />
                  {window.innerWidth > 640 ? 'Add to wishlist' : ''}
                </a>
              </div>
            </div>
          </div>
          <p className="mt-5 inline-block text-gray-400">Categories : </p>
          <p className="ml-1 inline-block">Genre Fiction</p>
          <br />
          <p className="inline-block text-gray-400">Tags :</p>
          <p className="ml-1 inline-block">
            Books, Fiction, Romance - Contemporary
          </p>
          <div className="mt-10 w-1/5 flex justify-around">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
      {/* //? info detail */}
      <div className="mt-20">
        <ul className="flex justify-center box-content">
          <li className="mr-10 mb-5">
            <a
              href="/book_detail"
              src=""
              alt=""
              className="text-base sm:text-2xl"
            >
              Description
            </a>
          </li>
          <li className="mr-10 mb-5">
            <a
              href="/book_detail"
              src=""
              alt=""
              className="text-base sm:text-2xl"
            >
              Review
            </a>
          </li>
          <li className="mr-5 mb-2 sm:mr-10 sm:mb-5">
            <a
              href="/book_detail"
              src=""
              alt=""
              className="text-base sm:text-2xl"
            >
              Vendor
            </a>
          </li>
        </ul>
        <div className="p-2 border border-solid border-gray-400 rounded-3xl box-border sm:h-auto sm:py-10 sm:px-20">
          <p>
            Ut earum iure dolor tenetur. Et sit et est deserunt. Cumque
            voluptatum recusandae molestiae recusandae velit. Eaque quam
            repellat omnis.
            <br />
            <br />
            Nulla excepturi iure nobis rerum. Voluptatum aut doloribus quos amet
            ipsa voluptatibus eius aperiam. Occaecati reiciendis dicta adipisci
            eum aut velit.
            <br />
            <br />
            Consequuntur occaecati in maxime ab numquam voluptatem. Quo cumque
            harum quam dolorem. Suscipit quos ratione et nemo dolore. Et
            voluptatem molestiae sit vel. Libero qui rerum cum quo nesciunt et
            dolorem.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
