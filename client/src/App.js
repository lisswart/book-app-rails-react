import React from 'react'
import { useState, useEffect } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const localURL = "http://localhost:3000";

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("inside useEffect hook")
    fetch(`${localURL}/me`)
      .then(r => r.json())
      .then(userData => {
        console.log(userData);
        setUser(userData);
      });
  }, []);

  console.log("this renders");

  function handleLogin(userData) {
    setUser(userData);
  }

  return (
    <div>
      <nav style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <NavLink to="/login" style={{color: "gold"}}>Login</NavLink>
        <NavLink to="/signup" style={{color: "gold"}}>Signup</NavLink>
      </nav>

      <Switch>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <Signup onLogin={handleLogin} />
        </Route>
      </Switch>
      
      {
        user
        ? <p>{user.username}</p>
        : <Redirect to="/login"></Redirect>
      }
    </div>
  );
}

export default App;
