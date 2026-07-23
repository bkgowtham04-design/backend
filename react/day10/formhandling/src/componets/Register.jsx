import React, { useState } from 'react'
import Showing from './Showing'

const Register = () => {

    const [show,setShow] = useState({userName : "",userAge : "", usermail : ""})

    const [handling,setHandling] = useState([])

    const handlechange =(e)=>{
      setShow({...show, [e.target.name] : e.target.value})

      

      
      
    }

    const handlesummit =(e)=>{

        e.preventDefault()

      setHandling((prev)=> [...prev,show])

      setShow({userName : "",userAge : "", usermail : ""})
      
      
        


      
    }
  return (
    <>
    <div className='flex flex-col gap-4 justify-center items-center bg-amber-400 text-black h-screen'>
      <form onSubmit={handlesummit}>
        <table>
             <div className='bg-white text-black flex flex-col justify-center items-center p-5 w-100'>
      <tr>
          <td> <label  htmlFor="name">Enter the Name : </label></td>
      <td>  <input className='border-2 flex flex-col' type="text" id='name' name='userName'   value={show.userName} onChange={handlechange} /></td>
      </tr>
      <br /> 

    <tr>
        <td>    <label htmlFor="age">Enter the Age : </label></td>
        <td><input className='border-2 flex flex-col' type="text" id='age' name='userAge'   value={show.userAge} onChange={handlechange}/></td>
    </tr>
    <br />
<tr>
    
        <td><label htmlFor="mail">Enter the Email : </label></td>
       <td> <input className='border-2 flex flex-col' type="text" id='mail' name='usermail'   value={show.usermail} onChange={handlechange} /></td>
</tr>
<br />


        <input type="submit" value= 'Register' className='bg-black rounded text-white p-2 w-20' />

        <br />

       
       </div>
        </table>
      </form>
    </div>


    <Showing handling={handling}/>
    
    
    </>
  )
}

export default Register