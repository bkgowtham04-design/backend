// // import React, { useEffect, useState } from 'react'

// // const App = () => {

// //   const [showing,setShowing] = useState([])


// //   const datas = async()=>{
     
// // const main = await fetch("https://dummyjson.com/comments")

// // const passing = await main.json()

// // setInterval(()=>{
// //          setShowing(passing.comments)
// // },1000)

// //   }

// //   useEffect(()=>{
// //    datas()
// //   },[])

  
// //   return (
// //     <>
   
// //     {showing.map((e)=>(
// //       <div key={e.id}>
// //         <p>{e.body}</p>
// //       </div>
// //     ))}
// //     </>
// //   )
// // }

// // export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {

// const [showing, setShowing] = useState([])

// const featching = async () => {
// const kinding = await fetch("https://dummyjson.com/quotes")
// const res = await kinding.json()


// setShowing(res.quotes)

// }

// useEffect(() => {
// featching()
// }, [])

// return ( <div className="min-h-screen bg-gray-100 p-5">


//   <h1 className="text-3xl font-bold text-center mb-6">
//     Quotes
//   </h1>

//   <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
    
//     {showing.map((e) => (
//       <div 
//         key={e.id} 
//         className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
//       >
//         <p className="text-gray-700 mb-3 italic">
//           "{e.quote}"
//         </p>

//         <p className="text-right font-semibold text-blue-600">
//           - {e.author}
//         </p>
//       </div>
//     ))}

//   </div>
// </div>

// )
// }

// export default App


import React, { useEffect, useState } from 'react'

const App = () => {
  const [alldata,setAlldata] = useState([])

   const showingdata =async()=>{
    const show = await fetch("https://dummyjson.com/products") 

    const showtake = await show.json()

     

    setAlldata(showtake.products)

   
    

    
     } 

     useEffect(()=>{

      showingdata()

     },[])


  return (
    <>
   {alldata.map((e)=>(
    <div key={e.id}>
      <p>{e.title}</p>
      <p>{e.description}</p>
      <p>{e.category}</p>
      <p>{e.price}</p>
    </div>
   ))}
    
    </>
  )
}

export default App
