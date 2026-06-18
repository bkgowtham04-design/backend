import React, { useState } from 'react'

const Modechange = () => {

  const [userchange, setUserChange] = useState(false)

  const handlechange = () => {
    setUserChange(!userchange)
  }

   return (
    <>
     

  <div className=' bg-amber-300 flex flex-col justify-center items-center h-screen '>
    <div className={ userchange  ? "bg-black text-white w-90 h-90 text-center"  : "bg-white text-black w-90 h-90 text-center"}>
        
        <h1 className="text-lg font-semibold mb-3 pt-10">
          Mode Toggle
        </h1>

        <h2 className="mb-4">
          {userchange ? "Dark Mode" : "Light Mode"}
        </h2>

        <button 
          onClick={handlechange}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Change
        </button>

      </div>
  </div>
    </>
  )
}

 
export default Modechange