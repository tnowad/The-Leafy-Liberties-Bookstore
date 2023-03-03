import { logo } from '../../../assets/images'
function Header() {
  return (
    <header className="flex justify-center w-full sticky top-0 bg-white">
      <div className="container flex justify-between">
        <div>
          <img src={logo} alt="logo" className="h-20" />
        </div>
        <h1>Header</h1>
      </div>
    </header>
  )
}

export default Header
