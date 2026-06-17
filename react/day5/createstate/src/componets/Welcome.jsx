import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Hello React
          </h1>

          <h2 className="text-lg text-gray-600">
            Value: <span className="font-semibold text-black">100</span>
          </h2>

        </div>

      </div>
    );
  }
}

export default Welcome;