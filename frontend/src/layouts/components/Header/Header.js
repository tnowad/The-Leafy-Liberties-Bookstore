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
        {/* List icons */}
        <h1>Header</h1>
      </div>
    </header>
  )
}

export default Header
