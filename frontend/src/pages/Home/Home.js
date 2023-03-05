import React from 'react'
import { Link } from 'react-router-dom'
import { homeImg } from '../../assets/images'

function Home() {
  return (
    <div className="home flex justify-center w-full flex-col items-center">
        <div className="w-full">
          <img src={homeImg} alt="homeImg" />
        </div>
      <div className="container">
        <div className="best-selling flex justify-between items-center text-center">
          <h2 className="text-3xl mb-3 mb-md-0">Bestselling Books </h2>
          <span className='w-3/4 h-px bg-gray-600'></span>
          <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl" >View All</Link>
        </div>
        <div className="bestselling-products">
          <ul className="list-products">

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
