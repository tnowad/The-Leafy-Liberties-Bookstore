import React, { createContext, useState } from 'react'
import { userData } from './FakeData'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = (username, password) => {
    const check = userData.some((user) => {
      return username === user.username && password === user.password
    })
    check ? (
      setLoggedIn(true)
    ) : (
      <div>
        {alert('Username or password not successfully ')}
        {setLoggedIn(false)}
      </div>
    )
  }

  const logout = () => {
    setLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
