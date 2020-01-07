import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import "./App.css";
import Dashboard from './Components/Dashboard/dashboard';
// import { from } from "rxjs";
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
     <div >
       <Dashboard/>
       {/* <Main /> */}
     </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
