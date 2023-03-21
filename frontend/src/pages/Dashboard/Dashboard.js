import React from 'react'
import { useState } from 'react'
import DashboardMenu from '../../layouts/DashboardComponent/DashboardMenu'
import GeneralStatistics from '../../components/GeneralStatistics/GeneralStatistics'
import {
  faArrowTrendUp,
  faUserGroup,
  faDollarSign,
  faBookBible,
} from '@fortawesome/free-solid-svg-icons'
import Chart from 'react-apexcharts'
import { Progress } from 'flowbite-react'
import { Link } from 'react-router-dom'

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
      height: '350px',
      width: '900px',
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
        text: '$(thousands)',
      },
    },
    fill: {
      opacity: 1,
      // colors: ['#F44336', '#E91E63'],
    },
    responsive: [
      {
        breakpoint: 1670,
        options: {
          chart: {
            width: '750',
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: false,
            },
          },
        },
      },
      {
        breakpoint: 1550,
        options: {
          chart: {
            width: '650',
          },
        },
      },
      {
        breakpoint: 1440,
        options: {
          chart: {
            width: '950',
          },
        },
      },
      {
        breakpoint: 1305,
        options: {
          chart: {
            width: '800',
          },
        },
      },
      {
        breakpoint: 1201,
        options: {
          chart: {
            width: '950',
          },
        },
      },
      {
        breakpoint: 1105,
        options: {
          chart: {
            width: '800',
          },
        },
      },
      {
        breakpoint: 982,
        options: {
          chart: {
            width: '700',
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: false,
            },
          },
        },
      },
      {
        breakpoint: 828,
        options: {
          chart: {
            type: 'bar',
            width: '600',
            height: '500',
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            },
          },
        },
      },
      {
        breakpoint: 665,
        options: {
          chart: {
            width: '450',
          },
        },
      },
      {
        breakpoint: 580,
        options: {
          chart: {
            width: '350',
          },
        },
      },
    ],
  }
  return (
    <div className="w-full bg-neutral-100">
      <div className="w-full my-0 mx-auto overflow-x-hidden">
        <div className="mt-10 min-h-screen box-border w-full px-10 mobile:px-5">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">
              {window.location.pathname
                .split('/')
                .map(
                  (item) => item.charAt(0).toUpperCase() + item.substring(1)
                )}
            </h1>
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
          <div className="body-wrap w-full mt-8 flex justify-between items-start flex-wrap">
            {/* <div className="chart 2xl:w-[65.5%] px-6 py-4 bg-white rounded-2xl shadow-lg mobile:w-full">
              <div className="total-revuenes">
                <p className="font-semibold text-2xl">Total Revuenes</p>
                <p className="mt-2 font-bold text-lg">$50.4K</p>
              </div>
              <Chart
                series={options.series}
                options={options}
                type={options.chart.type}
                width={options.chart.width}
                height={options.chart.height}
              />
            </div> */}
            <div className="most-sold-items 2xl:w-[31.5%] py-4 px-4 bg-white rounded-2xl shadow-lg mobile:w-full mobile:mt-5 2xl:mt-0">
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
          <div className="table-statistics my-8 shadow-lg cursor-pointer rouded-2xl">
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 rounded-2xl">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b hover:bg-gray-200 transition-opacity">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 border-b hover:bg-gray-200 transition-opacity">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b hover:bg-gray-200 transition-opacity">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 border-b hover:bg-gray-200 transition-opacity">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b hover:bg-gray-200 transition-opacity">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 border-b hover:bg-gray-200 transition-opacity">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
