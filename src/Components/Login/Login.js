import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordForgot from './LoginPasswordForgot'
import LoginPasswordReset from './LoginPasswordReset'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate/>} />
        <Route path="forgot" element={<LoginPasswordForgot />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}

export default Login