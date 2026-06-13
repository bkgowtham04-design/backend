
import StudentProfile from './componets/StudentProfile'
import EmployeeCard from './componets/EmployeeCard '
import ProductCard from './componets/ProductCard '
import MovieDetails from './componets/MovieDetails '
import CompanyInfo from './componets/CompanyInfo '

const App = () => {
  return (
   <>
   <div className='flex flex-row items-center bg-blue-400 h-screen'>
    <StudentProfile />
      <EmployeeCard />
      <ProductCard />
      <MovieDetails />
      <CompanyInfo />
   </div>
   </>
  )
}

export default App