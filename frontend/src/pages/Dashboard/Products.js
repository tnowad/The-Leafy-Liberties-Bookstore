import DashboardMenu from '../../layouts/DashboardComponent/DashboardMenu'
import { useState } from 'react'
import WindowSize from '../../components/WindowSize/WindowSize'
import { productData } from './Data'
import { Link } from 'react-router-dom'
function Product({ ...props }) {
  const arrayTitle = [
    { name: 'Products' },
    { name: 'Category' },
    { name: 'Entered' },
    { name: 'Remaining' },
    { name: 'Status' },
    { name: 'Amount' },
    { name: 'Action' },
  ]

  const [isFormVisible, setIsFormVisible] = useState(false)
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [entered, setEntered] = useState('')
  const [remaining, setRemaining] = useState('')
  const [amount, setAmount] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const image = formData.get('image')
    const category = formData.get('category')
    const entered = formData.get('entered')
    const remaining = formData.get('remaining')
    const amount = formData.get('amount')
    const status = formData.get('status')
  }
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleSizeChange = (size) => {
    setWindowSize(size)
  }

  return (
    <div className="w-full my-0 mx-auto overflow-x-hidden">
      <div className="mt-10 min-h-screen box-border w-full px-10 mobile:px-5">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Product</h1>
          {/* toggle the visibility of the form when the button is clicked */}
          <button
            className="w-5 h-5 text-2xl "
            onClick={() => setIsFormVisible(!isFormVisible)}
          >
            +
          </button>
        </div>
        <div className="table-product-statistics my-8 shadow-lg cursor-pointer rounded-2xl overflow-hidden bg-white">
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
                  {productData.map((item) => {
                    return (
                      <tr
                        key={item.id}
                        className="bg-white border-b hover:bg-gray-200 transition-opacity"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.image}
                        </td>
                        <td class="px-6 py-3">{item.category}</td>
                        <td class="px-6 py-3">{item.entered}</td>
                        <td class="px-6 py-3">{item.remaining}</td>
                        <td class="px-6 py-3">{item.status}</td>
                        <td class="px-6 py-3">{item.amount}</td>
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
                {productData.map((item) => {
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
                          <td class="px-5 py-4 w-full">{item.category}</td>
                          <td class="px-5 py-4 w-full">{item.entered}</td>
                          <td class="px-5 py-4 w-full">{item.remaining}</td>
                          <td class="px-5 py-4 w-full">{item.status}</td>
                          <td class="px-5 py-4 w-full">{item.amount}</td>
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
              <h2 className="text-xl font-bold mb-4">Add Product</h2>
              {/* Form fields go here */}
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="image">Image:</label>
                <input type="file" onChange={(e) => setImage(e.target.value)} />

                <label htmlFor="category">Category:</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-gray-100 px-2 focus:outline-none rounded-lg"

                />
                <label htmlFor="entered">Entered:</label>
                <input
                  type="number"
                  value={entered}
                  onChange={(e) => setEntered(e.target.value)}
                  className="bg-gray-100 px-2 focus:outline-none rounded-lg"

                />
                <label htmlFor="remaining">Remaining:</label>
                <input
                  type="number"
                  value={remaining}
                  onChange={(e) => setRemaining(e.target.value)}
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

                <label htmlFor="amount">Amount:</label>
                <input
                  type="date"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-gray-100 px-2 focus:outline-none rounded-lg"

                />

                <button
                  className="mt-2 bg-green-800 hover:bg-green-600 transition-colors text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded "
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

export default Product
