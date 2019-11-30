import React, { useState, useContext } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import UserContext from '../context/UserContext';

const Home = () => {
  const [search, setSearch] = useState('');
  const { user, setUser } = useContext(UserContext);

  const onChange = newValue => setSearch(newValue);

  return (
    <Layout compact>
      <SearchBar value={search} placeholder="Search for a quote..." onChange={onChange} />
      <style jsx>{``}</style>
    </Layout>
  );
};

export default Home;
