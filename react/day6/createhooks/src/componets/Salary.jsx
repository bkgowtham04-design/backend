import React, { useState } from 'react'

const Salary = () => {

  const [salary, setSalary] = useState(25000)

  const handleClick = () => {
    setSalary(prev => prev + 5000)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <h1 className="text-lg font-semibold mb-3">
        Salary
      </h1>

      <h2 className="text-xl mb-4">
        ₹{salary}
      </h2>

      <button 
        onClick={handleClick}
        className="bg-green-500 text-white px-4 py-1 rounded"
      >
        Increase Salary
      </button>

    </div>
  )
}

export default Salary