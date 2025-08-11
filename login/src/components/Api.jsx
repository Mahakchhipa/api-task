import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Api = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.in/api/products");
      console.log("api data", result.data.products);
      setData(result.data.products);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categories = ["All", "Gaming", "Audio", "Mobile", "TV"];

  const filteredData = data
    .filter((item) =>
      selectedCategory === "All"
        ? true
        : item.category.toLowerCase().includes(selectedCategory.toLowerCase())
    )
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortType === "low") return a.price - b.price;
      if (sortType === "high") return b.price - a.price;
      if (sortType === "atoz") return a.title.localeCompare(b.title);
      if (sortType === "ztoa") return b.title.localeCompare(a.title);
      return 0;
    });

  const toggleCart = (id) => {
    if (cart.includes(id)) {
      setCart(cart.filter((itemId) => itemId !== id));
    } else {
      setCart([...cart, id]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-center text-3xl text-blue-900 font-bold  italic py-5 "> React Api Task  </h1>

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
          placeholder="Search products..."
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
          <option value="low"> Low To High</option>
          <option value="high"> High To Low</option>
          <option value="atoz"> A to Z</option>
          <option value="ztoa"> Z to A</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "10px 15px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: selectedCategory === cat ? "#007bff" : "#ccc",
              color: selectedCategory === cat ? "#fff" : "#000",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {cat}
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
                alt={item.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <h3
                style={{ fontSize: "14px", height: "40px", overflow: "hidden" }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#007bff", fontWeight: "bold" }}>
                ₹{item.price}
              </p>
              <p style={{ fontSize: "12px", color: "#777" }}>{item.category}</p>

              <button
                onClick={() => toggleCart(item.id)}
                style={{
                  padding: "8px 12px",
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
            </div>
          ))
        ) : (
          <p>No products found ja kuch n bacha tere liye ab 😊🫂</p>
        )}
      </div>
    </div>
  );
};

export default Api;
