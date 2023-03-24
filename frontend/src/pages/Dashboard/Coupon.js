import React from 'react'
import { Link } from 'react-router-dom'
import { CouponData } from './Data'
import WindowSize from '../../components/WindowSize/WindowSize'
import { useState } from 'react'

function Coupon() {
  let i = 1
  const arrayTitle = [
    { name: 'No' },
    { name: 'Coupon Code' },
    { name: 'Description' },
    { name: 'Active From' },
    { name: 'Active to' },
    { name: 'Usage' },
    { name: 'Status' },
    { name: 'Action' },
  ]
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleSizeChange = (size) => {
    setWindowSize(size)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const image = formData.get('code')
    const category = formData.get('desc')
    const entered = formData.get('active')
    const remaining = formData.get('experied')
    const amount = formData.get('usage')
    const status = formData.get('status')
  }
  const [code, setCode] = useState('')
  const [desc, setDesc] = useState('')
  const [active, setActive] = useState('')
  const [experied, setExperied] = useState('')
  const [usage, setUsage] = useState('')
  const [status, setStatus] = useState('')
  return (
    <div className="w-full my-0 mx-auto overflow-x-hidden">
      <div className="mt-10 min-h-screen box-border w-full px-10 mobile:px-5">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Coupon</h1>
          {/* toggle the visibility of the form when the button is clicked */}
          <button
            className="w-5 h-5 text-2xl "
            onClick={() => setIsFormVisible(!isFormVisible)}
          >
            +
          </button>
        </div>
        <div className="table-coupon-statistics my-8 shadow-lg cursor-pointer rounded-2xl overflow-hidden bg-white">
          <div className="relative">
            <WindowSize onSizeChange={handleSizeChange} />
            {window.innerWidth > 882 ? (
              <table className="w-full text-sm text-left text-gray-500 rounded-2xl border-collapse overflow-hidden">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    {arrayTitle.map((item) => {
                      return (
                        <th
                          key={item.name}
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
                  {CouponData.map((item) => {
                    return (
                      <tr
                        key={item.id}
                        className="bg-white border-b hover:bg-gray-200 transition-opacity"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {i++}
                        </td>
                        <td class="px-6 py-3">{item.code}</td>
                        <td class="px-6 py-3">{item.desc}</td>
                        <td class="px-6 py-3">{item.date}</td>
                        <td class="px-6 py-3">{item.experied}</td>
                        <td class="px-6 py-3">{item.usage}</td>
                        <td class="px-6 py-3">{item.status}</td>
                        <td class="px-6 py-4">
                          <Link
                            to="#"
                            class="font-medium text-white px-4 py-2 bg-green-700 rounded-lg hover:bg-green-500 transition-colors"
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
                {CouponData.map((item) => {
                  return (
                    <table
                      key={item.id}
                      className="w-full text-sm text-left text-gray-500 border-collapse overflow-hidden flex flex-row justify-between border-0 border-solid border-gray-200 border-b-[1px]"
                    >
                      <thead className="text-xs text-gray-700 uppercase">
                        <tr className="flex flex-col">
                          {arrayTitle.map((item) => {
                            return (
                              <th scope="col" className="px-5 py-[18px] w-full">
                                {item.name}
                              </th>
                            )
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white flex flex-col justify-between">
                          <td className="px-5 py-[10px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.image}
                          </td>
                          <td class="px-5 py-4 w-full">{item.code}</td>
                          <td class="px-5 py-4 w-full">{item.desc}</td>
                          <td class="px-5 py-4 w-full">{item.date}</td>
                          <td class="px-5 py-4 w-full">{item.experied}</td>
                          <td class="px-5 py-4 w-full">{item.usage}</td>
                          <td class="px-5 py-4 w-full">{item.status}</td>
                          <td class="px-5 py-4 w-full">
                            <Link
                              to="#"
                              class="font-medium text-white px-4 py-2 bg-green-700 rounded-lg hover:bg-green-500 transition-colors"
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
        {isFormVisible && (
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-gray-500 bg-opacity-75 z-10">
            <div className="bg-white p-8 rounded-md shadow-lg w-[500px]">
              <h2 className="text-xl font-bold mb-4">Add Coupon</h2>
              {/* Form fields go here */}
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="code">Code:</label>
                <input
                  type="text"
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-gray-100 px-2 focus:outline-none rounded-lg"
                />

                <label htmlFor="category">Description:</label>
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="bg-gray-100 px-2 focus:outline-none rounded-lg"
                />
                <label htmlFor="entered">Active From:</label>
                <input
                  type="date"
                  value={active}
                  onChange={(e) => setActive(e.target.value)}
                  className="bg-gray-100 px-2 focus:outline-none rounded-lg"
                />
                <label htmlFor="experied">Experied:</label>
                <input
                  type="date"
                  value={experied}
                  onChange={(e) => setExperied(e.target.value)}
                  className="bg-gray-100 px-2 focus:outline-none rounded-lg"
                />
                <label htmlFor="usage">Usage:</label>

                <input
                  type="number"
                  value={usage}
                  onChange={(e) => setUsage(e.target.value)}
                  className="bg-gray-100 px-2 focus:outline-none rounded-lg"
                />
                <label htmlFor="status">Status:</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-gray-100 px-2 focus:outline-none rounded-lg"
                >
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <button
                  className="mt-2 bg-green-800 hover:bg-green-600 transition-colors text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="mt-2 bg-gray-500 hover:bg-gray-700  text-white font-bold py-2 px-4 rounded "
                  onClick={() => setIsFormVisible(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Coupon
