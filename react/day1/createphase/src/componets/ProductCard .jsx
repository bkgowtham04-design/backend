import React from 'react'

const ProductCard  = () => {
  return (
    <>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6 hover:scale-105 transition">
      <h2 className="text-xl font-bold text-purple-600 mb-4">🛒 Product</h2>
      <p><span className="font-semibold">Name:</span> Laptop</p>
      <p><span className="font-semibold">Price:</span> ₹60,000</p>
      <p><span className="font-semibold">Category:</span> Electronics</p>
      <p><span className="font-semibold">Description:</span> High-performance laptop</p>
    </div>
    
    </>
  )
}

export default ProductCard 