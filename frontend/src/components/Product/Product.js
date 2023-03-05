import React from 'react'
import { productImg, star } from '../../assets/images'

export default  function Product(props) {
  return (
    <div className={`product-info h-fit ${props.class} ${props.width}`} >
      <div className="img w-56 h-full">
        <img src={productImg} alt="" />
      </div>
      <div className={`product-body w-full p-2 text-lg font-medium ${props.with_content} ${props.flex}`}>
        <div className={`product-name`}>
          My Dearest Darkest
        </div>
        <div className="product-rate">
            <img src={star} alt="" />
        </div>
        <div className="product-author text-sm">
          Enrique Wallace
        </div>
        <div className="desc">
          {props.desc}
        </div>
        <div className="product-price p-0 text-primary-900 font-semibold">
          150.000VND
        </div>
      </div>
    </div>
  )
}
