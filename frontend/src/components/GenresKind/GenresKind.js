import React from 'react'
import { genresHorror } from '../../assets/images'
export default function GenresKind(props) {
  return (
    <div className={`genres-detail relative overflow-hidden rounded-3xl cursor-pointer`}>
      <div className="img overflow-hidden w-[450px] rounded-3xl">
        <img
          src={genresHorror}
          alt=""
          className="rounded-3xl hover:scale-125 transition-transform w-full h-full"
        />
      </div>
      <p className="absolute xl:top-3/4 left-10 text-white font-normal text-4xl xl:text-3xl lg:text-2xl md:text-[22px] md:top-2/3 sm:text-[30px] mobile:top-2/3">
        {props.name}
      </p>
    </div>
  )
}
