import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);


      const handleClick = () => {
    setCount(count + 1)
  }

  const handlede = () => {
    setCount(count - 1)
  }

  const handlereset =()=>{

 setCount(0)

  }
  return (
   <>
    <h2 className="text-gray-500 text-center">Starting Count</h2>
<h1 className="text-4xl font-bold my-3 text-center">{count}</h1>

        <div className="flex gap-3 justify-center mb-6">
          <button 
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Increase
          </button>

          <button 
            onClick={handlede}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Decrease
          </button>

          <button 
          onClick={handlereset}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" >Reset</button>
        </div>
   
   </>
  )
}

export default Counter