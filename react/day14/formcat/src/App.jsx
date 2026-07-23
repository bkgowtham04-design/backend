import React, { useEffect, useState } from 'react'

const App = () => {

  const [storedata,setStoredata] = useState([])
  const [showinggg,setShowinggg] = useState([])

  const [storecat,setStorecat] = useState("")

  const [storesearch,setStoresearch] = useState("")

  const [storesort,setStoresort] = useState("")


  const feaching =async()=>{
    const datas = await fetch("https://dummyjson.com/products")

    const showing = await datas.json()

setStoredata(showing.products)




 const takedata = showing.products.map((e)=>e.category)

  const takeing = [...new Set(takedata)]

  setShowinggg(takeing)

  console.log(showinggg);
  

  }

  const handlechange =(e)=>{

    setStorecat(e.target.value)

    console.log(storecat);
    

  }

   const handlechanges =(e)=>{

    setStoresearch(e.target.value)

    console.log(setStoresearch);
    

  }

  const handlesorting =(e)=>{

    setStoresort(e.target.value)

    //console.log(setStoresort);
    

  }

  let display = [...storedata]

  


  if(storecat){
    display = display.filter((e)=>e.category == storecat )



  }

  if(storesearch){

    display = display.filter((e)=>e.title.toLowerCase().includes(storesearch.toLowerCase()) )

  }



  if(storesort === "des"){

   display = display.sort((a,b)=>a.price-b.price)
   
  }
   if(storesort === "ase"){

   display = display.sort((a,b)=>b.price-a.price)
   
  }


  

 
  



  useEffect(()=>{
    feaching()
  },[])


  return (
   <>

   <input type="text" placeholder='Search' onChange={handlechanges} />

   <select onChange={handlechange}>
    <option value="">Select All</option>

    {showinggg.map((e,i)=>(
      <option value={e} key={i+1}>{e}</option>
    ))}
   </select>

   <select onChange={handlesorting}> 
    <option value="">Filter</option>
      <option value="des">Low to High</option>
        <option value="ase">High to Low</option>



   </select>

   {display.map((e,i)=>(
    <div key={i}>
      <p>{e.title}</p>
      <p>{e.category}</p>
       <p>{e.price}</p>
    </div>
   ))}
   
   </>
  )
}

export default App