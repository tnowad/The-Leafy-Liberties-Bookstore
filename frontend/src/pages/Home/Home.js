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
import { Carousel } from 'flowbite-react'
import Slider from 'react-slick'
function Home() {
  var settings = {
    infinite: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    dots: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
  }
  return (
    <div className="home flex justify-center w-full flex-col items-center">
      <div className="xl:h-96 w-full md:h-80">
        <Carousel slideInterval={3000}>
          <img src={homeImg} alt="hello" />
          <img src={homeImg} alt="hello" />
          <img src={homeImg} alt="hello" />
          <img src={homeImg} alt="hello" />
          <img src={homeImg} alt="hello" />
        </Carousel>
      </div>
      <div className="container">
        <Bodyheader
          name="Bestselling Books"
          class="bestlling-books"
          text_size="text-3xl"
          width="w-3/4"
        />
        <div className="bestselling-products w-full relative">
          <Slider {...settings}>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </Slider>
        </div>
        <Bodyheader
          name="Popular Books"
          class="popular-books"
          text_size="text-3xl"
          width="w-3/4"
        />
        <div className="popular-products flex">
          <div className="w-3/4 md:w-full">
            <ul className="list grid grid-rows-popular-books 2xl:grid-cols-4 xl:grid-cols-popular-books lg:grid-cols-4 md:grid-cols-mdpopular-books">
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
        <div className="bottom-body-content flex mb-5 lg:gap-0 sm:gap-3">
          <div className="popular-author w-1/4 bg-orange-50 p-5 rounded-2xl xl:mr-10 lg:mr-2">
            <div className="header-table lg:text-2xl border-0 border-solid border-b-2 mb-6 p-3 whitespace-nowrap md:text-xl md:text-center">
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
                <div className="h-max w-full 2xl:w-1/2 xl:w-3/4 lg:w-3/5 sm:mr-5 xl:mr-0">
                  <img
                    src={productImg}
                    alt=""
                    className="2xl:h-64 xl:w-60 xl:h-60 md:w-96 md:h-64"
                  />
                </div>
                <div className="top-product-detail h-56 flex flex-col justify-between">
                  <p className="top-product-name xl:text-3xl lg:text-2xl">
                    Misty Figueroa
                  </p>
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
                <ul className="grid auto-cols-max grid-cols-2 gap-2">
                  <li>
                    <ProductHorizontal width="w-80" />
                  </li>
                  <li>
                    <ProductHorizontal width="w-80" />
                  </li>
                  <li>
                    <ProductHorizontal width="w-80" />
                  </li>
                  <li>
                    <ProductHorizontal width="w-80" />
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
