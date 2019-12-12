import React, { useContext } from 'react';
import Link from 'next/link';
import router from 'next/router';
import axios from 'axios';
import UserContext from '../context/UserContext';

const Nav = () => {
  const { setUser, setAuthed } = useContext(UserContext);
  const logout = async e => {
    e.preventDefault();
    document.cookie;
    const { data } = await axios.get(`http://localhost:3000/api/v1/auth/logout?v=${Date.now()}`, { withCredentials: true });
    router.push(`/login?signedOut=${data.message || 'false'}`);
    setAuthed(false);
    setUser({});
  };

  return (
    <nav>
      <ul>
        <div className="nav-left">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Products</a>
            </Link>
          </li>
        </div>
        <h1 className="title">UQT</h1>
        <div className="nav-right">
          <li key="nav-account">
            <Link href="/account">
              <a>Account</a>
            </Link>
          </li>
          <li key="nav-logout">
            <a onClick={e => logout(e)} className="logout">
              Logout
            </a>
          </li>
        </div>
      </ul>

      <style jsx>{`
        nav {
          text-align: center;
          padding: 0px 0;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.35);
        }
        nav h1.title {
          margin: 0;
          margin-top: 5px;
        }
        ul {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        nav div.nav-left,
        nav div.nav-right {
          display: flex;
          flex-direction: row;
          justify-items: center;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #111;
          opacity: 0.7;
          height: 1.5rem;
          line-height: 1.5rem;
          text-decoration: none;
          font-size: 14px;
        }
        a.logout,
        a.login {
          border: 1px solid #007aff;
          background-color: #007aff;
          color: #fff;
          height: 1.5rem;
          border-radius: 2.5px;
          line-height: 1.5rem;
          padding: 0 0.75rem;
          width: auto;
          transition: all 0.25s;
        }
        a.login:hover,
        a.logout:hover {
          border: 1px solid #007aff;
          background-color: #fff;
          color: #007aff;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
