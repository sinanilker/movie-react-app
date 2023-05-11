import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <>
    <h1>Login</h1>
    <Outlet/>
    </>
  )
}

export default AuthLayout