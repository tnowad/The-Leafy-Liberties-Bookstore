import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom'

import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Dashboard from '~/pages/Dashboard'
import Cart from '~/pages/Cart'
import Checkout from '~/pages/Checkout'
import NotFound from '~/pages/NotFound'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
