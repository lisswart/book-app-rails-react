import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ onLogin, username, setUsername }) {
  
  const history = useHistory();

  // const [ errors, setErrors ] = useState("");

  return (
    <form onSubmit={onLogin}>
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
