import Student from "./componets/Student";
import EmployeeCard from "./componets/EmployeeCard";
import Product from "./componets/Product";
import Skills from "./componets/Skills";
import UserCard from "./componets/UserCard";
import CourseCard from "./componets/CourseCard";


function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  const user = {
    name: "Gowtham",
    email: "gowtham@gmail.com",
    phone: "9876543210",
    city: "Chennai",
  };

  return (
    <div className="p-6 space-y-6">

      <Student name="Gowtham" age={22} course="MERN" city="Chennai" />

      <EmployeeCard
        name="Gowtham"
        id="EMP101"
        dept="IT"
        salary={30000}
        exp={2}
      />

      <Product
        name="iPhone"
        price={80000}
        category="Mobile"
        brand="Apple"
      />

      <Skills skills={skills} />

      <UserCard user={user} />

     <div className="grid grid-cols-3 gap-4">
        <CourseCard name="MERN Stack" duration="6 Months" fees={40000} />
        <CourseCard name="Python Full Stack" duration="5 Months" fees={35000} />
        <CourseCard name="Java Full Stack" duration="6 Months" fees={45000} />
      </div>


     

    </div>
  );
}

export default App;