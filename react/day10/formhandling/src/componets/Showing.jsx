import React from 'react';

const Showing = ({ handling }) => {
  return (
    <div>
      <h2 className='font-bold'>User List</h2>

  {handling.map((e,i)=>(
    <div key={i}>
         <p>{e.userName}</p>
         <p>{e.userAge}</p>
         <p>{e.usermail}</p>
    </div>

  ))}
    </div>
  );
};

export default Showing;