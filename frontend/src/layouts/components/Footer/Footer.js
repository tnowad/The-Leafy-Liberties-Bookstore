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

function Footer() {
  return (
    <footer className="flex justify-center w-full flex-col items-center">
      <div className="container flex">
        <div className="left-container w-[50%] border-0 border-solid border-r-2 border-gray-400 pr-3">
          <div className="grid grid-cols-1 lg:flex">
            <div className="w-28">
              <img src={bigLogo} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-3xl border-0 border-solid border-b-2 border-gray-400 pb-1">
                Leaf Liberty
              </p>
              <p className="">Book online store website</p>
            </div>
          </div>
          <div className="description">
            <p className="text-base mt-3 p-3 font-normal">
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
        <div className="right-container w-3/4 grid grid-cols-2 sm:grid-cols-4 justify-center">
          <div className="explore">
            <h1 className="text-xl text-center font-medium mb-2">Explore</h1>
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
            <h1 className="text-xl text-center font-medium mb-2">
              Our services
            </h1>
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
            <h1 className="text-xl text-center font-medium mb-2">Categories</h1>
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
            <h1 className="text-xl text-center font-medium mb-2">
              Get Contact
            </h1>
            <MenuLinks
              className="text-gray-600"
              items={[
                { name: 'SGU University', link: '/' },
                { name: 'HCM City,VietNam', link: '/' },
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
          LeafLiberty Book Store Ecommerce Website - © 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
export default Footer
