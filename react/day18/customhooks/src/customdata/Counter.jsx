import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
 const {counting,handleincre,handledecre,handlereset} = useCounter(0)


  return (
 <>
<h1>{counting}</h1>


<button onClick={handleincre}>Increses</button>
<button onClick={handledecre}>Decrese</button>
<button onClick={handlereset}>Reset</button>
 
 </>
  )
}

export default Counter


