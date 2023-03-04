import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react'
import { bigLogo } from '../../../assets/images'
// import MenuLinks from '../../../components/Menu/MenuLinks'

function Footer() {
  return (
    <footer className="flex justify-center w-full">
      <div className="container h-[200vh]">
        <div className="left-container w-3/12 border-0 border-solid border-r-2 border-slate-900 pr-3">
          <div className="flex">
            <div className="w-28">
              <img src={bigLogo} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-3xl border-0 border-solid border-b-2 border-slate-900 pb-1">
                Leaf Liberty
              </p>
              <p className="">Book online store website</p>
            </div>
          </div>
          <div className="description">
            <p className="text-lg mt-3 pl-3">
              LeafLiberty is a Book Store Ecommerce Website Designed by Tuan,
              Phat ,Chinh, Bao
            </p>
          </div>
          <div className="w-full h-12 mt-6 pl-3">
            <div className = "flex justify-evenly">
              <FontAwesomeIcon icon={faFacebookF} size="2x" color='#999999'/>
              <FontAwesomeIcon icon={faYoutube} size="2x" color='#999999'/>
              <FontAwesomeIcon icon={faInstagram} size="2x" color='#999999'/>
              <FontAwesomeIcon icon={faTwitter} size="2x" color='#999999'/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
