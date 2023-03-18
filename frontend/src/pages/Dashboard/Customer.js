import DashboardManager from '../../layouts/DashboardComponent/DashboardManager'
import { useState } from 'react'
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

  return (
    <div className="w-full">
      <div className="flex m-1 sm:m-5 w-full ">
        <DashboardManager color="Customer" />
        <div className="mt-14 min-h-screen w-full overflow-x-scroll xl:w-4/5 xl:overflow-x-hidden">
          <div className="flex justify-between">
            <h1 className="text-xl">Customer</h1>
            {/* toggle the visibility of the form when the button is clicked */}
            <button
              className="w-5 h-5 text-2xl "
              onClick={() => setIsFormVisible(!isFormVisible)}
            >
              +
            </button>
          </div>
          <div className="mt-5">
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
                <tr className="text-center">
                  <td>Image</td>
                  <td>Hoang Gia Bao</td>
                  <td>hoanggiabao2122003@gmail.com</td>
                  <td>097220081</td>
                  <td>140</td>
                  <td>Active</td>
                  <td>15/3/2023</td>
                  <td className="border px-4 py-2">
                    <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                      ...
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {isFormVisible && (
              <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-gray-500 bg-opacity-75 z-10">
                <div className="bg-white p-8 rounded-md shadow-lg">
                  <h2 className="text-xl font-bold mb-4">Add Customer</h2>
                  {/* Form fields go here */}
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label htmlFor="image">Image:</label>
                    <input
                      type="file"
                      onChange={(e) => setImage(e.target.value)}
                    />

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
      </div>
    </div>
  )
}

export default Customer
