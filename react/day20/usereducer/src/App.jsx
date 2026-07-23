// import React, { useReducer } from 'react'



// const innitialvalue = 0

// const process =(reduprocess,action)=>{

//   switch (action.type) {
//     case "Inc":
//       return reduprocess+1

//       case "Dec":

//       return reduprocess-1

//       case "Reset":

//       return innitialvalue



      
     
  
//     default:

//     return innitialvalue

     
//   }



// }

// const App = () => {


//   const [reduprocess,dispatch] = useReducer(process,innitialvalue)
//   return (
//     <>
//     <h1>{reduprocess}</h1>

//     <button onClick={()=>dispatch({type : "Inc"})}>Click to Increment</button>
//      <button onClick={()=>dispatch({type : "Dec"})}>Click to Decrement</button>
//       <button onClick={()=>dispatch({type : "Reset"})}>Click to Reset</button>
    
//     </>
//   )
// }

// export default App


import React, { useReducer, useState } from 'react'


const datas =[]

const reducer = (state,action)=>{

  console.log(state);
  console.log(action);

  switch (action.type) {
    case "Add":

    return [...state,action.payload]

    case "Del":

    console.log("Del");
    

    return state.filter((e)=>e.userid!==action.payload)


    case "Updated":

    return state.map((e)=>e.userid===action.payload.userid?action.payload:e)


      
      
  
    default:

    return state
      
  }
  
  









}

const App = () => {

  const [state,dispatch] = useReducer(reducer,datas)

  const [username,setUsername] = useState("")

  const [editid,setEditid] = useState(null)

  const handlechange =(e)=>{

    setUsername(e.target.value)

  }


  const handleadd =(e)=>{


    const newdata = {
      userid:Date.now(),
      username:username
    }



    dispatch({

      type:"Add",
      payload:newdata


    })

    setUsername("")


  }

  const handleedit =(user)=>{

    

      setEditid(user.userid),
      setUsername(user.username)
 }


 const handledelete =(id)=>{

  dispatch({

    type:"Del",
    payload:id

  })




 }


   const handleupdate =()=>{
     dispatch({
      type:"Updated",
      payload:{userid:editid  , username:username}
     })

     
     
  }
  return (
    <>

    <div>
      <input type="text" placeholder='Enter the Name ' value={username} onChange={handlechange}  />
{editid?<button onClick={handleupdate}>Update</button>: <button onClick={handleadd}>Add</button>}
     
    </div>


    

    {state.map((e)=>(
      <div key={e.userid}>
        <p>{e.username}</p>

        <button onClick={()=>handleedit(e)}>Edit</button>||<button onClick={()=>handledelete(e.userid)}>Delete</button>
      </div>


    ))}
    
    </>
  )
}

export default App