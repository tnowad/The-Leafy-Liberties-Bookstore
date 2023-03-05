import { infoBookDetail } from '../../assets/images'

function BookDetail() {
  return (
    <div className="">
      {/* // ? option */}
      <div className="flex flex-row">
        <div className="">
          <img src={infoBookDetail} alt="book_detail" />
        </div>
        <div>Option</div>
      </div>
      {/* //? info detail */}
      <div>Info Book Detail</div>
    </div>
  )
}

export default BookDetail
