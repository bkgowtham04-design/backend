import React from 'react'
import useFeaching from '../hooks/useFeaching'

const Apiprocess = () => {

    const {showing,loading,setLoading,setShowing,search,setsearch,handlechange,searchshow,setSearchshow} = useFeaching("https://dummyjson.com/users")

    if (loading) {


    return <h1>Loading...</h1>
  }

  

  return (
  <>


  <input type="text" placeholder='Search The Name ' onChange={handlechange} />



  <h2>{loading}</h2>


    

  

  
  
  
  
  {searchshow.map((e)=>(
    <div key={e.id}>


        <p>{e.firstName}</p>

        <p>{e.age}</p>
           
        
    </div>
  ))}
  
  </>
  )
}

export default Apiprocess