import { logo } from '../../../assets/images'
function Header() {
  return (
    <header className="flex justify-center w-full sticky top-0 bg-white">
      <div className="container flex justify-between">
        <img src={logo} alt="logo" className="h-20" />
        {/* button */}
        <button className="flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full">
          test
        </button>
        {/* Search form */}
        <form className="flex items-center justify-center w-1/2 h-10 bg-gray-100 rounded-full">
          <input type="text" className="w-full h-full bg-transparent" />
          <button className="flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full">
            test
          </button>
        </form>

        {/* List icons */}
<<<<<<< HEAD
        <h1>Header </h1>
=======
        <h1>List icons</h1>
>>>>>>> 8b84125b8fc2e0b31a53fa6eef4a4b3fc413ce14
      </div>
    </header>
  )
}

export default Header
