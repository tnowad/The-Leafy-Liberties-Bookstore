import React from 'react'
import { Link } from 'react-router-dom'
export default function Bodyheader(props) {
  return (
    <div className={`best-selling flex justify-between items-center text-center ${props.class}`}>
      <h2 className={`my-4 ${props.text_size} `}>{props.name} </h2>
      <span className={`h-px bg-gray-600 ${props.width}`}></span>
      <Link className="w-32 text-base bg-primary-900 text-white p-2 rounded-3xl">
        View All
      </Link>
    </div>
  )
}
