import React from 'react'
import '../../../reset.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { bigLogo } from '../../../assets/images'
import MenuLinks from '../../../components/Menu/MenuLinks'
// import {Button}
function Footer() {
  return (
    <footer className="flex justify-center w-full flex-col items-center border-0 border-solid border-t-2 border-gray-400 mt-4 pt-5">
      <div className="container sm:grid sm:m-auto lg:flex">
        <div className="left-container border-0 border-solid border-gray-400 pr-3 sm:border-r-0 sm:border-b-2 lg:border-r-2 lg:border-b-0 mobile:p-0">
          <div className="sm:justify-center sm:items-center lg:flex lg:justify-start">
            <div className="flex justify-center items-center">
              <img src={bigLogo} alt="logo"/>
            </div>
            <div className="flex flex-col justify-center lg:flex mobile:hidden">
              <p className="text-3xl border-0 border-solid border-b-2 border-gray-400 pb-1">
                Leaf Liberty
              </p>
              <p className="">Book online store website</p>
            </div>
          </div>
          <div className="description">
            <p className="text-base mt-3 p-3 font-normal mobile:text-center lg:text-left">
              The LeafLiberty is a Book Store E-commerce Website Designed by
              Tuan, Phat, Chinh, Bao
            </p>
          </div>
          <div className="w-full h-12 mt-6 pl-3">
            <div className="flex justify-evenly">
              <FontAwesomeIcon icon={faFacebookF} size="2x" color="#999999" />
              <FontAwesomeIcon icon={faYoutube} size="2x" color="#999999" />
              <FontAwesomeIcon icon={faInstagram} size="2x" color="#999999" />
              <FontAwesomeIcon icon={faTwitter} size="2x" color="#999999" />
            </div>
          </div>
        </div>
        <div className="right-container grid grid-cols-2 sm:grid-cols-4 justify-center text-center sm:w-full sm:mt-7 lg:w-3/4">
          <div className="explore">
            <button className="text-xl font-medium mb-2">Explore</button>
            <MenuLinks
              className="text-gray-600"
              items={[
                { name: 'About us', link: '/' },
                { name: 'Site map', link: '/' },
                { name: 'Bookmarks', link: '/' },
                { name: 'Pricing table', link: '/' },
              ]}
            />
          </div>
          <div className="our-services">
            <button className="text-xl font-medium mb-2">
              Our services
            </button>
            <MenuLinks
              className="text-gray-600"
              items={[
                { name: 'Help center', link: '/' },
                { name: 'Product recalls', link: '/' },
                { name: 'Accessibility', link: '/' },
                { name: 'Store pickup', link: '/' },
                { name: 'Membership', link: '/' },
              ]}
            />
          </div>
          <div className="categories">
            <button className="text-xl font-medium mb-2">Categories</button>
            <MenuLinks
              className="text-gray-600"
              items={[
                { name: 'Action', link: '/' },
                { name: 'Comedy', link: '/' },
                { name: 'Horror', link: '/' },
                { name: 'Kids', link: '/' },
                { name: 'Drama', link: '/' },
              ]}
            />
          </div>
          <div className="contact">
            <button className="text-xl font-medium mb-2">
              Get Contact
            </button>
            <MenuLinks
              className="text-gray-600"
              items={[
                { name: 'SGU University', link: '/' },
                { name: 'HCM City, VietNam', link: '/' },
                { name: '0123456789', link: '/' },
                { name: '0123456789', link: '/' },
                { name: 'sgu@edu.vn', link: '/' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="w-full border-0 border-solid border-t-2 border-gray-400 text-center pt-4 mt-6 text-gray-500">
        <p>
          The Leaf Liberty Bookstore E-commerce Website - © 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
export default Footer
