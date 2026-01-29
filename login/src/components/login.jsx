import "../styles/login.css";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = password.length >= 5;

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1>Login</h1>
        <div>
          <div className="loginLabel">
            <label>Email: </label>
          </div>
          <div>
            {/* <input className='inputField' type="email" placeholder='Enter email..' /> */}
            <input
              className="inputField"
              type="email"
              placeholder="Enter email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

         { isEmailValid && 
         <>
          <div className="loginLabel">
            <label>Password: </label>
          </div>
          <div>
            <input
              className="inputField"
              type="password"
              placeholder="Enter password .."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </>
            }
            { isPasswordValid &&
            <>
            <div className="button-container">
            <button className="button">signIn</button>
            <button className="button">signUp</button>
          </div>
            </>
            }
          
        </div>
      </div>
    </div>
    
  );
}

export default Login;
