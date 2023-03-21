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
import { Progress, Table } from 'flowbite-react'
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
        breakpoint: 920,
        options: {
          chart: {
            width: '650',
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
        breakpoint: 768,
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
        breakpoint: 665,
        options: {
          chart: {
            width: '450',
          },
        },
      },
      {
        breakpoint: 550,
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
      <div className="w-full my-0 mx-auto">
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
          <div className="body-wrap mt-8 flex justify-between items-start flex-wrap">
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
          <div className="table-statistics my-8 shadow-lg">
            <Table>
              <Table.Head className="text-[px]">
                <Table.HeadCell>Products</Table.HeadCell>
                <Table.HeadCell>Order ID</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Customer Name</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Amount</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                    Apple MacBook Pro 17"
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>15/05/2023</Table.Cell>
                  <Table.Cell>Hello World</Table.Cell>
                  <Table.Cell>Delivered</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <button className="text-lg text-white px-3 py-2 bg-primary-600 border border-solid rounded-lg">
                      •••
                    </button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                    Apple MacBook Pro 17"
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>15/05/2023</Table.Cell>
                  <Table.Cell>Hello World</Table.Cell>
                  <Table.Cell>Delivered</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <button className="text-lg text-white px-3 py-2 bg-primary-600 border border-solid rounded-lg">
                      •••
                    </button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                    Apple MacBook Pro 17"
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>15/05/2023</Table.Cell>
                  <Table.Cell>Hello World</Table.Cell>
                  <Table.Cell>Delivered</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <button className="text-lg text-white px-3 py-2 bg-primary-600 border border-solid rounded-lg">
                      •••
                    </button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                    Apple MacBook Pro 17"
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>15/05/2023</Table.Cell>
                  <Table.Cell>Hello World</Table.Cell>
                  <Table.Cell>Delivered</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <button className="text-lg text-white px-3 py-2 bg-primary-600 border border-solid rounded-lg">
                      •••
                    </button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                    Apple MacBook Pro 17"
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>15/05/2023</Table.Cell>
                  <Table.Cell>Hello World</Table.Cell>
                  <Table.Cell>Delivered</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <button className="text-lg text-white px-3 py-2 bg-primary-600 border border-solid rounded-lg">
                      •••
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
