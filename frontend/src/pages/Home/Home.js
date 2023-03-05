import React from 'react'
import { Link } from 'react-router-dom'
import {
  homeImg,
  bestOffer,
  genresHorror,
  productImg,
  star,
} from '../../assets/images'
import Product from '../../components/Product/index'
import Author from '../../components/Author/index'
function Home() {
  return (
    <div className="home flex justify-center w-full flex-col items-center">
      <div className="w-full">
        <img src={homeImg} alt="homeImg" />
      </div>
      <div className="container">
        <div className="best-selling flex justify-between items-center text-center">
          <h2 className="text-3xl my-4">Bestselling Books </h2>
          <span className="w-3/4 h-px bg-gray-600"></span>
          <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl">
            View All
          </Link>
        </div>
        <div className="bestselling-products w-full overflow-x-scroll relative">
          <ul className="list-products grid grid-flow-col gap-5">
            <li>
              <Product width="w-56"></Product>
            </li>
            <li>
              <Product width="w-56"></Product>
            </li>
            <li>
              <Product width="w-56"></Product>
            </li>
            <li>
              <Product width="w-56"></Product>
            </li>
            <li>
              <Product width="w-56"></Product>
            </li>
            <li>
              <Product width="w-56"></Product>
            </li>
            <li>
              <Product width="w-56"></Product>
            </li>
            <li>
              <Product width="w-56"></Product>
            </li>
            <li>
              <Product width="w-56"></Product>
            </li>
            <li>
              <Product width="w-56"></Product>
            </li>
          </ul>
        </div>
        <div className="popular-books flex justify-between items-center text-center">
          <h2 className="text-3xl my-4">Popular Books </h2>
          <span className="w-3/4 h-px bg-gray-600"></span>
          <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl">
            View All
          </Link>
        </div>
        <div className="popular-products flex">
          <div className="grid-content w-3/4">
            <ul className="list grid grid-rows-2 grid-flow-col">
              <li>
                <Product width="w-56"></Product>
              </li>
              <li>
                <Product width="w-56"></Product>
              </li>
              <li>
                <Product width="w-56"></Product>
              </li>
              <li>
                <Product width="w-56"></Product>
              </li>
              <li>
                <Product width="w-56"></Product>
              </li>
              <li>
                <Product width="w-56"></Product>
              </li>
              <li>
                <Product width="w-56"></Product>
              </li>
              <li>
                <Product width="w-56"></Product>
              </li>
            </ul>
          </div>
          <div className="best-offer relative w-1/4">
            <div className="w-full">
              <img src={bestOffer} alt="" className="rounded-2xl" />
            </div>
            <div className="offer-desc absolute top-3/4 left-14">
              <p className="text-lg  text-white font-normal">Best Offer</p>
              <p className="text-4xl">Save 50%</p>
              <button className=" bg-white w-32 text-lg text-pink-400 font-bold p-2 rounded-full mt-3">
                See more
              </button>
            </div>
          </div>
        </div>
        <div className="genres-books flex justify-between items-center text-center">
          <h2 className="text-3xl my-4">Genres Books </h2>
          <span className="w-3/4 h-px bg-gray-600"></span>
          <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl">
            View All
          </Link>
        </div>
        <div className="genres-books-detail grid grid-flow-col grid-cols-3 mb-10 gap-6">
          <div className="genres-detail relative overflow-hidden rounded-3xl cursor-pointer">
            <div className="img">
              <img
                src={genresHorror}
                alt=""
                className="rounded-3xl hover:scale-150 transition-transform duration-300"
              />
            </div>
            <p className="absolute top-3/4 left-10 text-white font-normal text-4xl">
              Fantasy
            </p>
          </div>
          <div className="genres-detail relative overflow-hidden rounded-3xl cursor-pointer">
            <div className="img">
              <img
                src={genresHorror}
                alt=""
                className="rounded-3xl hover:scale-150 transition-transform duration-300"
              />
            </div>
            <p className="absolute top-3/4 left-10 text-white font-normal text-4xl">
              Fantasy
            </p>
          </div>
          <div className="genres-detail relative overflow-hidden rounded-3xl cursor-pointer">
            <div className="img">
              <img
                src={genresHorror}
                alt=""
                className="rounded-3xl hover:scale-150 transition-transform duration-300"
              />
            </div>
            <p className="absolute top-3/4 left-10 text-white font-normal text-4xl">
              Fantasy
            </p>
          </div>
        </div>
        <div className="bottom-body-content flex mb-5">
          <div className="popular-author w-1/4 bg-orange-50 p-5 rounded-2xl mr-10">
            <div className="header-table text-2xl border-0 border-solid border-b-2 mb-6 p-3">
              <p>Popular Author</p>
            </div>
            <div>
              <ul className="author-menu">
                <li className="cursor-pointer">
                  <Author />
                </li>
                <li className="cursor-pointer">
                  <Author />
                </li>
                <li className="cursor-pointer">
                  <Author />
                </li>
                <li className="cursor-pointer">
                  <Author />
                </li>
                <li className="cursor-pointer">
                  <Author />
                </li>
                <li className="cursor-pointer">
                  <Author />
                </li>
                <li className="cursor-pointer">
                  <Author />
                </li>
              </ul>
            </div>
          </div>
          <div className="author-bestselling w-3/4">
            <div className="author-bestselling-books flex justify-between items-center text-center">
              <h2 className="text-2xl my-4">Bestselling Books </h2>
              <span className="w-2/3 h-px bg-gray-600"></span>
              <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl">
                View All
              </Link>
            </div>
            <div className="list-author-bestselling">
              <div className="top-product flex">
                <div className="top-img w-1/2 h-max">
                  <img src={productImg} alt="" className="w-56 h-64" />
                </div>
                <div className="top-product-detail h-56 flex flex-col justify-between">
                  <p className="top-product-name text-3xl">Misty Figueroa</p>
                  <div className="rate">
                    <img src={star} alt="" />
                  </div>
                  <p className="top-product-author font-bold">Misty Figueroa</p>
                  <div className="top-product-desc">
                    Est numquam harum aut ut. Pariatur cum blanditiis est
                    delectus accusamus eveniet. Quis fugiat eligendi magni eos
                    dignissimos numquam.Quis ipsum incididunt non minim elit
                    veniam qui voluptate voluptate pariatur veniam ex ipsum.
                  </div>
                  <p className="top-product-price mt-1 text-lg font-bold">
                    150.000VNĐ
                  </p>
                </div>
              </div>
              <div className="list-top-product-by-author mt-2">
                <ul className="grid grid-flow-col grid-rows-2">
                  <li>
                    <Product class="flex mb-3" width="w-80" flex="flex flex-col"/>
                  </li>
                  <li>
                    <Product class="flex" width="w-80" />
                  </li>
                  <li>
                    <Product class="flex" width="w-80"/>
                  </li>
                  <li>
                    <Product class="flex" width="w-80"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
