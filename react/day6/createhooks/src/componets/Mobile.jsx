import React, { useState } from 'react'

const Mobile = () => {


      const [mobile, setMobile] = useState(null)

  const handleClick = () => {
    setMobile(9876543210)
  }
  return (
    <>
     <div className="text-center mt-10">

      <button 
        onClick={handleClick}
        className="bg-orange-500 text-white px-4 py-1 rounded mb-4"
      >
        Load Mobile
      </button>

      {mobile && <h2>Mobile: {mobile}</h2>}

    </div>
    
    </>
  )
}

export default Mobile