import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [change, setChange] = useState(true)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handlede = () => {
    setCount(count - 1)
  }

  const handlereset =()=>{

 setCount(0)

  }

  const handleChange = () => {
    setChange(!change)
  }

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 text-center w-80">

        <h1 className="text-2xl font-bold mb-4">Counter App</h1>

        <h2 className="text-gray-500">Starting Count</h2>
        <h1 className="text-4xl font-bold my-3">{count}</h1>

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

          <button onClick={handlereset}>Reset</button>
        </div>

        <h2 className="text-gray-500">True Or False</h2>
        <h1 className="text-xl font-semibold my-3">
          {change ? "This is True" : "This is False"}
        </h1>

        <button 
          onClick={handleChange}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Toggle
        </button>

      </div>

    </div>
  )
}

export default App