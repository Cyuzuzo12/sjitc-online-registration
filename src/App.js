import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Dashboard from './Components/Dashboard/dashboard';
import "./App.css";
function App() {
  return (
    <BrowserRouter>
     <div >
       <Main />
       {/* <Dashboard/> */}
     </div>
    </BrowserRouter>
  );
}

export default App;
