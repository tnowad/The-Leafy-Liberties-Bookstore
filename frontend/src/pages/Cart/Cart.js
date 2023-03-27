import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem'

export default function Cart() {
  return (
    <div className="w-full my-10">
      <div className="container mx-auto">
        <div className="wrapper flex justify-between items-start gap-[2.5%]">
          <div className="cart-list w-[65%] h-[500px] overflow-y-scroll p-4 border-[1px] border-solid border-gray-400 rounded-2xl">
            {[...Array(5)].map((e, i) => {
              return <CartItem />
            })}
          </div>
          <div className="cart-bill w-[30%] p-4 border-[1px] border-solid border-gray-400 rounded-2xl">
            <p className="cart-bill-header text-2xl text-left py-3 border-0 border-b-[1px] border-solid border-gray-300 ">
              Cart Totals
            </p>
            <div className="total-bill flex justify-between items-center py-4">
              <span className="text-bill text-xl">Total:</span>
              <span className="money-bill text-xl">1500000VNĐ</span>
            </div>
            <button className="px-4 py-2 bg-primary-700 rounded-2xl text-white text-lg font-semibold hover:bg-primary-600 transition-all">
              <Link
                to="/checkout"
              >
                Check out
              </Link>
            </button>
          </div>
        </div>
        <div className="coupon-code flex my-8">
          <input type="text" name="" id="" placeholder="Enter coupon code" className="px-3 py-2 border-gray-400 border-solid border-[1px] rounded-2xl focus:outline-none" />
          <button className="ml-5 px-5 py-2 bg-primary-700 rounded-2xl text-white text-lg font-semibold hover:bg-primary-500 hover:text-primary transition-all">
              <Link
                // to="/checkout"
              >
                Apply
              </Link>
            </button>
        </div>
      </div>
    </div>
  )
}
