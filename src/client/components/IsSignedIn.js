import React, { useEffect, useContext } from 'react';
import router from 'next/router';
import UserContext from '../context/UserContext';

const IsSignedIn = props => {
  const { user, setUser, authed, setAuthed } = useContext(UserContext);
  const { currentUser, children } = props;

  useEffect(() => {
    if (!authed && user === {} && currentUser === '') {
      router.push('/login');
    }
  }, [authed, user]);

  if (currentUser !== undefined) {
    setUser(currentUser);
    setAuthed(true);
  }

  return <div>{children}</div>;
};

export default IsSignedIn;
