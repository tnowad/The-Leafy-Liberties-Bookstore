import React from 'react'
import { productImg, star } from '../../assets/images'

export default function Product(props) {
  return (
    <div className="product-info w-full flex flex-col justify-center items-center p-1">
      <div className="w-56 h-full object-cover">
        <img src={productImg} alt="" className="w-full"/>
      </div>
      <div className={`product-body w-full p-1 text-lg font-medium flex flex-col justify-center items-center`}>
        <div className={`product-name`}>
          <a href="/book_detail">My Dearest Darkest</a>
        </div>
        <div className="product-rate">
          <img src={star} alt="" />
        </div>
        <div className="product-author text-sm">Enrique Wallace</div>
        <div className="desc">{props.desc}</div>
        <div className="product-price p-0 text-primary-900 font-semibold">
          150.000VND
        </div>
      </div>
    </div>
  )
}
