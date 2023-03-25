import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes, protectedRoutes } from './routes/routes'
import DefaultLayout from './layouts/DefaultLayout'
import { Fragment, useEffect, useState } from 'react'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import AuthProvider from './pages/Login/AuthProvider'
import { getCookie } from './hooks/useCookie'

function App() {
  const [isAlertShown, setIsAlertShown] = useState(false)

  const currentUserCookie = getCookie('currentUser')
  const currentPath = window.location.pathname

  useEffect(() => {
    if (isAlertShown) {
      alert('Bạn chưa đăng nhập,  vui lòng đăng nhập')
    }
    if (!currentUserCookie && currentPath !== '/login' && currentPath !== '/') {
      setIsAlertShown(true)
      window.location.href = '/login'
    }
  }, [isAlertShown])
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
