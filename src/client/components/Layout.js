import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';

const Layout = ({ title, compact, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <main className={compact ? 'compact' : ''}>{children}</main>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      main {
        margin: 25px auto;
      }
      main.compact {
        max-width: 960px;
      }
    `}</style>
  </div>
);

export default Layout;
