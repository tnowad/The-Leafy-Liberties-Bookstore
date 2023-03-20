import React from 'react'
import { Link } from 'react-router-dom'
export default function SectionTitle({ name = 'Title', link = '/', className = '' }) {
  return (
    <div className={`flex justify-between items-center text-center ${className}`}>
      <h2 className="my-4 whitespace-nowrap lg:text-xl xl:text-2xl 2xl:text-3xl mobile:text-xl">{name}</h2>
      <span className={`h-px bg-gray-600 w-full mx-2`} />
      <Link className="w-32 text-base bg-primary hover:bg-primary-800 text-white p-2 rounded-3xl" to={link}>
        View All
      </Link>
    </div>
  )
}
