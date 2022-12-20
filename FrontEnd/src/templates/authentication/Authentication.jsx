import React from 'react'
import { Outlet } from 'react-router-dom'

export const Authentication = () => {
  return (
    <div className="authentication-container">
        <h1>Store Name</h1>
        <Outlet/>
    </div>
  )
}
