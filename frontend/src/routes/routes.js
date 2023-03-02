import config from '~/config'

// Layouts
import { HeaderOnly } from '~/layouts'

// Pages
import Home from '~/pages/Home'
import Dashboard from '~/pages/Dashboard'
import Search from '~/pages/Search'
import Profile from '~/pages/Profile'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Dashboard },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.search, component: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
