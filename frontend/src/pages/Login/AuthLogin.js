import React from 'react'
import AuthProvider from './AuthProvider'
import LoginForm from './Login'

function AuthLogin() {
  return (
    <div>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </div>
  )
}

export default AuthLogin
