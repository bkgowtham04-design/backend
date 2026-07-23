import React, { useState } from 'react'

const App = () => {

  const [userName,setUserName] = useState()
  const [inputValue, setInputValue] = useState("")

  const handleclick =(e)=>{

  
    setUserName(inputValue)
  }

  const handlechange =(e)=>{
    setInputValue(e.target.value)
  }
  return (
    <>
    <label htmlFor="name">Enter The Name</label>
    <input type="text" id='name' onChange={handlechange}  />

    <button onClick={handleclick}>Click To Change</button>

    <p>{userName}</p>

    </>
  )
}

export default App