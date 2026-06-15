const UserCard = ({ user }) => {
  const { name, email, phone, city } = user;

  return (
    <div className="p-4 bg-purple-100 rounded shadow">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default UserCard;