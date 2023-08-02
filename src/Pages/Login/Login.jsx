import React from 'react';
import * as S from './LoginStyles';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const addToken = () => {
    localStorage.setItem('Token', 'lfd123mkw1ewqsakl');
    navigate('/');
  };
  return (
    <S.LoginForm>
      <input placeholder="Введите логин"></input>
      <input placeholder="Введите пароль"></input>
      <button onClick={addToken}>Войти</button>
      <button>Зарегистрироваться</button>
    </S.LoginForm>
  );
};

export default Login;
