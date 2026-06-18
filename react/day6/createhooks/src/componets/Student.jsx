import React, { useState } from 'react'

const Student = () => {

  const [username, setUsername] = useState("Sudhan")

  const handlechange = () => {
    setUsername("Ravi")
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded-xl shadow-md text-center w-80">
        
        <h1 className="text-xl font-semibold text-gray-600 mb-3">
          Changing Name
        </h1>

        <h2 className="text-2xl font-bold text-blue-500 mb-5">
          {username}
        </h2>

        <button 
          onClick={handlechange}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Click To Change
        </button>

      </div>

    </div>
  )
}

export default Student