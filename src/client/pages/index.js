import React, { useState, useContext } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import UserContext from '../context/UserContext';
import SearchResults from '../components/SearchResults';

const mockData = [
  {
    id: 100003,
    name: 'New Server Proposal & Office 365 Migration',
    status: 'Draft'
  },
  {
    id: 100004,
    name: 'Replacement Workstation',
    status: 'Won'
  },
  {
    id: 100005,
    name: 'Office 365 Migration Project',
    status: 'Lost'
  },
  {
    id: 100006,
    name: 'IaaS Cloud Migration',
    status: 'Review'
  },
  {
    id: 100007,
    name: 'Remediation for Virtual Server (Paging)',
    status: 'Sent'
  }
];

const Home = ({ currentUser }) => {
  const [search, setSearch] = useState('');
  const { setUser, setAuthed } = useContext(UserContext);
  const [data, setData] = useState(mockData);

  // If username could be obtained at pre-render, feed into context
  if (currentUser !== '') {
    setUser(currentUser);
    setAuthed(true);
  }

  return (
    <Layout title="UQT" compact currentUser={currentUser}>
      <SearchBar value={search} placeholder="Search for a quote..." onChange={newValue => setSearch(newValue)} />
      <SearchResults results={data} />
      <style jsx>{`
        h3 {
          display: inline-block;
        }
      `}</style>
    </Layout>
  );
};

Home.getInitialProps = async ({ req, res }) => {
  if (req !== undefined) {
    // Try and obtain user at render, only works if logged in and JWT token issued
    const { data } = await axios(`http://localhost:3000/api/v1/user/`, {
      withCredentials: true,
      headers: req.headers || ''
    });

    // If unauthorised or not found, redirect to login
    if (data.status === 401 || data.status === 404) {
      res.writeHead(302, {
        Location: '/login'
      });
      res.end();
    }

    // If user populates, feed props into parent page
    return { currentUser: data };
  }
  return {};
};

export default Home;
