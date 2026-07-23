import React, { useContext } from 'react'
import Inputcontext from '../context/Inputcontext'

const Inputshow = () => {

    const {takeinput,handleinput,setTakeinput,handlebutton,buttinput,setButtinput} = useContext(Inputcontext)
  return (
   <>
   <div className='flex justify-center items-center mb-7'>
    <input type="text" placeholder='Search...' className='border flex justify-center items-center' onChange={handleinput} />
   </div>

   <div className='flex justify-center items-center '>
{/* <p>{takeinput}</p> */}

<button className='bg-blue-400 text-black rounded w-50 p-2 mb-10'  onClick={handlebutton}>Click to see</button>
   </div>

   <div className='flex justify-center items-center'>

   
    <h1 className='bg-amber-700 text-white p-5 w-50 flex gap-8'> <h1>Name:   </h1>{buttinput}</h1>
   </div>
   
   </>
  )
}

export default Inputshow