import React, { useEffect, useState } from 'react'

const useFeaching = (api) => {


    const [showing,setShowing] = useState([])
    const [loading,setLoading] = useState(true)
    const [search,setsearch] = useState("")
    const [searchshow,setSearchshow] = useState([])


    const showdata =async ()=>{
      
      try {

           const datafeach = await fetch(api)

         const datapare = await datafeach.json()

         setShowing(datapare.users)
        
      } catch (error) {

        alert("Something Went Wrong")
        
      }finally{

        setLoading(false)

      }

    }

      const handlechange =(e)=>{

        setsearch(e.target.value)

        console.log(search);
        
       
       
        

      }


          useEffect(() => {
    const datas = [...showing]

    if (datas) {
      const filteredData = datas.filter((e) => e.firstName.toLowerCase().includes(search.toLowerCase())  )


      setSearchshow(filteredData)
    }


  }, [search, showing])




    

    useEffect(()=>{

        showdata()

    },[api])




  return { showing, loading, setLoading, setShowing, search, setsearch, handlechange, searchshow, setSearchshow }
}

export default useFeaching