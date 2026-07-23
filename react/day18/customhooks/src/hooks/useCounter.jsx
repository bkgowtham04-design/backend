import React, { useEffect, useState } from 'react'

const useCounter = (count) => {

    const [counting,setCounting] = useState(count)

   


    const handleincre = ()=>{

        setCounting((prev)=>prev+1)

    }

    const handledecre =()=>{
        setCounting((prev)=>prev-1)
    }


      const handlereset =()=>{



        setCounting(0)
    }



 return {counting,handleincre,handledecre,handlereset}

   }


 


export default useCounter