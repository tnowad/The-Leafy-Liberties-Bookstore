import config from '../config'
// * Account Settings
import Register from '../pages/Register'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import Profile from '../pages/Profile/Profile'

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
import Coupon from '../pages/Dashboard/Coupon'
import Shop from '../pages/Shop/Shop'

//  *Backend
import { RouteBackend } from '../pages/Routes'

import NotFound from '../pages/NotFound'
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout'

// Public routes
const publicRoutes = [
  // * account
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
  { path: config.routes.forgotPassword, component: ForgotPassword },
  // * pages shop
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.products, component: Product },
  { path: config.routes.productInfo, component: ProductDetail },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.checkout, component: Checkout },
  { path: config.routes.shop, component: Shop },
  { path: config.routes.search, component: Search },
  { path: config.routes.contact, component: Contact },
  { path: config.routes.wishlist, component: Wishlist },
  // * dashboard routes
  {
    path: config.routes.dashboard,
    component: Dashboard,
    layout: DashboardLayout,
  },
  {
    path: config.routes.statisticsDashboard,
    component: Statistics,
    layout: DashboardLayout,
  },
  {
    path: config.routes.paymentDashboard,
    component: Payment,
    layout: DashboardLayout,
  },
  {
    path: config.routes.productsDashboard,
    component: Products,
    layout: DashboardLayout,
  },
  {
    path: config.routes.customerDashboard,
    component: Customer,
    layout: DashboardLayout,
  },
  {
    path: config.routes.messageDashboard,
    component: Message,
    layout: DashboardLayout,
  },
  {
    path: config.routes.couponDashboard,
    component: Coupon,
    layout: DashboardLayout,
  },
  // * backend routes
  { path: '*', component: NotFound },
]

const protectedRoutes = [
  { path: config.routes.routes, component: RouteBackend, layout: null },
]

export { publicRoutes, protectedRoutes }
