import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/routes'
import DefaultLayout from '~/layouts'

<<<<<<< HEAD
import { Fragment } from 'react'
=======
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Dashboard from '~/pages/Dashboard'
import Cart from '~/pages/Cart'
import Checkout from '~/pages/Checkout'
import NotFound from '~/pages/NotFound'
>>>>>>> 7c775f86075f98ed6cf84d59b9af7c34a96fd004

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
