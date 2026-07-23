import React, { useEffect, useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0)

  const [start,setStart] = useState([])

  console.log("Components Running...");
  

const timer =   useEffect(()=>{

  console.log("useEffect is Running....");
  
   
    setInterval(()=>{
     
      setCount((prev)=>(prev+1))
    },1000)

  },[])

  // return(()=>{
  
  // clearInterval(timer)
  // })

  // const handleclick =()=>{
  //   setStart(timer)
  // }







  return (
   <>
  <h1>Counter</h1>
   <p>Count - {count}</p>   
   {/* <button onClick={handleclick}>Click To Start</button> */}
   </>
  )
}

export default App