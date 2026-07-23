import React, { useState } from 'react'
import Inputcontext from '../context/Inputcontext'

const Inputprovider = ({children}) => {

    const [takeinput,setTakeinput] = useState("")

    const [buttinput,setButtinput] =useState()

    const handleinput = (e)=>{
       setTakeinput( e.target.value)   
    
    }

    const handlebutton =()=>{
       setButtinput(takeinput)
    }
  return (
    <>
    <Inputcontext.Provider value={{takeinput,handleinput,setTakeinput,handlebutton,buttinput,setButtinput}}>
    
    {children}
    </Inputcontext.Provider>
    
    </>
  )
}

export default Inputprovider