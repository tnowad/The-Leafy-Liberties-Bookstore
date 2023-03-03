import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
