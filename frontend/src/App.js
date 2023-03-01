import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home page and some not necessary page */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Profile />} />
        <Route path="/profile/change-password" element={<Profile />} />
        <Route path="/profile/orders" element={<Profile />} />
        <Route path="/profile/orders/:id" element={<Profile />} />
        <Route path="/profile/address" element={<Profile />} />
        <Route path="/profile/wishlist" element={<Profile />} />
        <Route path="/profile/notifications" element={<Profile />} />
        <Route path="/profile/verify-email" element={<VerifyEmail />} />
        {/* Carts */}
        <Route path="/cart" element={<Home />} />
        <Route path="/cart/checkout" element={<Home />} />
        <Route path="/cart/checkout/success" element={<Home />} />
        <Route path="/cart/checkout/cancel" element={<Home />} />
        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>
      <Route path="/dashboard" element={<LayoutDashboard />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/login" element={<DashboardLogin />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/orders/:id" element={<Order />} />
      </Route>
      <Route path="*" element={<NotFound />} />
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

function LayoutDashboard() {
  return (
    <>
      <h1>Dashboard Routes</h1>
      <Outlet />
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

function Dashboard() {
  return <h1>Dashboard</h1>
}

function NotFound() {
  return <h1>Not Found</h1>
}

function Products() {
  return (
    <>
      <h1>Products</h1>
      <Link to="/products/1"> Product 1</Link>
    </>
  )
}

function Product() {
  const { id } = useParams()
  return <h2>Product Id: {id}</h2>
}

function Profile() {
  return <h1>Profile</h1>
}

function Login() {
  return <h1>Login</h1>
}

function Register() {
  return <h1>Register</h1>
}

function ForgotPassword() {
  return <h1>Forgot Password</h1>
}

function ResetPassword() {
  const { token } = useParams()
  return <h1>Reset Password {token}</h1>
}

function VerifyEmail() {
  return <h1>Verify Email</h1>
}

function Orders() {
  return <h1>Orders</h1>
}

function Order() {
  const { id } = useParams()
  return <h1>Order Id: {id}</h1>
}

function DashboardLogin() {
  return <h1>Dashboard Login</h1>
}
