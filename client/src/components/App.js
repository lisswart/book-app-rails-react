import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Login from '../pages/Login';
import NewBook from './components/NewBook';
import BooksPanel from './BooksPanel';

function App() {

  const [user, setUser] = useState(null);

  console.log("on document load", user);

  useEffect(() => {
    console.log("inside useEffect hook, before fetch, user: ", user)
    fetch(`/api/me`)
      .then(r => {
        if (r.ok) {
          r.json().then(userData => setUser(userData));
        }
      });
  }, []);

 if (!user) return <Login onLogin={setUser} />

  return (
   <>
    <NavBar user={user} setUser={setUser} />
    <main>
      <Switch>
        <Route path="/new">
          <NewBook user={user} />
        </Route>
        <Route path="/">
          <BookList />
        </Route>
      </Switch>
    </main>
   </>
  );
}

export default App;
