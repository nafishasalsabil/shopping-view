import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Titlebar from './components/titlebar/titlebar.component';
import Dashboard from './components/dashboard/dashboard.component';

function App() {
  return (
    <div className="App">
     
      <Titlebar/>
      <div className='dashboard'>
      <Navbar/>
      <Dashboard/>
      </div>
      
    </div>
  );
}

export default App;
