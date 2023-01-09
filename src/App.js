import React from 'react';
import{BrowserRouter as Router , Route , Switch,Redirect} from 'react-router-dom'
import './App.css';
import Anime from './Components/Anime/Anime';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Signin from './Components/Sign In/Signin';
import SignUp from './Components/SignUp/SignUp';
import UserProfile from './Components/User Profile/UserProfile';


export default function App() {
    return(
    <Router>
    <div className="App">
    <Navbar></Navbar>
    <Switch>
    <Route exact path="/">
    <Redirect to="/home" />
    </Route>
      <Route exact path="/signin">
        <Signin></Signin>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/signup">
        <SignUp></SignUp>
        </Route>
      <Route exact path="/user">
        <UserProfile/>
      </Route>
      <Route exact path="/anime">
        <Anime/>
      </Route>
    </Switch>
    </div>
    </Router>
   
  )
  }
    

