import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './Components/MainPage';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';
import {firebase} from "./firebase";
import "./App.css";

const App= (props) =>{
    return (
        <BrowserRouter>
      <div >
        <MainPage {...props}/>
      </div>
     </BrowserRouter>
         );
  
  }
firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App auth={user}/>, document.getElementById('root'));  
})
