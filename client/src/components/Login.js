import { useState } from 'react';

function Login({ onLogin }) {
  const localURL = "http://localhost:3000";
  
  const [ username, setUsername ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    };
    fetch(`${localURL}/login`, configObj)
      .then(r => r.json())
      .then(userData => {
        console.log(userData);
        onLogin(userData);
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
