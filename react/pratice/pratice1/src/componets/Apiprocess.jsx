// import React, { useEffect, useState } from 'react'

// const Apiprocess = () => {

//     const [showing,setShowing] = useState([])

//   const feaching =async()=>{
//    try {

   


//         const takedata = await fetch("https://dummyjson.com/todos")

//         const dataparsing = await takedata.json()


//         setShowing(dataparsing.todos)

//         console.log(dataparsing);
        

//     }

    
//     catch (error) {

//     alert("Somthing is Wrong")
    
//    }
// }

//     useEffect(()=>{
//     feaching()
//    },[])
//   return (
//     <>
//     <h1>API DATA PROCESSING</h1>

//     {showing.map((e)=>(
//         <div key={e.id}>
//             <p>{e.todo}</p>
//             <p>{e.completed ? "Completed" : "Pending"}</p>
//             <p>{e.userId}</p>
//         </div>
//     ))}
//     </>
//   )
// }

// export default Apiprocess