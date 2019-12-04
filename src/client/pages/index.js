import React, { useState, useContext } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import UserContext from '../context/UserContext';

const Home = ({ currentUser }) => {
  const [search, setSearch] = useState('');
  const { setUser, setAuthed } = useContext(UserContext);

  // If username could be obtained at pre-render, feed into context
  if (currentUser !== '') {
    setUser(currentUser);
    setAuthed(true);
  }

  return (
    <Layout compact currentUser={currentUser}>
      <SearchBar value={search} placeholder="Search for a quote..." onChange={newValue => setSearch(newValue)} />
      <style jsx>{`
        h3 {
          display: inline-block;
        }
      `}</style>
    </Layout>
  );
};

Home.getInitialProps = async ({ req, res }) => {
  // Try and obtain user at render, only works if logged in and JWT token issued
  const { data } = await axios(`http://localhost:3000/api/v1/user/`, {
    withCredentials: true,
    headers: req.headers
  });

  console.log(data);

  // If unauthorised or not found, redirect to login
  if (data.status === 401 || data.status === 404) {
    res.writeHead(302, {
      Location: '/login'
    });
    res.end();
  }

  // If user populates, feed props into parent page
  return { currentUser: data };
};

export default Home;
