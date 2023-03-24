import React from 'react'
import { productImg } from '../../assets/images'
export default function CartItem() {
  return (
    <div className="w-full">
      <div className="item p-4 border-0 border-solid border-b-[1px] border-gray-100">
        <div className="item-detail">
          <div className="item-img w-44">
            <img
              src={productImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
