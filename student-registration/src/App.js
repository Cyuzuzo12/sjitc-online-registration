import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import "./App.css";
const App= (props) =>{
  return (
    <BrowserRouter>
     <div >
       <Main {...props}/>
     </div>
    </BrowserRouter>
  );
}

export default App;

// import  Header from './Components/Header';
// import Router from './Components/Router';
// class App extends Component {
// render() {
// return (
// <div className="App">
// <BrowserRouter>
// <Header/>
// <Router/>
// </BrowserRouter>
// </div>
// );
// }
// }
// export default App;
