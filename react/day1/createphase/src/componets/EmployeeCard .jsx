import React from 'react'

const EmployeeCard  = () => {
  return (
    <>
     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6 hover:scale-105 transition">
      <h2 className="text-xl font-bold text-green-600 mb-4">👨‍💼 Employee Card</h2>
      <p><span className="font-semibold">Name:</span> Arun</p>
      <p><span className="font-semibold">ID:</span> EMP123</p>
      <p><span className="font-semibold">Department:</span> IT</p>
      <p><span className="font-semibold">Salary:</span> ₹40,000</p>
    </div>
    </>
  )
}

export default EmployeeCard 