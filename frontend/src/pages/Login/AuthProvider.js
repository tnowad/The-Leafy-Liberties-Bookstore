import React, { createContext, useState } from 'react'
import { useCookies } from 'react-cookie'
import { SetCookie } from '../../hooks/useCookie'
import { userData } from './FakeData'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [cookies, setCookie] = useCookies(['currentUser'])
  const [currentUser, setCurrentUser] = useState({
    usernameCurrent: null,
    passwordCurrent: null,
  })
  const login = (username, password) => {
    const check = userData.some((user) => {
      return username === user.username && password === user.password
    })
    if (check) {
      setCurrentUser({
        usernameCurrent: username,
        passwordCurrent: password,
      })
      setCookie('currentUser', currentUser, { path: '/' })
    }
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
