import config from '../config'
// Pages
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Product from '../components/Product'
import Checkout from '../pages/Checkout'

import { RouteBackend } from '../pages/Routes'

import NotFound from '../pages/NotFound'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.products, component: Product, layout: null },
  { path: config.routes.productInfo, component: ProductDetail },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.checkout, component: Checkout },
  { path: config.routes.dashboard, component: Dashboard, layout: null },
  { path: config.routes.routes, component: RouteBackend, layout: null },
  { path: '*', component: NotFound },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
