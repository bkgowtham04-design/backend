import React, { useState } from 'react'

const Localstorage = () => {

  const [userdata, setUserdata] = useState({
    username: "",
    userage: "",
    useremail: ""
  })

  const handlechange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value
    })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    const data = JSON.parse(localStorage.getItem("ushyuerdetails")) || []

    data.push(userdata)

    localStorage.setItem("ushyuerdetails", JSON.stringify(data))

    alert("Successfully Saved")

    setUserdata({
      username: "",
      userage: "",
      useremail: ""
    })
  }

  return (
    <>
      <form onSubmit={handlesummit}>
        <input
          type="text"
          placeholder="Enter the Name"
          value={userdata.username}
          onChange={handlechange}
          name="username"
        />

        <input
          type="text"
          placeholder="Enter the Age"
          value={userdata.userage}
          onChange={handlechange}
          name="userage"
        />

        <input
          type="text"
          placeholder="Enter the Email"
          value={userdata.useremail}
          onChange={handlechange}
          name="useremail"
        />

        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default Localstorage