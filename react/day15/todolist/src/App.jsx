// import React, { useState } from 'react'

// const App = () => {

//   const [showdata, setShowdata] = useState({
//     username: "",
//     useremail: "",
//     userpass: ""
//   })

//   const [formdata, setFormdata] = useState([])

//   const handlechange = (e) => {
//     setShowdata({ ...showdata, [e.target.name]: e.target.value })
//   }

//   const handleform = (e) => {
//     e.preventDefault()

//     const dataid = {
//       id: Date.now(),
//       ...showdata     // ✅ correct
//     }

//     setFormdata([...formdata, dataid]) // ✅ keep array

//     setShowdata({ username: "", useremail: "", userpass: "" })
//   }

//   const handleEdit = (userid) => {
//     const editchange = formdata.find((e) => e.id === userid)
//     setShowdata(editchange) // ✅ fill form
//   }

//   const handledelete = (userid) => {
//     const deletedata = formdata.filter((e) => e.id !== userid)
//     setFormdata(deletedata)
//   }

//   return (
//     <>
//       <form onSubmit={handleform}>
//         <input name="username" value={showdata.username} onChange={handlechange} />
//         <input name="useremail" value={showdata.useremail} onChange={handlechange} />
//         <input name="userpass" value={showdata.userpass} onChange={handlechange} />

//         <button type="submit">Add</button>
//       </form>

//       <table border={1}>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {formdata.map((e, i) => (
//             <tr key={e.id}>
//               <td>{i + 1}</td>
//               <td>{e.username}</td>
//               <td>{e.useremail}</td>
//               <td>{e.userpass}</td>
//               <td>
//                 <button onClick={() => handleEdit(e.id)}>Edit</button>
//                 <button onClick={() => handledelete(e.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   const [showdata,setShowdata] = useState({
//      username: "",
//      useremail: "",
//      userpass: ""   })


//      const [tabledata,setTabledata]= useState([])

//      const [editdata,setEditdata] = useState([])

//   const handlechange = (e)=>{

//  setShowdata ({...showdata,[e.target.name]: e.target.value})

//  //console.log(showdata);


//   }

//   const changesummit =(e)=>{
//     e.preventDefault()

//     const datadate = {id : Date.now(),...showdata}



//     console.log(datadate);

//     setTabledata([...tabledata,datadate])

//      setShowdata({ username: "", useremail: "", userpass: "" })
    

//   }

//   const handleclick =(userid)=>{

//     const datas = tabledata.find((e)=>e.id === userid)

//     setShowdata(datas)



//   }

//   const handledel =(userid)=>{

//     const deletedata = tabledata.filter((e)=>e.id !== userid)

//     setTabledata(deletedata)

//     console.log(deletedata);
    
    



//   }

//   return (
//      <>
//        <form onSubmit={changesummit}>
//         <input name="username" value={showdata.username} onChange={handlechange} />
//          <input name="useremail" value={showdata.useremail} onChange={handlechange} />
//          <input name="userpass" value={showdata.userpass} onChange={handlechange} />

//          <button type="submit">Add</button>
//        </form>


//        <table border={1}>
//          <thead>
//            <tr>
//              <th>No</th>
//              <th>Name</th>
//              <th>Email</th>
//              <th>Password</th>
//              <th>Actions</th>
//            </tr>
//          </thead>

//          <tbody>
//           {tabledata.map((e, i) => (
//             <tr key={e.id}>
//               <td>{i + 1}</td>
//               <td>{e.username}</td>
//               <td>{e.useremail}</td>
//               <td>{e.userpass}</td>
//               <td>
//                 <button onClick={()=>handleclick(e.id)}>Edit</button>
//                 <button onClick={()=>handledel(e.id)} >Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   )
// }
  
// export default App


import React, { useState } from 'react'

const App = () => {

  const [showing,setShowing] = useState({username : "",usermobile : "", userpass : ""})

  const [formdata,setFormdata] = useState([])

  const [useredit,SetUseredit] =useState(null)


  const handlechange =(e)=>{

    setShowing({...showing,[e.target.name] : e.target.value})

  }

  const handlesubmit =(e)=>{

    e.preventDefault()

    const datas = {id : Date.now(),...showing}

    console.log(datas);

    setFormdata((prev)=>[...prev ,datas])


setShowing({username : "",usermobile : "", userpass : ""})

    

  }

  const handleedit =(userid)=>{

    const dataedit = formdata.find((e)=>e.id === userid)

   setShowing({ 
    username:dataedit.username,
    usermobile:dataedit.usermobile,
    userpass:dataedit.userpass})


    SetUseredit(userid)

  }

  const deletedata =(userid)=>{

    const dataremove = formdata.filter((e)=>e.id !== userid  )

   
    setFormdata(dataremove)


    

  }

  const handleupdate =(e)=>{

    e.preventDefault()

      const updatedata = formdata.map((e) =>
    e.id === useredit ? { ...e, ...showing } : e
  )

    setFormdata(updatedata)

  SetUseredit(null)

  setShowing({username : "",usermobile : "", userpass : ""})
  }


  return (
   <>
   <form onSubmit={handlesubmit}>
    <input type="text" placeholder='Enter The Name' onChange={handlechange} value={showing.username} name='username' />
     <input type="text" placeholder='Enter The mobile' onChange={handlechange} value={showing.usermobile} name='usermobile' />
      <input type="text" placeholder='Enter The Password' onChange={handlechange} value={showing.userpass} name='userpass' />
   {useredit === null? <button type='submit' >Add</button>: <button onClick={handleupdate}>Update</button>
}
     


   </form>

          <table border={1}>
         <thead>
          <tr>
              <th>No</th>
              <th>Name</th>
           <th>Mobile</th>
        <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
           {formdata.map((e, i) => (
            <tr key={e.id}>
              <td>{i + 1}</td>
              <td>{e.username}</td>
              <td>{e.usermobile}</td>
              <td>{e.userpass}</td>
              <td>
                <button onClick={()=>handleedit(e.id)} >Edit</button>
                <button onClick={()=>deletedata(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
   
   
   
  )
}

export default App