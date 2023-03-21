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
import SectionTitle from '../../components/SectionTitle'
import { ProductHorizontal } from '../../components/Product/index'
import GenresKind from '../../components/GenresKind/GenresKind'
import { Carousel } from 'flowbite-react'
import Slider from 'react-slick'
function Home() {
  var settings = {
    infinite: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  var settingsGenres = {
    infinite: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="flex justify-center w-full flex-col items-center">
      <div className="h-56 md:h-80 xl:h-96 w-full">
        <Carousel slideInterval={3000}>
          {[...Array(10)].map((e, i) => {
            return (
              <img src={homeImg} className="h-full object-cover" alt="hello" />
            )
          })}
        </Carousel>
      </div>
      <div className="container">
        <SectionTitle
          name="Bestselling Books"
          class="bestselling-books"
          text_size="text-3xl"
          width="w-3/4"
        />
        <div className="bestselling-products w-full relative">
          <Slider {...settings}>
            {[...Array(10)].map((e, i) => {
              return <Product />
            })}
          </Slider>
        </div>

        <SectionTitle
          name="Popular Books"
          class="popular-books"
          text_size="text-3xl"
          width="w-3/4"
        />
        <div className="flex">
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[...Array(12)].map((e, i) => {
                return <Product />
              })}
            </div>
          </div>
          <div className="hidden w-[25%] xl:block 2xl:w-1/3">
            <div className="w-full h-auto sticky top-32">
              <img
                src={bestOffer}
                alt=""
                className="rounded-2xl h-full w-full"
              />
              <div className="absolute top-3/4 text-center flex items-center flex-col w-full">
                <p className="text-lg text-white font-normal xl:text-base">
                  Best Offer
                </p>
                <p className="text-4xl xl:text-3xl text-white">Save 50%</p>
                <button className=" bg-white w-32 text-lg text-pink-400 font-bold p-2 rounded-full mt-3">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>

        <SectionTitle
          name="Genres Books"
          class="genres-books"
          text_size="text-3xl"
          width="w-3/4"
        />
        <div className="w-full relative mb-5">
          <Slider {...settingsGenres}>
            <GenresKind name="Fantasy" />
            <GenresKind name="Fantasy" />
            <GenresKind name="Fantasy" />
          </Slider>
        </div>

        <div className="flex mb-5 lg:gap-0 sm:gap-3 lg:flex-row mobile:flex-col">
          <div className="lg:w-1/4 bg-orange-50 lg:p-5 rounded-2xl xl:mr-10 lg:mr-2 mobile:w-full md:p-2 overflow-hidden lg:overflow-x-hidden">
            <div className="header-table lg:text-2xl border-0 border-solid border-b-2 mb-6 p-3 whitespace-nowrap md:text-xl mobile:text-center">
              <p>Popular Author</p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              {/* loop 7 times */}
              {[...Array(6)].map((e, i) => {
                return (
                  <div className="py-2">
                    <Author />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="author-bestselling lg:w-3/4 mobile:w-full">
            <SectionTitle
              name="Bestselling Books"
              class="bestselling-books-author"
              text_size="text-2xl"
              width="w-2/3"
            />
            <div className="list-author-bestselling">
              <div className=" h-fit top-product flex sm:w-full mobile:w-screen sm:gap-0 mobile:gap-2 sm:m-0">
                <div className="object-cover h-52 xl:w-72 mr-4 md:w-96 mobile:w-1/2">
                  <img src={productImg} alt="" className="w-full h-full" />
                </div>
                <div className="top-product-detail flex flex-col xl:justify-between sm:gap-0 lg:justify-start mobile:w-fit">
                  <p className="top-product-name xl:text-3xl lg:text-2xl">
                    Misty Figueroa
                  </p>
                  <div className="rate">
                    <img src={star} alt="" />
                  </div>
                  <p className="top-product-author font-bold">Misty Figueroa</p>
                  <div className="top-product-desc text-ellipsis sm:w-full sm:pr-20 inline mobile:text-sm mobile:w-3/4 mobile:h-fit">
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
                <ul className="grid auto-cols-max sm:grid-cols-2 gap-2">
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
