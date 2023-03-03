import PropTypes from 'prop-types'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

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
