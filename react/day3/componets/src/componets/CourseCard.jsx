const CourseCard = ({ name, duration, fees }) => {
  return (
    <div className="p-4 bg-white shadow rounded border">
      <h2 className="font-bold">{name}</h2>
      <p>Duration: {duration}</p>
      <p>Fees: ₹{fees}</p>
    </div>
  );
};

export default CourseCard;