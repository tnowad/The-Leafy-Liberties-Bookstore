import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { productData } from '../Dashboard/Data'
import WindowSize from '../../components/WindowSize/WindowSize'
import { faCartPlus, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import ButtonHover from '../../components/Button/ButtonHover'

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
        className="md:my-16
      flex flex-col items-center"
      >
        <FontAwesomeIcon className="text-6xl text-green-800" icon={faHeart} />
        <h1 className="text-green-800 text-6xl">My wishlist</h1>
      </div>
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
                  <td className="border px-1 py-2">
                    <ButtonHover hoverText="Add">
                      <FontAwesomeIcon className="hover:" icon={faCartPlus} />
                    </ButtonHover>
                  </td>
                  <td className="border px-4 py-2">
                    <ButtonHover hoverText="Remove">
                      <FontAwesomeIcon icon={faTrash} />
                    </ButtonHover>
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
