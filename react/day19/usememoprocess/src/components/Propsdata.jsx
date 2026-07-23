import React from 'react'
import App from '../App'

const Propsdata = () => {

    const datas=(searchitem,datapro)=>{

  return datapro.filter((e)=>e.productName.toLowerCase().includes(searchitem.toLowerCase()))

  

}


  return (
   <>
   <App value={datas}/>
   
   </>
  )
}

export default Propsdata