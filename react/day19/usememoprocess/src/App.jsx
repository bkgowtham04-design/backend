import React, { useMemo, useState, useCallback } from "react";

const datas = (searchitem, datapro, sortdata) => {
  let allproduct = [...datapro];

  const filterprocess = allproduct.filter((e) =>
    e.productName.toLowerCase().includes(searchitem.toLowerCase())
  );

  let sortedData = [...filterprocess];

  if (sortdata === "Asc") {
    sortedData.sort((a, b) => a.productPrice - b.productPrice);
  }

  if (sortdata === "Dse") {
    sortedData.sort((a, b) => b.productPrice - a.productPrice);
  }

  return sortedData;
};

const Usecall = () => {
  const [search, setSearch] = useState("");
  const [themechange, setThemechange] = useState(false);
  const [selectsort, setSelectsort] = useState("");

  const productData = [
    { productId: 100, productName: "Pizza", productPrice: 200 },
    { productId: 101, productName: "Iphone", productPrice: 75000 },
    { productId: 102, productName: "Cricket Bat", productPrice: 10000 },
    { productId: 103, productName: "Dress", productPrice: 1000 },
    { productId: 104, productName: "Bottle", productPrice: 300 },
  ];

  const handlesearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handletheme = useCallback(() => {
    setThemechange((prev) => !prev);
  }, []);

  const handlesort = useCallback((e) => {
    setSelectsort(e.target.value);
  }, []);

  const memoize = useMemo(() => {
    return datas(search, productData, selectsort);
  }, [search, selectsort, productData]);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search The Product"
          onChange={handlesearch}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />

        <select
          onChange={handlesort}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
        >
          <option value="">Select</option>
          <option value="Asc">Ascending</option>
          <option value="Dse">Descending</option>
        </select>
      </div>

      {/* Product List */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Product Details
        </h1>

        <div className="space-y-3">
          {memoize.map((e) => (
            <div
              key={e.productId}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex justify-between items-center border border-gray-100"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {e.productName}
              </h2>
              <p className="text-lg font-medium text-blue-600">
                ₹{e.productPrice}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Theme Toggle Section */}
      <div className="max-w-2xl mx-auto mt-10">
        <div
          className={`p-6 rounded-lg transition-all duration-300 ${
            themechange ? "bg-black text-white" : "bg-white text-black"
          } border border-gray-200 shadow-md`}
        >
          <h1 className="text-2xl font-bold text-center">BOX</h1>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={handletheme}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usecall;