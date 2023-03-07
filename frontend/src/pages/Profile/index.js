import { avatar, overview, user, payment, order } from '../../assets/images'

function Profile() {
  return (
    <div className="h-screen flex justify-around">
      {/* //? information */}
      <div className="ml-32 mt-20 w-screen flex justify-around flex-row border border-b-2 border-green-300 box-border">
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
          <form className="w-3/4 flex flex-col">
            {/* //? group full name */}
            <div className="flex flex-row justify-between">
              <div className="w-4/12 flex flex-col">
                <label>First name *</label>
                <input
                  type="text"
                  required
                  className="h-9 p-5 w-full border border-solid border-teal-900 rounded-3xl"
                />
              </div>
              <div className="w-4/12 flex flex-col">
                <label>Last name *</label>
                <input
                  type="text"
                  required
                  className="h-9 p-5 w-full border border-solid border-teal-900 rounded-3xl"
                />
              </div>
            </div>
            <label>User name *</label>
            <input
              type="text"
              required
              className="h-9 p-5 w-full border border-solid border-teal-900 rounded-3xl"
            />
            <label>Email address *</label>
            <input
              type="text"
              className="h-9 p-5 w-full border border-solid border-teal-900 rounded-3xl"
            />
            <label>Phone number *</label>
            <input
              type="tel"
              className="h-9 p-5 w-full border border-solid border-teal-900 rounded-3xl"
              name="phone"
              placeholder="+84XXXXXXXXX"
              pattern="^(\+84|0)(1\d{9}|3\d{8}|5\d{8}|7\d{8}|8\d{8}|9\d{8})$"
              required
            ></input>
            <label>Gender *</label>
            <div className="flex justify-around w-3/12">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="h-5 w-6 inline-block border border-solid border-teal-900 rounded-3xl"
              />
              <label className="">Male</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                className="h-5 w-6 inline-block border border-solid border-teal-900 rounded-3xl"
              />
              <label className="">Female</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                className="h-5 w-6 inline-block border border-solid border-teal-900 rounded-3xl"
              />
              <label className="">Other</label>
            </div>

            <label>Birthday *</label>
            <div className="w-2/4 flex justify-between">
              <input
                type="number"
                min="1"
                max="31"
                className="p-1 pl-6 text-2xl border border-solid border-teal-900 rounded"
              />
              <div className="p-1 border border-solid border-teal-900 rounded">
                <span>Month</span>
                <input type="number" className="pl-2" min="1" max="12" />
              </div>

              <div className="p-1 border border-solid border-teal-900 rounded">
                <span>Year</span>
                <input type="number" className="pl-2" min="1900" max="2023" />
              </div>
            </div>
            <label className="ml-10 mt-10">Password change</label>
            <div className="p-10 flex flex-col border border-solid border-teal-800 rounded">
              <div className="w-3/4">
                <label>Current password (leave blank to leave unchanged)</label>
                <input
                  type="text"
                  className="h-9 p-5 w-full border border-solid border-teal-900 rounded-3xl"
                />
              </div>
              <div className="w-3/4">
                <label>Current password (leave blank to leave unchanged)</label>
                <input
                  type="text"
                  className="h-9 p-5 w-full border border-solid border-teal-900 rounded-3xl"
                />
              </div>
              <div className="w-3/4">
                <label>Confirm new password</label>
                <input
                  type="text"
                  className="h-9 p-5 w-full border border-solid border-teal-900 rounded-3xl"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Save changes"
              className="p-2 mt-5 w-1/6 text-white cursor-pointer bg-teal-800 border  rounded-2xl"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
