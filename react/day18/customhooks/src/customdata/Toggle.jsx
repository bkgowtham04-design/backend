import React from 'react'
import useToggle from '../hooks/useToggle'

const Toggle = () => {

    const {toggle,handleclick}  = useToggle(false)
  return (
    <>
    
    <input type="text" placeholder='Enter The Name' />

    <input   type={toggle ? "text" : "password"} placeholder='Password'  />

    <button onClick={handleclick}   >


        {toggle?"Hide":"Show"}
    </button>

  
    </>
  )
}

export default Toggle