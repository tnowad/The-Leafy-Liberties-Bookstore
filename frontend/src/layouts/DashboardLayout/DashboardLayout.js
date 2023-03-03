import Header from '../components/Header'
import Footer from '../components/footer/Footer'

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
