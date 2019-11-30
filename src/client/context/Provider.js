import React, { useState } from 'react';
import UserContext from '../context/UserContext';

const Provider = ({ children }) => {
  const [user, setUser] = useState('Jim');

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default Provider;
