import React, { useState } from "react";

function ObjectState() {
  const [user, setUser] = useState({
    name: "Gowtham",
    age: 21,
    city: "Chennai",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
        
        <h1 className="text-2xl font-bold mb-4 text-blue-600">
          User Details
        </h1>

        <h2 className="text-lg text-gray-700">
          Name: <span className="font-semibold">{user.name}</span>
        </h2>

        <h2 className="text-lg text-gray-700">
          Age: <span className="font-semibold">{user.age}</span>
        </h2>

        <h2 className="text-lg text-gray-700">
          City: <span className="font-semibold">{user.city}</span>
        </h2>

      </div>

    </div>
  );
}

export default ObjectState;