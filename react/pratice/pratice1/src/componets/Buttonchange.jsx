import React, { useState } from 'react'

const Buttonchange = () => {
    const [datachange,setDatachange] = useState(["React"])

    

    const handleclick =()=>{
        setDatachange("Angulur")
    }

    const handleagain =()=>{

        setDatachange("vue")


    }


  return (
    <>
    <h1>{datachange}</h1>

    <button onClick={handleclick}>Click To Change</button>

   

    <button onClick={handleagain}>Click Again</button>
    
    </>
  )
}

export default Buttonchange