
import { Route, Routes } from 'react-router-dom'

import Product from '../componets/Product'


const AppRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Product/>}/> 



   </Routes>
   
   </>
  )
}

export default AppRoutes