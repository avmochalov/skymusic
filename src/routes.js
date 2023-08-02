import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Collections from './Pages/Collections/Collections';
import Registration from './Pages/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import MyPlayList from './Pages/MyPlayList/MyPlayList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myplaylist" element={<MyPlayList />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default AppRoutes;
