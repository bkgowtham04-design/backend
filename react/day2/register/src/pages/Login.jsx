import React from 'react'

const Login = () => {
  return (
  <>
  <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <input
        type="text"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </div>
  
  </>
  )
}

export default Login