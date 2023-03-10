import { avatar, overview, user, payment, order } from '../../assets/images'

function Profile() {
  return (
    <div className="h-auto flex justify-around">
      {/* //? information */}
      <div className="mx-10 mt-5 md:ml-32 md:mt-20 w-screen flex justify-around flex-col md:flex-row border border-b-2 border-green-300 box-border">
        <div className="md:w-3/12 flex md:flex-col flex-row justify-around md:justify-start">
          <div className="pb-10 flex flex-col content-center">
            <img src={avatar} className="w-3/6" alt="avatar" />
            <h1 className="mt-5 w-8/12 lg:w-5/12 inline-block  lg:text-center">
              Hoàng Gia Bảo
            </h1>
          </div>

          <div>
            <div className="mt-5 flex">
              <img src={overview} alt="overview" className="mr-5 w-7 inline" />
              <h3 className='cursor-pointer' >Overview</h3>
            </div>
            <div className="mt-5 flex">
              <img src={user} alt="user" className="mr-5 w-5 inline" />
              <h3 className='cursor-pointer'>Account settings</h3>
            </div>
            <div className="mt-5 flex">
              <img src={payment} alt="" className="mr-5 w-7 inline" />
              <h3 className='cursor-pointer'>Payments</h3>
            </div>
            <div className="mt-5 flex">
              <img src={order} alt="" className="mr-5 w-6 inline" />
              <h3 className='cursor-pointer'>Order</h3>
            </div>
          </div>
        </div>
        {/* //? information detail */}
        <div className="flex-1">
          <form className=" md:w-3/4 flex flex-col">
            {/* //? group full name */}
            <div className="flex flex-row justify-between">
              <div className="w-4/12 flex flex-col">
                <label>First name *</label>
                <input
                  type="text"
                  required
                  className="h-9 p-5 w-full border border-solid border-gray-300 rounded-md"
                />
              </div>
              <div className="w-4/12 flex flex-col">
                <label>Last name *</label>
                <input
                  type="text"
                  required
              className="h-9 p-5 w-full border border-solid border-gray-300 rounded-md"
                />
              </div>
            </div>
            <label>User name *</label>
            <input
              type="text"
              required
              className="h-9 p-5 w-full border border-solid border-gray-300 rounded-md"
            />
            <label>Email address *</label>
            <input
              type="text"
              className="h-9 p-5 w-full border border-solid border-gray-300 rounded-md"
            />
            <label>Phone number *</label>
            <input
              type="tel"
              className="h-9 p-5 w-full border border-solid border-gray-300 rounded-md"
              name="phone"
              placeholder="+84XXXXXXXXX"
              pattern="^(\+84|0)(1\d{9}|3\d{8}|5\d{8}|7\d{8}|8\d{8}|9\d{8})$"
              required
            ></input>
            <label>Gender *</label>
            <div className="flex justify-around w-2/5 md:w-3/12">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="h-5 w-6 inline-block border border-solid border-gray-300 rounded-md"
              />
              <label className="">Male</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                className="h-5 w-6 inline-block border border-solid border-gray-300 rounded-md"
              />
              <label className="">Female</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                className="h-5 w-6 inline-block border border-solid border-gray-300 rounded-md"
              />
              <label className="">Other</label>
            </div>

            <label>Birthday *</label>
            <div className="w-3/5 md:w-2/4 flex justify-between">
              <input
                type="number"
                min="1"
                max="31"
                className="p-1 pl-6 text-base md:text-2xl border border-solid border-gray-300 rounded"
              />
              <div className="p-1 border border-solid border-gray-300 rounded">
                <span>Month</span>
                <input type="number" className="pl-2" min="1" max="12" />
              </div>

              <div className="p-1 border border-solid border-gray-300 rounded">
                <span>Year</span>
                <input type="number" className="pl-2" min="1900" max="2023" />
              </div>
            </div>
            <label className="ml-10 mt-10">Password change</label>
            <div className="p-8 flex flex-col border border-solid border-teal-800 rounded">
              <div className="lg:w-3/4">
                <label>Current password (leave blank to leave unchanged)</label>
                <input
                  type="text"
                  className="h-9 p-5 w-full border border-solid border-gray-300 rounded-md"
                />
              </div>
              <div className="lg:w-3/4">
                <label>Current password (leave blank to leave unchanged)</label>
                <input
                  type="text"
                  className="h-9 p-5 w-full border border-solid border-gray-300 rounded-md"
                />
              </div>
              <div className="lg:w-3/4">
                <label>Confirm new password</label>
                <input
                  type="text"
                  className="h-9 p-5 w-full border border-solid border-gray-300 rounded-md"
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
