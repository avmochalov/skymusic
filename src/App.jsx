import React from 'react';
import AppRoutes from './routes';
import { UserContext } from './context/user';

const App = () => {
  return (
    <UserContext.Provider value={JSON.parse(localStorage.getItem('user'))}>
      <AppRoutes />
    </UserContext.Provider>
  );
};

export default App;
