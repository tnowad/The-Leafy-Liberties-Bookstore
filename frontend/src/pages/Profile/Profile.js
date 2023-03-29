import {
  faHome,
  faUser,
  faCheck,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { avatar } from '../../assets/images'

export default function Profile() {
  return (
    <div className="w-full bg-white flex justify-center">
      {/* //? information */}
      <div className="container">
        <div className=" mt-5 md:mt-20 flex flex-col md:flex-row border border-b-2 border-green-300 box-border w-full">
          <div className="w-3/4 flex md:flex-col flex-row justify-around md:justify-start md:w-1/4">
            <div className="flex flex-col justify-center items-center">
              <img src={avatar} className="w-3/6" alt="avatar" />
              <h1 className="mt-5 text-xl w-8/12 lg:w-5/12 inline-block  lg:text-center">
                Hoàng Gia Bảo
              </h1>
            </div>
            <div className="mx-auto flex flex-col justify-center items-start">
              <div className="mt-5 flex">
                <FontAwesomeIcon icon={faHome} size="xl" className="mr-2" />
                <h3 className="cursor-pointer text-xl">Overview</h3>
              </div>
              <div className="mt-5 flex">
                <FontAwesomeIcon icon={faUser} size="xl" className="mr-2" />
                <h3 className="cursor-pointer">Account settings</h3>
              </div>
              <div className="mt-5 flex">
                <FontAwesomeIcon icon={faCheck} size="xl" className="mr-2" />
                <h3 className="cursor-pointer">Payments</h3>
              </div>
              <div className="mt-5 flex">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  size="xl"
                  className="mr-2"
                />
                <h3 className="cursor-pointer">Order</h3>
              </div>
            </div>
          </div>
          {/* //? information detail */}
          <div className="p-2 w-full md:w-3/4">
            <form className="flex flex-col">
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
              <div className="flex justify-around w-3/4 md:w-3/5">
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
              <div className="h-8 md:h-10 w-full md:w-2/4 flex justify-between">
                <input
                  type="number"
                  min="1"
                  max="31"
                  className="p-1 pl-6  text-base md:text-2xl border border-solid border-gray-300 rounded"
                />
                <div className="h-8 md:h-10 p-1 border border-solid border-gray-300 rounded">
                  <span>Month:</span>
                  <input
                    type="number"
                    className="pl-1 w-8 md:pl-2 h-2 md:h-8"
                    min="1"
                    max="12"
                  />
                </div>

                <div className="p-1 border border-solid border-gray-300 rounded">
                  <span>Year:</span>
                  <input
                    type="number"
                    className="pl-1 md:pl-2 h-2 md:h-8"
                    min="1900"
                    max="2023"
                  />
                </div>
              </div>
              <label className="ml-10 mt-10">Password change</label>
              <div className="p-2 flex flex-col border border-solid border-teal-800 rounded">
                <div className="lg:w-3/4">
                  <label>
                    Current password (leave blank to leave unchanged)
                  </label>
                  <input
                    type="text"
                    className="h-9 p-5 w-full border border-solid border-gray-300 rounded-md"
                  />
                </div>
                <div className="lg:w-3/4">
                  <label>
                    Current password (leave blank to leave unchanged)
                  </label>
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
                className="p-2 mt-5 w-3/6 sm:w-1/6 text-white cursor-pointer bg-teal-800 border  rounded-2xl"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
