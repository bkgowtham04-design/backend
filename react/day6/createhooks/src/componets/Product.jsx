import React, { useState } from 'react'

const Product = () => {
     const [product, setProduct] = useState(undefined)

  const handleClick = () => {
    setProduct({ name: "Laptop", price: 50000 })
  }
   return (
    <>
    <div className="text-center mt-10">

      <button 
        onClick={handleClick}
        className="bg-purple-500 text-white px-4 py-1 rounded mb-4"
      >
        Load Product
      </button>

      {product && (
        <div>
          <h2>Product: {product.name}</h2>
          <h2>Price: ₹{product.price}</h2>
        </div>
      )}

    </div>
    </>
  )
}

export default Product