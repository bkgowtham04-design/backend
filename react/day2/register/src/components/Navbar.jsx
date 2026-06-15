import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

   const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-500";

  return (
    <>
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      
      
      <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>

  
      <div className="flex gap-6">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>

     
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Register
        </button>
      </div>
    </nav>
  
  </>
  )
}

export default Navbar