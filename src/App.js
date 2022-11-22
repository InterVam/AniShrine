import React from 'react';
import { Component } from 'react';
import{BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Signin from './Components/Sign In/Signin';
import SignUp from './Components/SignUp/SignUp';

class App extends Component {
  render(){
    return(
    <Router>
    <div className="App">
    <Navbar></Navbar>
    <Switch>
      <Route path="/signin">
        <Signin></Signin>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/signup">
        <SignUp></SignUp>
        </Route>
    </Switch>
    </div>
    </Router>
   
  )
    
  
  }
    
}

export default App;
