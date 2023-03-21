import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { productData } from '../Dashboard/Data'
import WindowSize from '../../components/WindowSize/WindowSize'
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

function Wishlist() {
  const arrayTitle = [
    { name: 'Products' },
    { name: 'Category' },
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
                  <th
                    colSpan={item.name === 'Action' ? 2 : 1}
                    className="px-4 py-2"
                    key={item.name}
                  >
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
                  <td>{item.status}</td>
                  <td>{item.amount}</td>
                  <td className="border px-4 py-2">
                    <button class="relative bg-green-800 text-white font-bold py-2 px-4 rounded hover:bg-green-600 hover:text-white">
                      <FontAwesomeIcon className="hover:" icon={faCartPlus} />
                      <span class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100">
                        <span class="w-20 relative left-16 text-green-800">
                          Add
                        </span>
                      </span>
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button class="relative bg-green-800 text-white font-bold py-2 px-4 rounded hover:bg-green-600 hover:text-white">
                      <FontAwesomeIcon icon={faTrash} />
                      <span class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100">
                        <span class="relative left-16 text-green-800">
                          remove
                        </span>
                      </span>
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
                      return (
                        <th
                          className={
                            item.name === 'Action' ? `h-16 pt-5` : `h-auto`
                          }
                          colSpan={item.name === 'Action' ? 2 : 1}
                          key={item.name}
                        >
                          {item.name}
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center flex flex-col justify-around ">
                    <td>{item.image}</td>
                    <td>{item.category}</td>

                    <td>{item.status}</td>
                    <td>{item.amount}</td>
                    <td className="border px-4 py-2">
                      <button className="bg-green-800 hover:bg-green-600 text-sm text-white font-bold py-1 px-2 rounded">
                        Add to cart
                      </button>
                    </td>
                    <td className="border px-4 py-2">
                      <button className="bg-green-800 hover:bg-green-600 text-sm text-white font-bold py-1 px-2 rounded">
                        Remove from wishlist
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
