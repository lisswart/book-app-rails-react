import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {

  const [user, setUser] = useState(null);

  console.log("on document load", user);

  useEffect(() => {
    console.log("inside first line of useEffect hook")
    fetch(`/me`)
      .then(r => {
        r.json().then(userData => {
          console.log("inside second .then in useEffect hook, the response object: ", userData);
          console.log("state of user obj in react: ", user);
          if (userData.status === 404)
            setUser(null);
          else {
            setUser(userData);
            console.log("state of user object in react", user);
          }
        });
      });
  }, []);

  console.log("this renders");

  function handleLogin(userData) {
    setUser(userData);
  }

  return (
    <div className="app">
      <nav className="nav">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </nav>

      <Switch>
        <Route path="/login">
          {
            user
            ? <Redirect to="/profile"></Redirect>
            : <Login onLogin={handleLogin} />
          }
        </Route>
        <Route path="/signup">
          {
            user
            ? <Redirect to="/profile"></Redirect>
            : <Signup onLogin={handleLogin} />
          }
        </Route>
        <Route path="/profile">
          {
            user
            ? <Profile user={user} setUser={setUser} />
            : <Redirect to="/login"></Redirect>
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
