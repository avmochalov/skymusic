import React, { useState } from 'react';
import AppRoutes from './routes';
import { UserContext } from './context/user';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { refreshUserToken } from './API/user';

const App = () => {
  if (Boolean(localStorage.getItem('user'))) {
    setInterval(() => {
      refreshUserToken().then((response) => {
        localStorage.setItem('accessToken', JSON.stringify(response.access));
      });
    }, 199000);
  }

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')),
  );
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </UserContext.Provider>
  );
};

export default App;
