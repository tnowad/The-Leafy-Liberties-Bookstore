import React from 'react'
import { useState } from 'react'
import DashboardManager from '../../layouts/DashboardComponent/DashboardManager'
import { Doughnut } from 'react-chartjs-2'
import { UserData } from './Data'

function Dashboard() {
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
          <div className="mt-5"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
