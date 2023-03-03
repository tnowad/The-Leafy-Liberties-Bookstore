import React from 'react'
import { bigLogo } from '../../../assets/images'

function Footer() {
  return (
    <footer className="flex justify-center w-full">
      <div className="container h-[200vh]">
        <div className="left-container w-3/12">
          <div className="flex">
            <div className="w-28">
              <img src={bigLogo} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-3xl border-b-4 border border-slate-900">
                Leaf Liberty
              </p>
              <p className="">Book online store website</p>
            </div>
          </div>
          <div className="description">
            <p className="text-lg mt-3">
              LeafLiberty is a Book Store Ecommerce Website Designed by Tuan,
              Phat ,Chinh, Bao
            </p>
          </div>
          <div className="social-media flex">
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
