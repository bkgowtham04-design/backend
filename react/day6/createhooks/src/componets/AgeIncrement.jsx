import React, { useState } from 'react'

const AgeIncrement = () => {

  const [change, setChange] = useState(18)

  const handlechange = () => {
    setChange(change + 1)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">
        
        <h1 className="text-xl font-semibold text-gray-600 mb-3">
          Age Increment
        </h1>

        <h2 className="text-3xl font-bold text-green-500 mb-5">
          {change}
        </h2>

        <button 
          onClick={handlechange}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition"
        >
          Change Age
        </button>

      </div>

    </div>
  )
}

export default AgeIncrement