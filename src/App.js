import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Titlebar from "./components/titlebar/titlebar.component";
import Dashboard from "./components/dashboard/dashboard.component";
import Sale from "./components/sale/sale.component";
import FeaturedItems from "./components/featured-items/featured-item.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/product-detail/product-detail.component";
import CategoryItems from "./components/category-items/category-items.component";

const App = () => {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [sale, setSale] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const resCat = await fetch("../jsons/side-menu.json");
        const resPol = await fetch("../jsons/policies.json");
        const resSale = await fetch("../jsons/buy.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        const jsonCat = await resCat.json();
        const jsonPol = await resPol.json();
        const jsonSale = await resSale.json();
        setData(jsonData);
        setCat(jsonCat);
        setPolicies(jsonPol);
        setSale(jsonSale);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Titlebar />
        <Navbar cats={cat} data={data} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="dashboard">
                  <Dashboard cat={cat} />
                  <Sale sale={sale} />
                  <FeaturedItems policies={policies} data={data} />
                </div>
              </>
            }
          />
          <Route path="/products/:productData" element={<ProductDetail />} />
          <Route
            path="/categories/:products"
            element={<CategoryItems data={data} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
