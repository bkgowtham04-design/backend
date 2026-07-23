import React, { useState } from 'react'

const Datashow = () => {

    const [showingData,setShowingData] = useState([
    {Name:"Gowtham" , Age:22},

    {Name:"Virat",Age:36} 
  
  ])

  const [showarr,setShowarr] = useState([])

  const [adddata,setAdddata] = useState([])


  const handleclick =()=>{

  setShowarr(showingData) 

    console.log(showingData);
     }


      const handleadd = (id) => {
   const datas = showingData.map((e,i)=>i===id ? {...e ,Name:"Gowtham" , Age:25}:showingData


   )

   setShowarr(datas)

   console.log(datas);
   

  }
  return (
    <>

    <div>
    <div>
     

      <button onClick={handleclick}>Click</button>

         {showarr.map((e,i)=>(
        <div key={i}>
          <p>{e.Name}</p>
          <p>{e.Age}</p>
              <button onClick={()=>handleadd(i)}>Edit</button>


        </div>

        
      ))}

     

  

    </div>

    <div>
   
    </div>
   </div>
    
    
    </>
  )
}

export default Datashow