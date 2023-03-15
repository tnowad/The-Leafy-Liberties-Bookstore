import React from 'react'
import { Link } from 'react-router-dom'
export default function Bodyheader(props) {
  return (
    <div className={`best-selling flex justify-between items-center text-center ${props.class}`}>
      <h2 className={`my-4 whitespace-nowrap xl:text-2xl 2xl:text-3xl ${props.text_size}`}>{props.name} </h2>
      <span className={`h-px bg-gray-600 xl:w-2/3 2xl:w-3/4 ${props.width}`}></span>
      <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl">
        View All
      </Link>
    </div>
  )
}
