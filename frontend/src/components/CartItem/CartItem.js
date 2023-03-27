import React from 'react'
import { productImg } from '../../assets/images'
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function CartItem() {
  return (
    <div className="w-full">
      <div className="item p-4 border-0 border-solid border-b-[1px] border-gray-200">
        <div className="item-detail flex justify-between items-center">
          <div className="item-img w-36">
            <img
              src={productImg}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="text">
            <p className="book-name text-2xl mb-2">Misty Figueroa</p>
            <p className="book-author text-base">Misty Figueroa</p>
          </div>
            <p className="price text-xl">150.000VNĐ</p>
          <div className="">
            <div className="count-section flex flex-row justify-between items-center gap-2 border-[1px] border-solid p-1 rounded-full w-full">
              <FontAwesomeIcon icon={faMinus} className="px-2" cursor="pointer"/>
              <input type="number" className="text-center counter w-10 border-none focus:outline-none text-lg" value="1"/>
              <FontAwesomeIcon icon={faPlus} className="px-2" cursor="pointer"/>
            </div>
          </div>
          <p className="counter-price text-xl">150.000VNĐ</p>
        </div>
      </div>
    </div>
  )
}
