import config from '../config'
// Pages
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import BookDetail from '../pages/BookDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'

import NotFound from '../pages/NotFound'

import Product from '../components/Product'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.bookDetail, component: BookDetail },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.dashboard, component: Dashboard, layout: null },
  { path: config.routes.product, component: Product, layout: null },
  { path: '*', component: NotFound },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
