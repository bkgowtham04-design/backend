import React, { Suspense, useEffect, useState } from 'react'
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Profile from './pages/Profile'
import { lazy } from 'react'

const App = () => {

  const [showing,setShowing] = useState([])

  const allapi = import.meta.env.VITE_API_URL

  // const Home = lazy(()=>import('./pages/Home'))
  
  // const About = lazy(()=>import('./pages/About'))
  
  // const Contact = lazy(()=>import('./pages/Contact'))
  
  // const Profile = lazy(()=>import('./pages/Profile'))


  const getdata =async()=>{

    const takedata = await fetch(allapi)

    const res = await takedata.json()

    setShowing(res.products)

  }

  useEffect(()=>{

    getdata()

  },[])


  return (
    <>
    {/* <h1>LazyLoading</h1>
    <Navbar/>

<Suspense fallback={<h1>Loading....</h1>}>
    <Routes>


  
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>}/>

    </Routes>

    </Suspense> */}

    {showing.map((e,i)=>(
      <div key={i+1}>
        <p>{e.title}</p>
        <p>{e.description}</p>
      </div>
    ))}

 



    </>
  )
}

export default App