import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Themeshow = () => {

  const {themeset,handlechange,setThemeset} =useContext(ThemeContext)


  const dark =  { 
    backgroundColor: "black", color: "white" 
}

  const light =  { 
    backgroundColor: "white", color: "black" 
}
  return (
    <>
    <div>
        <div>
            <h1 style={themeset?dark:light}>Theme</h1>
        </div>

        <div>
           <button onClick={handlechange} >click me</button>
        </div>
    </div>
    
    </>
  )
}

export default Themeshow    