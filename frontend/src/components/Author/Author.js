import React from 'react'
import { arrowIcon, author } from '../../assets/images'
export default function Author() {
  return (
    <div className='author flex w-full justify-evenly items-center mb-4 mobile:flex-col lg:flex-row'>
      <div className="author-face">
        <img src={author} alt="" />
      </div>
      <p className="author-name font-normal whitespace-nowrap first-letter:text-2xl ">
        William Graham
      </p>
      <div className="detail-arrow cursor-pointer mobile:hidden xl:block">
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  )
}
/*
?Idea: Improve performance by lazy loading the author image
!Important: Add PropTypes to validate props values
Todo: Replace hard-coded values with dynamic values

import { FiChevronRight } from 'react-icons/fi';
import authorImage from '../../assets/images/author.jpg';

export default function AuthorCard({ name, imageUrl, onClick }) {
  return (
    <figure className="author-card flex w-full justify-evenly items-center mb-4 mobile:flex-col lg:flex-row">
    <img src={imageUrl || authorImage} alt={`${name} Profile`} className="author-image rounded-full" />
    <figcaption className="author-details flex flex-col items-center text-center">
        <h2 className="author-name font-medium text-lg">{name || 'William Graham'}</h2>
        {onClick && (
          <div className="arrow-icon cursor-pointer" onClick={onClick}>
          <FiChevronRight />
          </div>
          )}
          </figcaption>
    </figure>
    );
  }
*/
