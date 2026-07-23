import React from 'react'
import { useState } from 'react'

const Register = () => {

    const [showing,setShowing] = useState({username : "" ,userage : "" , usernum : ""})

    const [cricket,setCricket] = useState([])

      
    
    
    const handlechange = (e)=>{
        setShowing({...showing ,[e.target.name]:e.target.value})
    }

    const handlesubmit = (e)=>{

        e.preventDefault()

        const changing = JSON.parse(localStorage.getItem("userdetails")) || []

        if(showing.userage < 18){

            alert("Not Eligiable")
            return
        }

      

        if(showing.usernum.length > 10){
            alert("Enter Valid Number")
               return
        }

     

   



        changing.push(showing)

        localStorage.setItem("userdetails", JSON.stringify(changing))

        alert("Successfully Added")

         setShowing({username : "" ,userage : "" , usernum : ""})

     const datas = JSON.parse(localStorage.getItem("userdetails"))
       setCricket(datas)
       
       
        


    }


  return (
    <>
    <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter The Name' name='username' value={showing.username} onChange={handlechange} />
        <input type="text" placeholder='Enter The Age' name='userage' value={showing.userage} onChange={handlechange}  />
        <input type="text" placeholder='Enter The MobileNumber' name='usernum' value={showing.usernum} onChange={handlechange}  />
        <input type="submit" value="Register" />


        <div>

        {    cricket.map((e,i)=>(
            <div key={i}>

                <p>{e.username}</p>
                <p>{e.userage}</p>
                <p>{e.usernum}</p>

            </div>

        ))}
            
        </div>
    </form>
    
    </>
  )
}

export default Register