import React from 'react'
import {
  homeImg,
  bestOffer,
  genresHorror,
  productImg,
  star,
} from '../../assets/images'
import Product from '../../components/Product/index'
import Author from '../../components/Author/index'
import Bodyheader from '../../components/Body_Header'
import { ProductHorizontal } from '../../components/Product/index'
import GenresKind from '../../components/GenresKind/GenresKind'
function Home() {
  return (
    <div className="home flex justify-center w-full flex-col items-center">
      <div className="w-full">
        <img src={homeImg} alt="homeImg" />
      </div>
      <div className="container">
        <Bodyheader
          name="Bestselling Books"
          class="bestlling-books"
          text_size="text-3xl"
          width="w-3/4"
        />
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
        <Bodyheader
          name="Popular Books"
          class="popular-books"
          text_size="text-3xl"
          width="w-3/4"
        />
        <div className="popular-products flex">
          <div className="w-3/4 xl:w-full lg:w-full">
            <ul className="list grid grid-rows-popular-books 2xl:grid-cols-4 xl:grid-cols-popular-books lg:grid-cols-4 md:gird-cols-3">
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
          <div className="best-offer relative w-1/4 xl:block sm:hidden">
            <div className="w-full h-full">
              <img
                src={bestOffer}
                alt=""
                className="rounded-2xl h-full w-full"
              />
            </div>
            <div className="offer-desc absolute top-3/4 left-14 xl:left-10">
              <p className="text-lg text-white font-normal xl:text-base">
                Best Offer
              </p>
              <p className="text-4xl xl:text-3xl">Save 50%</p>
              <button className=" bg-white w-32 text-lg text-pink-400 font-bold p-2 rounded-full mt-3">
                See more
              </button>
            </div>
          </div>
        </div>
        <Bodyheader
          name="Genres Books"
          class="genres-books"
          text_size="text-3xl"
          width="w-3/4"
        />
        <div className="genres-books-detail grid grid-flow-col grid-cols-3 mb-10 gap-6">
          <GenresKind name="Fantasy" />
          <GenresKind name="Fantasy" />
          <GenresKind name="Fantasy" />
        </div>
        <div className="bottom-body-content flex mb-5">
          <div className="popular-author w-1/4 bg-orange-50 p-5 rounded-2xl xl:mr-10 lg:mr-2">
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
            <Bodyheader
              name="Bestselling Books"
              class="bestselling-books-author"
              text_size="text-2xl"
              width="w-2/3"
            />
            <div className="list-author-bestselling">
              <div className="top-product flex">
                <div className="h-max 2xl:w-1/2 xl:w-3/4 lg:w-3/5 lg:mr-5 xl:mr-0">
                  <img
                    src={productImg}
                    alt=""
                    className="2xl:h-64 xl:w-60 xl:h-60 lg:w-full lg:h-full"
                  />
                </div>
                <div className="top-product-detail h-56 flex flex-col justify-between">
                  <p className="top-product-name xl:text-3xl lg:text-2xl">Misty Figueroa</p>
                  <div className="rate">
                    <img src={star} alt="" />
                  </div>
                  <p className="top-product-author font-bold">Misty Figueroa</p>
                  <div className="top-product-desc text-ellipsis w-full">
                    Est numquam harum aut ut. Pariatur cum blanditiis est
                    delectus accusamus eveniet. Quis fugiat eligendi magni eos
                    dignissimos numquam.Quis ipsum incididunt non minim elit
                    veniam qui voluptate voluptate
                  </div>
                  <p className="top-product-price text-lg font-bold">
                    150.000VNĐ
                  </p>
                </div>
              </div>
              <div className="list-top-product-by-author mt-2">
                <ul className="grid grid-flow-col grid-rows-2">
                  <li>
                    <ProductHorizontal
                      class="flex mb-3"
                      width="w-80"
                      flex="flex flex-col"
                    />
                  </li>
                  <li>
                    <ProductHorizontal class="flex" width="w-80" />
                  </li>
                  <li>
                    <ProductHorizontal class="flex" width="w-80" />
                  </li>
                  <li>
                    <ProductHorizontal class="flex" width="w-80" />
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
