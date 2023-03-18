import config from '../config'
// * Account Settings
import Register from '../pages/Register'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import Profile from '../pages/Profile'

// * Pages
import Home from '../pages/Home'
import Cart from '../pages/Cart/Cart'
import Checkout from '../pages/Checkout'
import Product from '../components/Product'
import ProductDetail from '../pages/ProductDetail'
import Search from '../pages/Search/Search'
import Contact from '../pages/Contact/Contact'
import Wishlist from '../pages/Wishlist/Wishlist'

// *Dashboard
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Dashboard/Products'
import Customer from '../pages/Dashboard/Customer'
import Statistics from '../pages/Dashboard/Statistics'
import Payment from '../pages/Dashboard/Payment'
import Message from '../pages/Dashboard/Message'
import Shop from '../pages/Shop/Shop'

//  *Backend
import { RouteBackend } from '../pages/Routes'

import NotFound from '../pages/NotFound'

// Public routes
const publicRoutes = [
  // * account
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
  { path: config.routes.forgotPassword, component: ForgotPassword },
  // * pages shop
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.products, component: Product, layout: null },
  { path: config.routes.productInfo, component: ProductDetail },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.checkout, component: Checkout },
  { path: config.routes.shop, component: Shop },
  { path: config.routes.search, component: Search },
  { path: config.routes.contact, component: Contact },
  { path: config.routes.wishlist, component: Wishlist },
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
