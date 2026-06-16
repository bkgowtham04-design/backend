import React from 'react'

const Task2 = () => {

  const schools = [
    {
      id: 1,
      schoolName: "ABC School",
      courses: ["LKG", "UKG", "Primary"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold text-center mb-6">
        School Courses
      </h1>

      <div className="flex justify-center">
        {schools.map((sch) => (
          <div
            key={sch.id}
            className="bg-white p-6 rounded-xl shadow-md w-80"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              {sch.schoolName}
            </h2>

            <div className="flex flex-wrap gap-2">
              {sch.courses.map((course, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Task2

