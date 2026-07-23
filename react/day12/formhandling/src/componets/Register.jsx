import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Register = () => {

    const navigate = Navigate()

    const [login,setLogin] = useState({username:"",useremail:"",userpassword:""})

    const [showing,setShowing] = useState([])

    const handlechange =(e)=>{
       setLogin({...login,[e.target.name] : e.target.value})

    }

    const handlesummit =(e)=>{

        e.preventDefault()

        const datas = JSON.parse(localStorage.getItem("userdetails")) || []

        datas.push(login)
        console.log(datas);
        

        localStorage.setItem("userdetails", JSON.stringify(datas))

        alert("Summited Sucessfully")


         setShowing({username:"",useremail:"",userpassword:""})

         const mean =  JSON.parse(localStorage.getItem,"userdetails") 

         setShowing(mean)

    }



  return (
    <>
    <div>

        <h1>Register Form</h1>
        <form onSubmit={handlesummit}>
            <input type="text" name='username' placeholder='Enter Your Name' onChange={handlechange} value={login.username}  />
            <input type="text" name='useremail' placeholder='Enter Your Email' onChange={handlechange} value={login.useremail}  />
            <input type="text" name='userpassword' placeholder='Enter Your Password' onChange={handlechange} value={login.userpassword}  />
            <input type="submit" value={"Register"}/>
        </form>
    </div>

   Navigate(/login)
    
    </>
  )
}

export default Register