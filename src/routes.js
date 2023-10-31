import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AuthPage from './Pages/Auth/Auth';
import Collections from './Pages/Collections/Collections';
import Registration from './Pages/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import MyPlayList from './Pages/MyPlayList/MyPlayList';
import { ProtectedRoute } from './ProtectedRoute';
import Layout from './components/Layout/Layout';

const AppRoutes = () => {
  const [isLoading, setLoadingStatus] = useState(true);
  const [newApiError, setNewApiError] = useState(null);
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem('user'))} />
        }
      >
        <Route
          path="/"
          element={
            <Layout
              isLoading={isLoading}
              setLoadingStatus={setLoadingStatus}
              setNewApiError={setNewApiError}
            />
          }
        >
          <Route
            index
            element={<Home isLoading={isLoading} newApiError={newApiError} />}
          />
          <Route path="/category/:id" element={<Collections />} />
          <Route
            path="/favorites"
            element={
              <MyPlayList isLoading={isLoading} newApiError={newApiError} />
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
    </Routes>
  );
};

export default AppRoutes;
