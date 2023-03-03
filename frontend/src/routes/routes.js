import config from '~/config'

// Layouts
import { HeaderOnly } from '../layouts'

// Pages
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Search from '../pages/Search'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.dashboard, component: Dashboard, layout: null },
  { path: '*', component: NotFound },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
