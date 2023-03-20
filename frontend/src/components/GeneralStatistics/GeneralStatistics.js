import React from 'react'
import Chart from 'react-apexcharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
export default function GeneralStatistics(props) {
  return (
    <div className="mt-5 flex justify-between items-center p-6 bg-white rounded-2xl shadow-lg lg:w-full">
      <div className="hero-one flex flex-col gap-1">
        <p className="font-semibold text-sm">{props.text}</p>
        <p className="font-bold text-lg">{props.money}</p>
        <p className="text-gray-500">{props.desc}</p>
      </div>
      <div className={`icon w-20 border-solid p-3 rounded-2xl text-center ${props.className}`}>
        <FontAwesomeIcon icon={props.iconic} size="2xl" color="white" />
      </div>
    </div>
  )
}
