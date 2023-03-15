import React from 'react'
import { genresHorror } from '../../assets/images'
export default function GenresKind(props) {
  return (
    <div className="genres-detail relative overflow-hidden rounded-3xl cursor-pointer">
      <div className="img">
        <img
          src={genresHorror}
          alt=""
          className="rounded-3xl hover:scale-150 transition-transform duration-300"
        />
      </div>
      <p className="absolute top-3/4 left-10 text-white font-normal text-4xl xl:text-3xl lg:text-2xl">
        {props.name}
      </p>
    </div>
  )
}
