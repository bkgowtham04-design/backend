import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Counter from './componets/Counter'
import Student from './componets/Student'
import AgeIncrement from './componets/AgeIncrement'
import Login from './componets/Login'
import Modechange from './componets/Modechange'
import Paragraph from './componets/Paragraph'
import Userdata from './componets/Userdata'
import Product from './componets/Product'
import Mobile from './componets/Mobile'
import Salary from './componets/Salary'

const App = () => {
  return (
    <>
     <nav className="bg-gray-900 text-white p-4 flex justify-center gap-8 shadow-md">
  <Link to="/" className="hover:text-blue-400 transition">
    TASK 1
  </Link>

  <Link to="/student" className="hover:text-blue-400 transition">
    TASK 2
  </Link>

  <Link to="/AgeIncrement" className="hover:text-blue-400 transition">
    TASK 3
  </Link>

  <Link to="/Login" className="hover:text-blue-400 transition">
    TASK 4
  </Link>

  <Link to="/Modechange" className="hover:text-blue-400 transition">
    TASK 5
  </Link>

  <Link to="/Paragraph" className="hover:text-blue-400 transition">
    TASK 6
  </Link>

  
  <Link to="/Userdata" className="hover:text-blue-400 transition">
    TASK 7
  </Link>

   <Link to="/Product" className="hover:text-blue-400 transition">
    TASK 8
  </Link>

   <Link to="/Mobile" className="hover:text-blue-400 transition">
    TASK 9
  </Link>

  
   <Link to="/Salary" className="hover:text-blue-400 transition">
    TASK 10
  </Link>
</nav>


<Routes>
<Route path='/' element={<Counter />} />

<Route path='/student' element={<Student />} />

<Route path='/AgeIncrement' element={<AgeIncrement />} />

<Route path='/Login' element={<Login />} />


<Route path='/Modechange' element={<Modechange />} />

<Route path='/Paragraph' element={<Paragraph />} />

<Route path='/Userdata' element={<Userdata />} />

<Route path='/Product' element={<Product />} />

<Route path='/Mobile' element={<Mobile />} />

<Route path='/Salary' element={<Salary />} />


</Routes>

      
    </>
  )
}

export default App