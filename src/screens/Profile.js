import React, { useContext } from 'react';
import { UserContext } from '../context/User';
import { AppContext } from '../context/AppProvider';

export default function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  return <div>Profile Page</div>;
}
