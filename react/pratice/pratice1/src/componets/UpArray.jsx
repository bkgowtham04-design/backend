import React, { useState } from 'react'

const UpArray = () => {

    const [showingdata,setShowingdata] = useState(["HTML", "CSS"])

    const handleclick =()=>{
        setShowingdata([...showingdata,"Javascript"])
    }

    const handleadd =()=>{
        setShowingdata([...showingdata,"React"])
    }


  return (
   <>

   <button onClick={handleclick}>To Add</button>

   <button onClick={handleadd}>Add Again</button>
   {showingdata.map((e,i)=>(
<div key={i}>
    <p>{e}</p>
</div>

   ))}
   
   </>
  )
}

export default UpArray