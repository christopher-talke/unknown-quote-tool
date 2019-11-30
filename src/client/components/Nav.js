import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/account', label: 'Account' },
  { href: '/logout', label: 'Logout' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
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
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a className={label === 'Logout' ? 'logout' : ''}>{label}</a>
            </Link>
          </li>
        ))}
      </div>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
        padding: 15px 0;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
      }
      nav h1.title {
        margin: 0;
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

export default Nav;
