import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
