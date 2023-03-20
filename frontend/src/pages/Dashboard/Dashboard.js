import React from 'react'
import { useState } from 'react'
import DashboardManager from '../../layouts/DashboardComponent/DashboardManager'
import GeneralStatistics from '../../components/GeneralStatistics/GeneralStatistics'
import {
  faArrowTrendUp,
  faUserGroup,
  faDollarSign,
  faBookBible,
} from '@fortawesome/free-solid-svg-icons'
import Chart from 'react-apexcharts'
import {Progress} from 'flowbite-react'
function Dashboard() {
  const options = {
    series: [
      {
        name: 'Profit',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Loss',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
    ],
    chart: {
      type: 'bar',
      height: 300,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    // tooltip: {
    //   y: {
    //     formatter: function (val) {
    //       return '$ ' + val + ' thousands'
    //     },
    //   },
    // },
  }
  return (
    <div className="w-full bg-neutral-100">
      <div className="flex">
        <DashboardManager color="Dashboard" />
        <div className="mt-10 min-h-screen w-full overflow-x-scroll xl:w-4/5 xl:overflow-x-hidden px-24">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Dashboard</h1>
            {/* toggle the visibility of the form when the button is clicked */}
            <button className="w-5 h-5 text-2xl font-semibold">+</button>
          </div>
          <div className="top-wrap flex justify-between items-center flex-wrap">
            <GeneralStatistics
              iconic={faArrowTrendUp}
              text="Sales"
              money="$20.4K"
              desc="We have sold 10K items"
              className="bg-blue-400 border-blue-400 shadow-[0_0_5px_1px_rgba(164,202,254,0.3)] shadow-blue-400"
            />
            <GeneralStatistics
              iconic={faDollarSign}
              text="Total Revenues"
              money="100K"
              desc="Available to pay out"
              className="bg-green-400 border-green-400 shadow-[0_0_5px_1px_rgba(49,196,141,0.3)] shadow-green-400"
            />
            <GeneralStatistics
              iconic={faUserGroup}
              text="New Customer"
              money="203"
              desc="More customer more money"
              className="bg-orange-400 border-orange-400 shadow-[0_0_5px_1px_rgba(255,138,76,0.3)] shadow-orange-400"
            />
          </div>
          <div className="body-wrap mt-8 flex justify-between items-start flex-wrap">
            <div className="chart w-[70$] px-6 py-4 bg-white rounded-2xl">
              <div className="total-revuenes">
                <p className="font-semibold text-2xl">Total Revuenes</p>
                <p className="mt-2 font-bold text-lg">$50.4K</p>
              </div>
              <Chart
                series={options.series}
                options={options.plotOptions}
                type="bar"
                width={830}
                height={350}
              />
            </div>
            <div className="most-sold-items w-[31.5%] py-4 px-4 bg-white rounded-2xl">
              <p className="font-bold text-2xl mb-5">Most Sold Items</p>
              <div className="flex flex-col gap-4">
                <div className="text-base font-medium">Dark</div>
                <Progress progress={75} color="dark" />
                <div className="text-base font-medium text-blue-700">Blue</div>
                <Progress progress={45} color="blue" />
                <div className="text-base font-medium text-red-700">Red</div>
                <Progress progress={30} color="red" />
                <div className="text-base font-medium text-green-700">
                  Green
                </div>
                <Progress progress={85} color="green" />
                <div className="text-base font-medium text-yellow-700">
                  Yellow
                </div>
                <Progress progress={65} color="yellow" />
                <div className="text-base font-medium text-yellow-700">
                  Yellow
                </div>
                <Progress progress={25} color="yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
