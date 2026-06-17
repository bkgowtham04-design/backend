import React, { useState } from "react";

function UseStateDemo() {
  const [change, setChange] = useState(true)


  const handleChange = () => {
    setChange(!change)
  }

  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  
  <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">
    
    <h2 className="text-gray-500 text-sm">
      Changing Name
    </h2>

    <h1 className="text-2xl font-bold my-3 text-gray-800">
      {change ? "Gowtham" : "Gowtham.B"}
    </h1>

    <button 
      onClick={handleChange}
      className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
    >
      To Change
    </button>

  </div>

</div>  );
}

export default UseStateDemo;