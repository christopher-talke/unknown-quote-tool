import React, { useState } from 'react';
import UserContext from '../context/UserContext';

const Provider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authed, setAuthed] = useState(false);

  return <UserContext.Provider value={{ user, setUser, authed, setAuthed }}>{children}</UserContext.Provider>;
};

export default Provider;
