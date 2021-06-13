
import React, { useEffect } from "react";
import reactDom from "react-dom";
import './App.css';
import Header from "./Header";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Payment from "./Payment";

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);

      if(authUser){
        // the user was log in or was log in
       dispatch({
         type: 'SET_USER',
         user: authUser
       })
      }
      else{
        //user logout
        dispatch({
          type:'SET_USER',
          user: null
        })
        }

      }
    )
  },[])
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          
          <Login></Login>
        </Route>
        <Route path="/checkout">
          <Header></Header> 
          <Checkout></Checkout>
      </Route>
      <Route path="/payment">
       
        <Header></Header>
        <Payment></Payment>
      </Route>
      <Route path="/">
      <Header></Header>
      <Homepage></Homepage>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
