import React from 'react'
import { useState } from 'react'
import DashboardManager from '../../layouts/DashboardComponent/DashboardManager'
import Chart from 'react-apexcharts'
function Dashboard() {
  const state = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
        plugins: {
          datalabels: {
            display: false,
          },
        },
      },
    },
    series: [70, 30],
    chartOptions: {
      labels: ['Apple'],
    },
  }
  return (
    <div className="w-full bg-neutral-100">
      <div className="flex">
        <DashboardManager color="Dashboard" />
        <div className="mt-10 min-h-screen w-full overflow-x-scroll xl:w-4/5 xl:overflow-x-hidden p-7">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Dashboard</h1>
            {/* toggle the visibility of the form when the button is clicked */}
            <button className="w-5 h-5 text-2xl font-semibold">+</button>
          </div>
          <div className="mt-5">
            <Chart
              options={state.chartOptions}
              series={state.series}
              type="donut"
              width="250"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
