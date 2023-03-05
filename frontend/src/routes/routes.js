import config from '../config'
// Pages
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import Search from '../pages/Search'
import NotFound from '../pages/NotFound'

import Product from '../components/Product'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.dashboard, component: Dashboard, layout: null },
  { path: config.routes.product, component: Product, layout: null },
  { path: '*', component: NotFound },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
