import config from '../config'
// Pages
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Product from '../components/Product'
import Checkout from '../pages/Checkout'

// *Dashboard
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Dashboard/Products'
import Customer from '../pages/Dashboard/Customer'

import NotFound from '../pages/NotFound'

import { RouteBackend } from '../pages/Routes'
import Statistics from '../pages/Dashboard/Statistics'
import Payment from '../pages/Dashboard/Payment'
import Message from '../pages/Dashboard/Message'
import Shop from '../pages/Shop/Shop'

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
  { path: config.routes.shop, component: Shop },
  // * dashboard routes
  { path: config.routes.dashboard, component: Dashboard, layout: null },
  {
    path: config.routes.statisticsDashboard,
    component: Statistics,
    layout: null,
  },
  {
    path: config.routes.paymentDashboard,
    component: Payment,
    layout: null,
  },
  {
    path: config.routes.productsDashboard,
    component: Products,
    layout: null,
  },
  {
    path: config.routes.customerDashboard,
    component: Customer,
    layout: null,
  },
  {
    path: config.routes.messageDashboard,
    component: Message,
    layout: null,
  },
  // * backend routes
  { path: config.routes.routes, component: RouteBackend, layout: null },
  { path: '*', component: NotFound },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
