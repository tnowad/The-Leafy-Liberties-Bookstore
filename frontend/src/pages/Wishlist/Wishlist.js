import React, { useState } from 'react'
import { productData } from '../Dashboard/Data'
import WindowSize from '../../components/WindowSize/WindowSize'

function Wishlist() {
  const arrayTitle = [
    { name: 'Products' },
    { name: 'Category' },
    { name: 'Entered' },
    { name: 'Remaining' },
    { name: 'Status' },
    { name: 'Amount' },
    { name: 'Action' },
  ]

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleSizeChange = (size) => {
    setWindowSize(size)
  }
  return (
    <div>
      <WindowSize onSizeChange={handleSizeChange} />
      {window.innerWidth > 500 ? (
        <table className="w-full border-collapse">
          <thead className="w-full bg-gray-100 rounded-sm">
            <tr className="w-44">
              {arrayTitle.map((item) => {
                return (
                  <th className="px-4 py-2" key={item.name}>
                    {item.name}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {productData.map((item) => {
              return (
                <tr key={item.id} className="text-center">
                  <td>{item.image}</td>
                  <td>{item.category}</td>
                  <td>{item.entered}</td>
                  <td>{item.remaining}</td>
                  <td>{item.status}</td>
                  <td>{item.amount}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                      ...
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <>
          {productData.map((item) => {
            return (
              <table
                key={item.id}
                className="ml-5 mb-8 flex flex-row justify-around border-0 border-b-2 border-gray-200 border-solid "
              >
                <thead>
                  <tr className="flex flex-col">
                    {arrayTitle.map((item) => {
                      return <th key={item.name}>{item.name}</th>
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center flex flex-col justify-around ">
                    <td>{item.image}</td>
                    <td>{item.category}</td>
                    <td>{item.entered}</td>
                    <td>{item.remaining}</td>
                    <td>{item.status}</td>
                    <td>{item.amount}</td>
                    <td className="border px-4 py-2">
                      <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        ...
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            )
          })}
        </>
      )}
    </div>
  )
}

export default Wishlist
