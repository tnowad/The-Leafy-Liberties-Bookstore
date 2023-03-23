import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes, protectedRoutes } from './routes/routes'
import DefaultLayout from './layouts/DefaultLayout'
import { Fragment } from 'react'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
// import { AuthProvider, useAuth } from './contexts/AuthContext'
import AuthProvider from './pages/Login/AuthProvider'

function App() {
  const renderPublicRoutes = () => {
    return publicRoutes.map((route, index) => {
      const Page = route.component
      const Layout =
        route.layout === null ? Fragment : route.layout || DefaultLayout
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      )
    })
  }

  const renderProtectedRoutes = () => {
    return protectedRoutes.map((route, index) => {
      const Page = route.component
      const Layout =
        route.layout === null ? Fragment : route.layout || DefaultLayout
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Layout>
              <ProtectedRoute>
                <Page />
              </ProtectedRoute>
            </Layout>
          }
        />
      )
    })
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {renderPublicRoutes()}
          {renderProtectedRoutes()}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
