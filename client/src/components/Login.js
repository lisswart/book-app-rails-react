import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ onLogin }) {
  // const localURL = "http://localhost:3000";
  
  const [ username, setUsername ] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    };
    fetch(`/login`, configObj)
      .then(r => {
        if (r.status !== 200 || r.status !== 201) {
          r.json().then(error => {
            console.log(error);
          });
        } else {
          r.json().then(userData => {
            console.log("inside login component", userData);
            onLogin(userData);
            setUsername("");
            history.push("/me");
          });
        }
      });      
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login;
