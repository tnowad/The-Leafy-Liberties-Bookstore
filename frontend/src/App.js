import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { publicRoutes } from './routes/routes'
import DefaultLayout from './layouts/DefaultLayout'

import { Fragment } from 'react'

import config from './config/'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.dashboard, component: Dashboard, layout: null },
  { path: '*', component: NotFound },
]

export default function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          let Layout = DefaultLayout

          if (route.layout) Layout = route.layout
          else if (route.layout === null) Layout = Fragment

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}
