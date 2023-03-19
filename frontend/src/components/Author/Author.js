import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { author } from '../../assets/images'
export default function Author(){
  return (
    <div className="author-card flex w-full justify-evenly items-center mb-4 mobile:flex-col lg:flex-row">
      <div className="author-face">
        <img src={author} alt="" className='rounded-full'/>
      </div>
      <p className="author-name font-medium whitespace-nowrap text-lg ">
        {'William Graham'}
      </p>
      <div className="detail-arrow mobile:hidden xl:block">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  )
}

// export default function Author(name, Imageurl, onClick) {
//   return (
//     <div className="author-card flex w-full justify-evenly items-center mb-4 mobile:flex-col lg:flex-row">
//       <div className="author-face">
//         <img src={author} alt="" className='rounded-full'/>
//       </div>
//       <p className="author-name font-medium whitespace-nowrap text-lg ">
//         {name || 'William Graham'}
//       </p>
//       <div className="detail-arrow mobile:hidden xl:block" onClick={onClick}>
//         <FontAwesomeIcon icon={faChevronRight} />
//       </div>
//     </div>
//   )
// }

// ?Idea: Improve performance by lazy loading the author image
// !Important: Add PropTypes to validate props values
// Todo: Replace hard-coded values with dynamic values

// import { FiChevronRight } from 'react-icons/fi';
// import authorImage from '../../assets/images/author.jpg';

// export default function AuthorCard({ name, imageUrl, onClick }) {
//   return (
//     <figure className="author-card flex w-full justify-evenly items-center mb-4 mobile:flex-col lg:flex-row">
//     <img src={imageUrl || authorImage} alt={`${name} Profile`} className="author-image rounded-full" />
//     <figcaption className="author-details flex flex-col items-center text-center">
//         <h2 className="author-name font-medium text-lg">{name || 'William Graham'}</h2>
//         {onClick && (
//           <div className="arrow-icon cursor-pointer" onClick={onClick}>
//           <FiChevronRight />
//           </div>
//           )}
//           </figcaption>
//     </figure>
//     );
//   }
