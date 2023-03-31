import { useState } from 'react'
import WindowSize from '../../components/WindowSize/WindowSize'
import { Link } from 'react-router-dom'
import ButtonDashBoard from '../../components/Button/ButtonDashBoard'

function Message() {
  const arrayTitle = [
    { name: 'Book Name' },
    { name: 'User post ' },
    { name: 'Content' },
    { name: 'Time' },
    { name: 'Action' },
  ]
  const arrayData = [
    {
      productName: 'Sách Harry Potter',
      user: 'John Doe',
      content: 'Sách rất hay, tôi rất thích đọc nó',
      time: '2 giờ trước',
    },
    {
      productName: 'Sách Toán lớp 10',
      user: 'Jane Doe',
      content: 'Sách rất hữu ích cho học sinh lớp 10',
      time: '1 ngày trước',
    },
  ]

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
          <h1 className="text-xl font-bold">Comment Section</h1>
        </div>
        <div className="table-product-statistics my-8 shadow-lg cursor-pointer rounded-2xl overflow-hidden bg-white ">
          <div className="relative">
            <WindowSize onSizeChange={handleSizeChange} />
            {window.innerWidth > 882 ? (
              <table className="w-full text-sm text-center text-gray-500 rounded-2xl border-collapse overflow-hidden">
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
                  {arrayData.map((item) => {
                    return (
                      <tr
                        key={item.id}
                        className="bg-white border-b hover:bg-gray-200 transition-opacity"
                      >
                        <td class="px-5 py-4">
                          {item.productName}
                        </td>
                        <td class="px-5 py-4">{item.user}</td>
                        <td class="px-5 py-4">{item.content}</td>
                        <td class="px-5 py-4">{item.time}</td>
                        <td class="px-6 py-4 w-44">
                          <ButtonDashBoard />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            ) : (
              <>
                {arrayData.map((item) => {
                  return (
                    <table
                      key={item.id}
                      className="w-full text-sm text-left text-gray-500 border-collapse overflow-hidden flex flex-row justify-between border-0 border-solid border-gray-200 border-b-[1px]"
                    >
                      <thead className="text-xs text-gray-700 uppercase">
                        <tr className="flex flex-col">
                          {arrayTitle.map((item) => {
                            return (
                              <th
                                key={item.name}
                                scope="col"
                                className="px-5 py-[18px] w-full"
                              >
                                {item.name}
                              </th>
                            )
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white flex flex-col justify-between text-center">
                          <td class="px-5 py-4">{item.productName}</td>
                          <td class="px-5 py-4">{item.user}</td>
                          <td class="px-5 py-4">{item.content}</td>
                          <td class="px-5 py-4">{item.time}</td>
                          <td class="px-5 py-4">
                            <ButtonDashBoard />
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
      </div>
    </div>
  )
}

export default Message
