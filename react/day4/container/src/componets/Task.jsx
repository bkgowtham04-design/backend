import React from 'react'

const Task = () => {

  const schools = [
    {
      id: 1,
      schoolName: "ABC School",
      city: "Chennai",
      principal: "Ramesh",
      students: 2500,
      teachers: 120,
    },
    {
      id: 2,
      schoolName: "Green Valley School",
      city: "Coimbatore",
      principal: "Suresh",
      students: 1800,
      teachers: 90,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-2xl font-bold text-center mb-6">
        School Management
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {schools.map((sch) => (
          <div
            key={sch.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              {sch.schoolName}
            </h2>

            <p className="text-gray-500">{sch.city}</p>

            <div className="mt-3 space-y-1 text-sm">
              <p><span className="font-medium">Principal:</span> {sch.principal}</p>
              <p><span className="font-medium">Students:</span> {sch.students}</p>
              <p><span className="font-medium">Teachers:</span> {sch.teachers}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Task