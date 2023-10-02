import React, { useState } from 'react';
import AppRoutes from './routes';
import { UserContext } from './context/user';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  // JSON.parse(localStorage.getItem('user'))
  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <AppRoutes />
    </UserContext.Provider>
  );
};

export default App;
