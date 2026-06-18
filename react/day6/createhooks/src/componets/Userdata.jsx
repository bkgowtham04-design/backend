import React, { useState } from 'react'

const Userdata = () => {

    const [user, setUser] = useState(null)


  return (
    <>
    <div className="text-center mt-10">

      <button 
        onClick={() => setUser({ name: "Sudhan", city: "Chennai" })}
        className="bg-green-500 text-white px-4 py-1 rounded mb-4"
      >
        Load User
      </button>

      {user && (
        <div>
          <h2>Name: {user.name}</h2>
          <h2>City: {user.city}</h2>
        </div>
      )}

    </div>
    </>
  )
}

export default Userdata