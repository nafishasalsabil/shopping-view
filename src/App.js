import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Titlebar from './components/titlebar/titlebar.component';
import Dashboard from './components/dashboard/dashboard.component';
import Sale from './components/sale/sale.component';


const App = () => {
    const [data, setData] = useState([]);
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const resCat = await fetch('../side-menu.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                const jsonCat = await resCat.json();
                setData(jsonData);
                setCat(jsonCat);
                console.log(jsonData)
                console.log(jsonCat);
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
      </div>
      
    </div>
  );
};

export default App;

