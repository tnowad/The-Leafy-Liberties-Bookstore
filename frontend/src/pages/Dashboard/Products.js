import DashboardMenu from '../../layouts/DashboardComponent/DashboardMenu'
import { useState } from 'react'
import WindowSize from '../../components/WindowSize/WindowSize'
import { productData } from './Data'
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
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl">Product</h1>
        {/* toggle the visibility of the form when the button is clicked */}
        <button
          className="w-5 h-5 text-2xl "
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          +
        </button>
      </div>
      <div className="mt-5">
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
                  <tr className="text-center">
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
                <table className="ml-5 mb-8 flex flex-row justify-around border-0 border-b-2 border-gray-200 border-solid ">
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

        {isFormVisible && (
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-gray-500 bg-opacity-75 z-10">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <h2 className="text-xl font-bold mb-4">Add Product</h2>
              {/* Form fields go here */}
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.value)}
                />

                <label htmlFor="category">Category:</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="entered">Entered:</label>
                <input
                  type="number"
                  value={entered}
                  onChange={(e) => setEntered(e.target.value)}
                />
                <label htmlFor="remaining">Remaining:</label>
                <input
                  type="number"
                  value={remaining}
                  onChange={(e) => setRemaining(e.target.value)}
                />
                {/* <label htmlFor="totalBuy">Total buy:</label>
                    <input
                      type="number"
                      value={totalBuy}
                      onChange={(e) => setTotalBuy(e.target.value)}
                    /> */}
                <label htmlFor="status">Status:</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
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
                />

                <button
                  className="mt-2 bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
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
