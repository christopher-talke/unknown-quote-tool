import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import router from 'next/router';
import axios from 'axios';
import UserContext from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('ctalke');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState(false);
  const { setUser, setAuthed } = useContext(UserContext);

  const attemptLogin = async (username, password) => {
    const endpoint = `http://localhost:3000/api/v1/auth/login`;
    const { data } = await axios({
      url: endpoint,
      withCredentials: true,
      method: 'post',
      data: {
        username,
        password
      }
    }).catch(e => {
      setError(true);
      setTimeout(() => setError(false), 1000 * 10);
    });

    if (data.status === 401 || data.status === 404 || data.status === 500) {
      setError(true);
      setTimeout(() => setError(false), 1000 * 10);
      return;
    }

    setAuthed(true);
    setUser(data);
    router.push(`/`);
  };

  return (
    <>
      <Head>
        <title>UQT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="login-form">
          <h1 className="title">Log in to UQT</h1>
          {error && (
            <div className="error">
              <span>Your account or password is incorrect. If you don't remember your username or password, try recovering your account.</span>
            </div>
          )}
          <form
            method="post"
            onSubmit={e => {
              e.preventDefault();
              attemptLogin(username, password);
            }}
          >
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <Link href="recover-account">
            <a>Recover Account</a>
          </Link>
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

          h1 {
            margin-bottom: ${error ? '0' : 'auto'};
          }

          div.login-form {
            width: 350px;
            height: 300px;
            display: flex;
            flex-direction: column;
            text-align: center;
          }

          div.error {
            padding: 1rem;
            font-size: 0.7rem;
            color: red;
          }

          input {
            padding: 0 0.785714285714286rem;
            border-radius: 5px;
            font-size: 1rem;
            width: 100%;
            height: 2.642857142857143rem;
            line-height: 1.928571428571429rem;
            box-sizing: border-box;
            margin: 4px 10px;
            border: 1px solid #e1e1e1;
            transition: border 0.2s ease, color 0.2s ease;
          }

          button {
            margin: 4px 10px;
            padding: 0 1.5rem;
            border-radius: 5px;
            font-weight: 100;
            font-size: 0.85rem;
            cursor: pointer;
            text-transform: uppercase;
            height: 2.7rem;
            width: 100%;
            line-height: 2.7rem;
            transition: border 0.2s, background 0.2s, color 0.2s ease-out;
            background: #000;
            color: #fff;
            border: 1px solid #000;
            margin-bottom: 25px;
          }

          button:hover {
            background: none;
            color: #000;
          }
        `}</style>
      </main>
    </>
  );
};

export default Login;
