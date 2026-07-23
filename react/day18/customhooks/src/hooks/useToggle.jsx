import React, { useState } from 'react'

const useToggle = (tog) => {

const [toggle,setToggle] = useState(tog)

const handleclick = ()=>{


    setToggle(!toggle)

}


  return {toggle,handleclick} 
}

export default useToggle