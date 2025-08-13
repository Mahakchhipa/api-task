import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Api = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userToken");

  const fetchData = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/recipes");
      console.log("API data", result.data.recipes);
      setData(result.data.recipes);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
const logout = ()=>{ 
      localStorage.clear()
}
  useEffect(() => {
    fetchData();
  }, []);

  const categories = ["All", ...new Set(data.flatMap((item) => item.mealType))];

  const filteredData = data
    .filter((item) =>
      selectedCategory === "All"
        ? true
        : item.mealType.some(
            (type) => type.toLowerCase() === selectedCategory.toLowerCase()
          )
    )
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortType === "atoz") return a.name.localeCompare(b.name);
      if (sortType === "ztoa") return b.name.localeCompare(a.name);
      return 0;
    });

  const toggleCart = (id) => {
    if (cart.includes(id)) {
      setCart(cart.filter((itemId) => itemId !== id));
    } else {
      setCart([...cart, id]);
    }
  };

  const toggleWishlist = (id) => {
    if (!isLoggedIn) {
      alert("Please login first to add items to wishlist!");
      navigate("/login");
      return;
    }
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-center text-3xl text-blue-900 font-bold italic py-5">
        Recipes Dishesh 
      </h1>
      <div>
        {" "}
        <button className="justify-end flex bg-amber-400 text-xl hover:bg-amber-900 text-white font-bold p-5 rounded-2xl">
          {" "}
          Add To wishlist
        </button>{" "} 
         <button className=" text[-xl bg-blue-200 text-black border-2 p-4 my-6 " onClick={logout}> Log Out </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "200px",
          }}
        />
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Sort</option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {categories.map((data) => (
          <button
            key={data}
            onClick={() => setSelectedCategory(data)}
            style={{
              padding: "10px 15px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: selectedCategory === data ? "#007bff" : "#ccc",
              color: selectedCategory === data ? "#fff" : "#000",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {data}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                width: "220px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "200px",
                  height: "120px",
                  objectFit: "cover",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
              />
              <h3
                style={{
                  fontSize: "15px",
                  color: "#999",
                  height: "40px",
                  overflow: "hidden",
                }}
              >
                {item.name}
              </h3>
              <p style={{ fontSize: "15px", color: "#DC143C" }}>
                {item.cuisine}
              </p>
              <p style={{ fontSize: "15px", color: "#777" }}>
                {" "}
                Rating: {item.rating}
              </p>
              <p style={{ fontSize: "13px", color: "#B8860B" }}>
                Kitna Time Lagega: {item.prepTimeMinutes}
              </p>
              <p style={{ fontSize: "10px", color: "#F08080" }}>
                {" "}
                Type {item.tags}
              </p>
              <button
                onClick={() => toggleCart(item.id)}
                style={{
                  padding: "10px 12px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  backgroundColor: cart.includes(item.id) ? "red" : "green",
                  color: "#fff",
                  marginTop: "10px",
                }}
              >
                {cart.includes(item.id) ? "Remove from Cart" : "Add to Cart"}
              </button>

              <button
                onClick={() => toggleWishlist(item.id)}
                style={{
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  backgroundColor: wishlist.includes(item.id)
                    ? "orange"
                    : "#555",
                  color: "#fff",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              >
                {wishlist.includes(item.id)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </button>
            </div>
          ))
        ) : (
          <p>No Data Found </p>
        )}
      </div>
    </div>
  );
};

export default Api;
