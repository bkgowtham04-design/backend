const Product = ({ name, price, category, brand }) => {
  return (
    <div className="p-4 bg-green-100 rounded shadow">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
    </div>
  );
};

export default Product;