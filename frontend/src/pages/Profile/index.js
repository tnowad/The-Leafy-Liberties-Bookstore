import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { avatar, overview, user, payment, order } from '../../assets/images'

function Profile() {
  return (
    <div className="p-10 h-screen flex justify-around">
      {/* //? information */}
      <div className="w-3/12">
        <div className="pb-10">
          <img src={avatar} className="w-44" alt="avatar" />
          <h1 className="mt-5">Hoàng Gia Bảo</h1>
        </div>

        <div className="mt-5 flex">
          <img src={overview} alt="overview" className="mr-5 w-7 inline" />
          <h3>Overview</h3>
        </div>
        <div className="mt-5 flex">
          <img src={user} alt="user" className="mr-5 w-5 inline" />
          <h3>Account settings</h3>
        </div>
        <div className="mt-5 flex">
          <img src={payment} alt="" className="mr-5 w-7 inline" />
          <h3>Payments</h3>
        </div>
        <div className="mt-5 flex">
          <img src={order} alt="" className="mr-5 w-6 inline" />
          <h3>Order</h3>
        </div>
      </div>
      {/* //? information detail */}
      <div className="flex-1">
        <form className="flex flex-col">
          {/* //? group full name */}
          <div className="flex flex-row">
            <div className="flex flex-col">
              <label>First name *</label>
              <input type="text" required />
            </div>
            <div className="flex flex-col">
              <label>Last name *</label>
              <input type="text" required />
            </div>
          </div>
          <label>User name *</label>
          <input type="text" required />
          <label>Email address *</label>
          <input type="text" />
          <label>Phone number *</label>
          <input type="number" />
          <label>Gender *</label>
          <input
            type="radio"
            className="w-auto border-slate-800"
            value="Male"
          />
          <label>Male</label>
          <label>First name *</label>
          <input type="text" />
          <label>First name *</label>
          <input type="text" />
          <label>First name *</label>
          <input type="text" />
        </form>
      </div>
    </div>
  )
}

export default Profile
