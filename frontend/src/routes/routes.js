import config from './index'
// Pages
import Home from '../pages/Home/index'
import Dashboard from '../pages/Dashboard/index'
import Search from '../pages/Search/index'
import Profile from '../pages/Profile/index'
import Cart from '../pages/Cart/index'

import NotFound from '../pages/NotFound/index'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.dashboard, component: Dashboard, layout: null },
  { path: '*', component: NotFound },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
