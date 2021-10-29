import { createContext, useState } from 'react';
import React from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  '';
  const [user, setUser] = useState(
    localStorage.getItem('user_info')
      ? JSON.parse(localStorage.getItem('user_info'))
      : null
  );
  const state = { user, setUser };
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}
export { UserContext, UserProvider };
