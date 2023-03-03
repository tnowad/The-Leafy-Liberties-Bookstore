import Container from '../Container/Container'
import Logo from '../../../assets/icons/Logo.png'

function Header() {
  return (
    <Container>
      <header className="flex justify-between">
        <img src={Logo} />
        <div className="">
          <select name="categories" className="">
            <option value="">Trinh thám</option>
          </select>
        </div>
      </header>
    </Container>
  )
}

export default Header
