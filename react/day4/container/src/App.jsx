import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Task from './componets/Task'
import Task2 from './componets/Task2'

const App = () => {
  return (
    <>
     
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="flex justify-center gap-6 text-white font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:text-gray-200"
            }
          >
            TASK 1
          </NavLink>

          <NavLink
            to="/task2"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:text-gray-200"
            }
          >
            TASK 2
          </NavLink>

        </div>
      </nav>                                                                                                                                             

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </>
  )
}

export default App