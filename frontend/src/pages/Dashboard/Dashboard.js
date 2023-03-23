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

import { dashboardData, productData } from '../Dashboard/Data'
import WindowSize from '../../components/WindowSize/WindowSize'
function Dashboard() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleSizeChange = (size) => {
    setWindowSize(size)
  }
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
        breakpoint: 888,
        options: {
          chart: {
            type: 'bar',
            width: '550',
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
        breakpoint: 740,
        options: {
          chart: {
            width: '450',
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: '350',
          },
        },
      },
      {
        breakpoint: 530,
        options: {
          chart: {
            width: '250',
          },
        },
      },
    ],
  }
  const tableThead = [
    { name: 'Products' },
    { name: 'Order ID' },
    { name: 'Date' },
    { name: 'Customer Name' },
    { name: 'Status' },
    { name: 'Amount' },
    { name: 'Action' },
  ]
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
          <div className="top-wrap box-border grid 2xl:grid-cols-4 xl:gap-5 lg:grid-cols-2 lg:gap-2">
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
            <GeneralStatistics
              iconic={faUserGroup}
              text="New Product"
              money="12"
              desc="More product for sales"
              className="bg-red-400 border-red-400 shadow-[0_0_5px_1px_rgba(255,138,76,0.3)] shadow-red-400"
            />
          </div>
          <div className="body-wrap w-full my-8 flex justify-between items-start flex-wrap">
            <div className="chart 2xl:w-[65.5%] px-6 py-4 bg-white rounded-2xl shadow-lg mobile:w-full">
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
            </div>
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
          <div className="table-statistics my-8 shadow-lg cursor-pointer rounded-2xl overflow-hidden bg-white">
            <div className="relative">
              <WindowSize onSizeChange={handleSizeChange} />
              {window.innerWidth > 882 ? (
                <table className="w-full text-sm text-left text-gray-500 rounded-2xl border-collapse overflow-hidden">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      {tableThead.map((item) => {
                        return (
                          <th
                            scope="col"
                            colSpan={item.action === 'Action' ? 2 : 1}
                            className="px-6 py-3"
                          >
                            {item.name}
                          </th>
                        )
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData.map((item) => {
                      return (
                        <tr className="bg-white border-b hover:bg-gray-200 transition-opacity">
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.products}
                          </td>
                          <td class="px-6 py-3">{item.order_id}</td>
                          <td class="px-6 py-3">{item.date}</td>
                          <td class="px-6 py-3">{item.name}</td>
                          <td class="px-6 py-3">{item.status}</td>
                          <td class="px-6 py-3">{item.amount}</td>
                          <td class="px-6 py-4">
                            <Link
                              to="#"
                              class="font-medium text-white px-4 py-2 bg-green-700 rounded-lg"
                            >
                              •••
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              ) : (
                <>
                  {dashboardData.map((item) => {
                    return (
                      <table className="w-full text-sm text-left text-gray-500 border-collapse overflow-hidden flex flex-row justify-between items-center border-0 border-solid border-gray-200 border-b-[1px]">
                        <thead className="text-xs text-gray-700 uppercase">
                          <tr className="flex flex-col">
                            {tableThead.map((item) => {
                              return (
                                <th scope="col" className="px-5 py-[14px] w-full">
                                  {item.name}
                                </th>
                              )
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white flex flex-col justify-between items-center">
                            <td className="px-5 py-[10px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {item.products}
                            </td>
                            <td class="px-5 py-[10px] w-full">{item.order_id}</td>
                            <td class="px-5 py-[10px] w-full">{item.date}</td>
                            <td class="px-5 py-[10px] w-full">{item.name}</td>
                            <td class="px-5 py-[10px] w-full">{item.status}</td>
                            <td class="px-5 py-[10px] w-full">{item.amount}</td>
                            <td class="px-5 py-[10px] w-full">
                              <Link
                                to="#"
                                class="font-medium text-white px-4 py-2 bg-green-700 rounded-lg"
                              >
                                •••
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
