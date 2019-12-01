import React, { useState, useContext } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import UserContext from '../context/UserContext';

const Home = () => {
  const [search, setSearch] = useState('');
  const { user, authed } = useContext(UserContext);
  const onChange = newValue => setSearch(newValue);

  return (
    <Layout compact>
      <SearchBar value={search} placeholder="Search for a quote..." onChange={onChange} />
      <span>
        My name is{' '}
        {authed ? (
          <h3>
            {user.firstName} {user.lastName}
          </h3>
        ) : (
          ``
        )}
      </span>
      <style jsx>{`
        h3 {
          display: inline-block;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
