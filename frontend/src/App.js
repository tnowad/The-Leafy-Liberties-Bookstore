import { Routes, Route, Outlet } from 'react-router-dom'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function Header() {
  return <header>Header</header>
}

function Footer() {
  return <footer>Footer</footer>
}

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}
