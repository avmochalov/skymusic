import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Collections from './Pages/Collections/Collections';
import Registration from './Pages/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import MyPlayList from './Pages/MyPlayList/MyPlayList';
import { ProtectedRoute } from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem('Token'))} />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Collections />} />
        <Route path="/favorites" element={<MyPlayList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default AppRoutes;