import React, { useState } from 'react';
import AppRoutes from './routes';
import { UserContext } from './context/user';

const App = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  console.log("Это я все порчу")
  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <AppRoutes />
    </UserContext.Provider>
  );
};

export default App;
