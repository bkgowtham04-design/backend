import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../componets/Register'
import Login from '../componets/Login'
import Dashboard from '../componets/Dashboard'

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>


    </Routes>
    
    </>
  )
}

export default AppRoutes