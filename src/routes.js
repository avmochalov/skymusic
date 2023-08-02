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
        element=
        {<ProtectedRoute isAllowed={Boolean(localStorage.getItem('Token'))} />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections/:id" element={<Collections />} />
        <Route path="/myplaylist" element={<MyPlayList />} />
        <Route path="notfound" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default AppRoutes;
