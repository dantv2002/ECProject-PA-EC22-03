import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Authentication = () => {
  return (
    <div className="authentication-container">
        <Link to="" style={{display:'flex', height:"100px", alignItems:"center"}}>
            <img style={{width:"100px"}} src="./logo.png"/>
            <h1>Winner</h1>
          </Link>
        <Outlet/>
    </div>
  )
}
