import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm  from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'


export const Login = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="criar" element={<LoginCreate />} />
      <Route path="resetar" element={<LoginPasswordReset />} />
      <Route path="perdeu" element={<LoginPasswordLost />} />
    </Routes>
  </div>
  )
}

export default Login;