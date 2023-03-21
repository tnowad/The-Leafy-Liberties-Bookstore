import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { productData } from '../Dashboard/Data'
import WindowSize from '../../components/WindowSize/WindowSize'
import { faCartPlus, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'

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
      <div
        className="my-10 md:my-16
      flex flex-col items-center"
      >
        <FontAwesomeIcon
          className="text-4xl md:text-6xl text-green-800"
          icon={faHeart}
        />
        <h1 className=" text-4xl text-green-800 md:text-6xl">My wishlist</h1>
      </div>
      <WindowSize onSizeChange={handleSizeChange} />
      {window.innerWidth > 650 ? (
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
                  <td className="border px-1 py-2">
                    <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                      <FontAwesomeIcon className="hover:" icon={faCartPlus} />
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                      <FontAwesomeIcon icon={faTrash} />
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
                className="ml-5 mb-8 pt-10 flex flex-row justify-around border-0 border-t-2 border-gray-200 border-solid "
              >
                <thead>
                  <tr className="flex flex-col">
                    {arrayTitle.map((item) => {
                      return (
                        <th
                          className={
                            item.name === 'Action' ? `h-16 pt-5` : `h-auto`
                          }
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
                    <td className="border px-1 py-2">
                      <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        <FontAwesomeIcon className="hover:" icon={faCartPlus} />
                      </button>
                      <button className="ml-3 bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                    <td className="border px-4 py-2"></td>
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
