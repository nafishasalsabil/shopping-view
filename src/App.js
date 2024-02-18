import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Titlebar from './components/titlebar/titlebar.component';
import Dashboard from './components/dashboard/dashboard.component';
import Sale from './components/sale/sale.component';
import FeaturedItems from './components/featured-items/featured-item.component';


const App = () => {
    const [data, setData] = useState([]);
    const [cat, setCat] = useState([]);
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const resCat = await fetch('../jsons/side-menu.json');
                const resPol = await fetch('../jsons/policies.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                const jsonCat = await resCat.json();
                const jsonPol = await resPol.json();
                setData(jsonData);
                setCat(jsonCat);
                setPolicies(jsonPol);
                console.log(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


  return (
    <div className="App">
     
      <Titlebar/>
      <div className='dashboard'>
      <Navbar/>
      <Dashboard cat = {cat}/>
      <Sale/>
      <FeaturedItems policies = {policies} data={data}/>
      </div>
      
    </div>
  );
};

export default App;

