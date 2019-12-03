import React from 'react';
import Head from 'next/head';
import IsSignedIn from '../components/IsSignedIn';
import Nav from '../components/Nav';

const Layout = ({ currentUser, title, compact, children }) => (
  <IsSignedIn currentUser={currentUser}>
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
  </IsSignedIn>
);

export default Layout;
