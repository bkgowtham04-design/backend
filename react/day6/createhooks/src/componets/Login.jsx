import React, { useState } from 'react'

const Login = () => {

  const [userlog, setUserlog] = useState(false)

  const handlechange = () => {
    setUserlog(!userlog)
  }

  return (
    <div className="text-center mt-10">
      
      <h1 className="text-lg font-semibold mb-3">
        Toggle Login
      </h1>

      <h2 className="mb-4">
        {userlog ? "Logged In" : "Logged Out"}
      </h2>

      <button 
        onClick={handlechange}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Change
      </button>

    </div>
  )
}

export default Login