
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup({ onLogin }) {
  const localURL = "http://localhost:3000";

  const [username, setUsername] = useState("");

  const history = useHistory();

  function handleSignup(e) {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"username": username})
    };
    fetch(`${localURL}/signup`, configObj)
      .then(r => r.json())
      .then(userData => {
        console.log(userData);
        onLogin(userData);
        setUsername("");
        history.push("/me")
      });
  }

  return (
    <div>
      
    </div>
  );
}

export default Signup;
