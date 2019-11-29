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
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </div>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
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
        text-decoration: none;
        font-size: 14px;
      }
    `}</style>
  </nav>
);

export default Nav;
