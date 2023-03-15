import React from 'react'
import { arrowIcon,author } from '../../assets/images'
export default  function Author() {
  return (
    <div className='author flex w-full justify-evenly items-center mb-4'>
      <div className="author-face">
        <img src={author} alt="" />
      </div>
      <p className="author-name font-normal whitespace-nowrap first-letter:text-2xl ">
        William Graham
      </p>
      <div className="detail-arrow cursor-pointer lg:hidden xl:block">
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  )
}
