import React, { useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeProvider = ({children}) => {

       const [themeset,setThemeset] = useState(false)

       const handlechange =()=>{
        setThemeset(!themeset)

       }


       



    
  return (
    <>
    <ThemeContext.Provider value ={{themeset,handlechange,setThemeset}} >

        {children}
    </ThemeContext.Provider>
    
    
    </>
  )
}

export default ThemeProvider