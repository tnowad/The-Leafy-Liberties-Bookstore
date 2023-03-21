import DashboardMenu from '../../layouts/DashboardComponent/DashboardMenu'
import { useEffect, useState } from 'react'
import { customerData } from './Data'
import WindowSize from '../../components/WindowSize/WindowSize'

function Customer({ ...props }) {
  const arrayTitle = [
    { name: 'Profile' },
    { name: 'Name' },
    { name: 'Email' },
    { name: 'Phone' },
    { name: 'Total buy' },
    { name: 'Status' },
    { name: 'Create At' },
    { name: 'Action' },
  ]

  const [isFormVisible, setIsFormVisible] = useState(false)
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [totalBuy, setTotalBuy] = useState('')
  const [status, setStatus] = useState('')
  const [createAt, setCreateAt] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const image = formData.get('image')
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const totalBuy = formData.get('totalBuy')
    const status = formData.get('status')
    const createAt = formData.get('createAt')
  }
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleSizeChange = (size) => {
    setWindowSize(size)
  }

  return (
    <div className="ml-14 mt-14 min-h-screen w-full overflow-x-scroll xl:w-4/5 xl:overflow-x-hidden">
      <div className="flex justify-between">
        <h1 className="text-xl">Customer</h1>
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
              {customerData.map((item) => {
                return (
                  <tr key={item.id} className="text-center">
                    <td>{item.profile}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.totalBuy}</td>
                    <td>{item.status}</td>
                    <td>{item.createAt}</td>
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
            {customerData.map((item) => {
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
                      <td>{item.profile}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.totalBuy}</td>
                      <td>{item.status}</td>
                      <td>{item.createAt}</td>
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
              <h2 className="text-xl font-bold mb-4">Add Customer</h2>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="image">Image:</label>
                <input type="file" onChange={(e) => setImage(e.target.value)} />

                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="totalBuy">Total buy:</label>
                <input
                  type="number"
                  value={totalBuy}
                  onChange={(e) => setTotalBuy(e.target.value)}
                />
                <label htmlFor="status">Status:</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>

                <label htmlFor="createAt">Create At:</label>
                <input
                  type="date"
                  value={createAt}
                  onChange={(e) => setCreateAt(e.target.value)}
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

export default Customer
