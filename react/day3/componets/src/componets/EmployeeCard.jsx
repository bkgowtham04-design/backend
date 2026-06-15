const EmployeeCard = ({ name, id, dept, salary, exp }) => {
  return (
    <div className="p-5 bg-white shadow-lg rounded-lg border">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>ID: {id}</p>
      <p>Department: {dept}</p>
      <p>Salary: ₹{salary}</p>
      <p>Experience: {exp} years</p>
    </div>
  );
};

export default EmployeeCard;