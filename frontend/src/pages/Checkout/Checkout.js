import React from 'react'
export default function Checkout() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="container flex justify-between items-center">
        <div className="left-container w-full flex flex-col">
          <div className="bill-container w-1/2 p-5 border-0 rounded-2xl shadow-lg shadow-gray-300">
            <h2 className="bill-header font-bold text-xl mb-5">
              Billing Address
            </h2>
            <form action="//" className="px-5">
              <div className="full-name flex justify-center">
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
              <div className="email-address mt-3">
                <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1">
                  <legend className="px-1">Email Address</legend>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Your Email"
                    className="p-1"
                  />
                </fieldset>
              </div>
              <div className="email-address mt-3">
                <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1">
                  <legend className="px-1">Street Address</legend>
                  <input type="email" name="" id="" className="p-1" />
                </fieldset>
              </div>
              <div className="full-name flex justify-center mt-3">
                <fieldset className="border-[1px] border-gray-600 border-solid rounded-md p-1 mr-10 w-full">
                  <legend className="px-1">City</legend>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your first name"
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
          <div className="payment-container w-1/2 p-5 border-0 rounded-2xl shadow-lg shadow-gray-300 mt-5">
            <h2 className="bill-header font-bold text-xl mb-5">
              Shipping Method
            </h2>
            <div className="choice flex flex-col justify-between gap-5">
              <div className="first-choice border-[1px] border-gray-500 p-3 border-solid rounded-lg flex items-center justify-start">
                <input type="radio" name="options" id="" />
                <span className="font-bold text-lg ml-2">$2.99</span>
                <p className='ml-6'>USPS 1st Class With Tracking (5 - 13 days) COVID19 Delay</p>
              </div>
              <div className="second-choice border-[1px] border-gray-500 p-3 border-solid rounded-lg flex items-center justify-start">
                <input type="radio" name="options" id="" />
                <span className="font-bold text-lg ml-2">$9.00</span>
                <p className='ml-6'>USPS 1st Class With Tracking (3 - 5 days) COVID19 Delay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
