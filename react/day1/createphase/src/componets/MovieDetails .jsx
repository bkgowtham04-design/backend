import React from 'react'

const MovieDetails  = () => {
  return (
  <>
  <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6 hover:scale-105 transition">
      <h2 className="text-xl font-bold text-red-600 mb-4">🎬 Movie Details</h2>
      <p><span className="font-semibold">Movie:</span> Leo</p>
      <p><span className="font-semibold">Hero:</span> Vijay</p>
      <p><span className="font-semibold">Director:</span> Lokesh Kanagaraj</p>
      <p><span className="font-semibold">Year:</span> 2023</p>
    </div>
  </>
  )
}

export default MovieDetails 