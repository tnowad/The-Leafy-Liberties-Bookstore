import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes/routes'
import DefaultLayout from './layouts/DefaultLayout'
import { Fragment } from 'react'

function App() {
  const renderRoutes = () => {
    return publicRoutes.map((route, index) => {
      const Page = route.component
      const Layout =
        route.layout === null ? Fragment : route.layout || DefaultLayout
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
    })
  }

  return (
    <BrowserRouter>
      <Routes>{renderRoutes()}</Routes>
    </BrowserRouter>
  )
}

export default App
