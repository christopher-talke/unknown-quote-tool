import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const attemptLogin = async (email, password) => {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/auth/login',
      method: 'post',
      body: {
        email,
        password
      }
    });
  };

  return (
    <main>
      <div className="login-form">
        <h1 className="title">Log in to UQT</h1>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={() => attemptLogin(email, password)}>Login</button>
        <a>Forgot Password</a>
      </div>
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }

        main {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        div.login-form {
          max-width: 400px;
          height: 300px;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        input {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Avenir, PingFang SC, Helvetica Neue, Helvetica;
          padding: 0 0.785714285714286rem;
          display: inline-flex;
          vertical-align: middle;
          align-items: center;
          border-radius: 5px;
          background-color: transparent;
          font-size: 1rem;
          height: 2.642857142857143rem;
          line-height: 1.928571428571429rem;
          width: auto;
          outline: 0;
          box-sizing: border-box;
          margin: 4px 10px;
          border: 1px solid #e1e1e1;
          -webkit-appearance: none;
          transition: border 0.2s ease, color 0.2s ease;
        }

        button {
          text-rendering: geometricPrecision;
          margin: 4px 10px;
          display: inline-block;
          padding: 0 1.571428571428571rem;
          border-radius: 5px;
          font-weight: 100;
          font-size: 0.857142857142857rem;
          cursor: pointer;
          justify-content: center;
          text-transform: uppercase;
          text-align: center;
          height: 2.714285714285714rem;
          line-height: 2.714285714285714rem;
          width: auto;
          transition: border 0.2s, background 0.2s, color 0.2s ease-out;
          background: #000;
          color: #fff;
          border: 1px solid #000;
          margin-bottom: 25px;
        }
      `}</style>
    </main>
  );
};

export default Login;
