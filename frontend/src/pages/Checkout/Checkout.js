import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Checkout() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="container flex flex-wrap sm:flex-wrap md:flex-wrap xl:flex-nowrap">
        <div className="left-container w-full flex flex-col justify-center">
          <div className="bill-container p-5 border-0 rounded-2xl shadow-lg shadow-gray-300 w-full">
            <h2 className="bill-header font-bold text-xl mb-5">
              Billing Address
            </h2>
            <form action="//" className="sm:w-full md:w-full lg:px-0 xl:px-5 ">
              <div className="full-name flex">
                <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1 mr-10 w-full">
                  <legend className="px-1">First Name</legend>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your first name"
                    className="p-1"
                  />
                </fieldset>
                <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1 w-full">
                  <legend className="px-1">Last Name</legend>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your last name"
                    className="p-1"
                  />
                </fieldset>
              </div>
              <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1 w-full mt-3">
                <legend className="px-1">Email Address</legend>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your Email"
                  className="p-1"
                />
              </fieldset>
              <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1 mt-3">
                <legend className="px-1">Street Address</legend>
                <input type="email" name="" id="" className="p-1" />
              </fieldset>
              <div className="city flex justify-center mt-3">
                <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1 mr-10 w-full">
                  <legend className="px-1">City</legend>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your city name"
                    className="p-1"
                  />
                </fieldset>
                <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1 w-full">
                  <legend className="px-1">Phone</legend>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your last name"
                    className="p-1"
                  />
                </fieldset>
              </div>
              <div className="checkForAddress flex items-center mt-3">
                <input type="checkbox" name="" id="" className="w-4 h-4" />
                <span className="ml-1">
                  My billing and shipping address are the same
                </span>
              </div>
            </form>
          </div>
          <div className="shipping-container p-5 border-0 rounded-2xl shadow-lg shadow-gray-300 mt-5 w-full">
            <h2 className="bill-header font-bold text-xl mb-5">
              Shipping Method
            </h2>
            <div className="choice flex flex-col justify-between gap-5">
              <div className="first-choice border-[1px] border-gray-500 p-3 border-solid rounded-lg flex items-center justify-start">
                <input type="radio" name="options" id="" />
                <span className="font-bold text-lg ml-2">$2.99</span>
                <p className="ml-6">
                  USPS 1st Class With Tracking (5 - 13 days) COVID19 Delay
                </p>
              </div>
              <div className="second-choice border-[1px] border-gray-500 p-3 border-solid rounded-lg flex items-center justify-start">
                <input type="radio" name="options" id="" />
                <span className="font-bold text-lg ml-2">$9.00</span>
                <p className="ml-6">
                  USPS 1st Class With Tracking (3 - 5 days) COVID19 Delay
                </p>
              </div>
            </div>
          </div>
          <div className="payment-container p-5 border-0 rounded-2xl shadow-lg shadow-gray-300 mt-5 mb-10 w-full">
            <h2 className="payment-header font-bold text-xl mb-5">
              Payment method
            </h2>
            <div className="choice flex flex-col justify-between gap-5">
              <div className="paypal-choice border-[1px] border-gray-500 p-3 border-solid rounded-lg flex items-center justify-start">
                <input type="radio" name="payment-options" id="" />
                <span className="font-bold text-lg ml-2">Paypal</span>
                <p className="ml-6">
                  You will be redirected to the PayPal website after submitting
                  your order
                </p>
              </div>
              <div className="app-choice border-[1px] border-gray-500 p-3 border-solid rounded-lg flex items-center justify-start">
                <input type="radio" name="payment-options" id="" />
                <span className="font-bold text-lg ml-2">Momo</span>
                <p className="ml-6">
                  You will be redirected to the Momo website after submitting
                  your order
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container flex flex-col justify-start items-end w-full sm:w-full md:w-full mb-10 xl:w-3/4">
          <div className="order-preview p-5 border-0 rounded-2xl shadow-lg shadow-gray-300 mt-5 w-full md:w-full xl:w-3/4">
            <div className="header flex justify-between">
              <div className="left">
                <h2 className="font-bold text-xl">Order review</h2>
                <p className="number-items pl-2 pt-1">3 items in cart</p>
              </div>
              <div className="right w-3 h-3">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
          <div className="discount-container flex justify-between items-start p-5 border-0 rounded-2xl shadow-lg shadow-gray-300 mt-5 w-full md:w-full xl:w-3/4">
            <div className="discount-code font-bold text-xl mb-5">
              <h2>Discount Codes</h2>
            </div>
            <div className="right w-3 h-3">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="billing-summary p-5 border-0 rounded-2xl shadow-lg shadow-gray-300 mt-5 w-full md:w-full xl:w-3/4">
            <div className="header flex justify-between items-start">
              <div className="font-bold text-xl mb-5">
                <h2>Billing Summary</h2>
              </div>
              <div className="w-3 h-3">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <div className="body-summary">
              <div className="top-summary flex flex-col gap-5 border-0 border-solid border-gray-400 border-b-[1px] pb-5">
                <div className="subtotal flex justify-between items-center">
                  <p className="f">Subtotal</p>
                  <div className="subtotal-money font-bold">$3720,27</div>
                </div>
                <div className="discount flex justify-between items-center">
                  <p>Discount</p>
                  <div className="discount-money font-bold">-$3720,27</div>
                </div>
                <div className="membership flex justify-between items-center">
                  <p>Warranty (Platinum)</p>
                  <div className="membership-money font-bold">$3720,27</div>
                </div>
                <div className="shipping flex justify-between items-center">
                  <p>Shipping</p>
                  <div className="shipping-money font-bold">$3720,27</div>
                </div>
                <div className="tax flex justify-between items-center">
                  <p>Tax</p>
                  <div className="tax-money font-bold">$3720,27</div>
                </div>
              </div>
              <div className="bottom-summary mt-5">
                <div className="total-money flex justify-between items-center">
                  <h2 className="grand-total text-lg font-bold">Grand Total</h2>
                  <div className="grand-money font-bold">$3,439.00</div>
                </div>
                <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1 mr-10 w-full h-auto mt-4">
                  <legend className="px-2">Order Comment</legend>
                  <textarea
                    type="text"
                    name=""
                    id=""
                    placeholder="Type here..."
                    className="p-1 text-lg w-full"
                  />
                </fieldset>
                <div className="btn-pay w-full bg-primary text-center p-2 text-white rounded-lg mt-5 cursor-pointer hover:bg-primary-800 hover:transition-all">
                  <Link className="text-xl">
                    Pay $3,439.00
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
