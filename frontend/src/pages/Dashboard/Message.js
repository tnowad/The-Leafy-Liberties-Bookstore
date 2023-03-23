function Message() {
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Quản lý comment sản phẩm</h1>
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <span className="mr-2">Sắp xếp theo:</span>
              <select className="border border-gray-400 rounded-md py-1 px-2">
                <option value="newest">Mới nhất</option>
                <option value="oldest">Cũ nhất</option>
              </select>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center bg-gray-100 p-2 rounded-md mb-2">
                <div className="w-1/4 font-bold">Tên sản phẩm</div>
                <div className="w-1/4 font-bold">Người đăng</div>
                <div className="w-1/4 font-bold">Nội dung</div>
                <div className="w-1/4 font-bold">Thời gian</div>
              </div>
              <div className="flex items-center bg-white p-2 rounded-md mb-2">
                <div className="w-1/4">Sách Harry Potter</div>
                <div className="w-1/4">John Doe</div>
                <div className="w-1/4">Sách rất hay, tôi rất thích đọc nó</div>
                <div className="w-1/4">2 giờ trước</div>
              </div>
              <div className="flex items-center bg-white p-2 rounded-md mb-2">
                <div className="w-1/4">Sách Toán lớp 10</div>
                <div className="w-1/4">Jane Doe</div>
                <div className="w-1/4">
                  Sách rất hữu ích cho học sinh lớp 10
                </div>
                <div className="w-1/4">1 ngày trước</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
