import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import Dashboard from './Components/Dashboard/dashboard';
import "./App.css";
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
     <div >
       {/* <Main /> */}
       <Dashboard/>
     </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
