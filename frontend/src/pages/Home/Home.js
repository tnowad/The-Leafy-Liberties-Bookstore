import React from 'react'
import { Link } from 'react-router-dom'
import { homeImg,bestOffer,genresHorror } from '../../assets/images'
import Product  from '../../components/Product/index'

function Home() {
  return (
    <div className="home flex justify-center w-full flex-col items-center">
        <div className="w-full">
          <img src={homeImg} alt="homeImg" />
        </div>
      <div className="container">
        <div className="best-selling flex justify-between items-center text-center">
          <h2 className="text-3xl my-4">Bestselling Books </h2>
          <span className='w-3/4 h-px bg-gray-600'></span>
          <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl" >View All</Link>
        </div>
        <div className="bestselling-products w-full overflow-x-scroll relative">
          <ul className="list-products grid grid-flow-col gap-5">
            <li>
              <Product></Product>
            </li>
            <li>
              <Product></Product>
            </li>
            <li>
              <Product></Product>
            </li>
            <li>
              <Product></Product>
            </li>
            <li>
              <Product></Product>
            </li>
            <li>
              <Product></Product>
            </li>
            <li>
              <Product></Product>
            </li>
            <li>
              <Product></Product>
            </li>
            <li>
              <Product></Product>
            </li>
            <li>
              <Product></Product>
            </li>
          </ul>
        </div>
        <div className="popular-books flex justify-between items-center text-center">
          <h2 className="text-3xl my-4">Popular Books </h2>
          <span className='w-3/4 h-px bg-gray-600'></span>
          <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl" >View All</Link>
        </div>
        <div className="popular-products flex">
          <div className="grid-content w-3/4">
            <ul className='list grid grid-rows-2 grid-flow-col'>
              <li>
                <Product></Product>
              </li>
              <li>
                <Product></Product>
              </li>
              <li>
                <Product></Product>
              </li>
              <li>
                <Product></Product>
              </li>
              <li>
                <Product></Product>
              </li>
              <li>
                <Product></Product>
              </li>
              <li>
                <Product></Product>
              </li>
              <li>
                <Product></Product>
              </li>
            </ul>
          </div>
          <div className="best-offer relative w-1/4">
            <div className="w-full">
                <img src={bestOffer} alt="" className='rounded-2xl' />
            </div>
            <div className="offer-desc absolute top-3/4 left-14">
              <p className='text-lg  text-white font-normal'>Best Offer</p>
              <p className='text-4xl'>Save 50%</p>
              <button className=" bg-white w-32 text-lg text-pink-400 font-bold p-2 rounded-full mt-3">See more</button>
            </div>
          </div>
        </div>
        <div className="genres-books flex justify-between items-center text-center">
          <h2 className="text-3xl my-4">Genres Books </h2>
          <span className='w-3/4 h-px bg-gray-600'></span>
          <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl" >View All</Link>
        </div>
        <div className="genres-books-detail grid grid-flow-col grid-cols-3 mb-10 gap-6">
          <div className="genres-detail relative overflow-hidden rounded-3xl cursor-pointer">
            <div className="img">
              <img src={genresHorror} alt="" className='rounded-3xl hover:scale-150 transition-transform duration-300'/>
            </div>
            <p className='absolute top-3/4 left-10 text-white font-normal text-4xl'>Fantasy</p>
          </div>
          <div className="genres-detail relative overflow-hidden rounded-3xl cursor-pointer">
            <div className="img">
              <img src={genresHorror} alt="" className='rounded-3xl hover:scale-150 transition-transform duration-300'/>
            </div>
            <p className='absolute top-3/4 left-10 text-white font-normal text-4xl'>Fantasy</p>
          </div>
          <div className="genres-detail relative overflow-hidden rounded-3xl cursor-pointer">
            <div className="img">
              <img src={genresHorror} alt="" className='rounded-3xl hover:scale-150 transition-transform duration-300'/>
            </div>
            <p className='absolute top-3/4 left-10 text-white font-normal text-4xl'>Fantasy</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
