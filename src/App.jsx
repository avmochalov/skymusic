import React, { useState } from 'react';
import AppRoutes from './routes';
import { UserContext } from './context/user';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')),
  );
  console.log('Это я все порчу');
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </UserContext.Provider>
  );
};

export default App;
