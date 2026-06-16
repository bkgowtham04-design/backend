import {Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
<div className="bg-blue-400 p-4">
    <Logo/>
    <Links/>
    
    
   
</div>

<div>
  
</div>
    
    </>
  )
}

export default Navbar


const Logo =()=>{

   return(<>
    <div className="w-15 mx-20 ">


        <img src="./logo.jpg" alt="image" />

       
    </div>
   
   
   </>)
}

const Links =()=>{
      return(<>
  <div>
  <Link>Home</Link>
  <Link>About</Link>
  <Link>Contact</Link>
  <Link>Profile</Link>
  </div>

  
  </>)
}