import React, { useState } from 'react'

const Paragraph = () => {

     const [show, setShow] = useState(true)


     const handlechange =()=>{
        setShow(!show)
     }
   return (
    <div className="text-center mt-10">
      
      <button className="bg-blue-500 text-white px-4 py-1 rounded mb-4" onClick ={handlechange}>Click Toggle </button>

     <p>{show ?"Virat Kohli is widely regarded as one of the greatest and most successful batsmen in the history of cricket. Born on November 5, 1988, in Delhi, India, his fierce determination, exceptional fitness, and disciplined approach to the game have established him as a global sporting icon":""}</p>

    </div>
  )
}

export default Paragraph

