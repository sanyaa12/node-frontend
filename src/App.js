import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"

import { Signup } from './component/Signup';

import { Login } from './component/Login';
import Dashboard from './common/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
            <Routes>

      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

        


        
    </div>
  );
}

export default App;
