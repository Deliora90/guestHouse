import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import UserService from '../../services/UserService';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, isAuth, error, loading } = useTypesSelector(state => state.user);
  const { registrationUser, loginUser, logoutUser } = useActions();

  if (loading) {
    return <h1>Идет загрузка</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button onClick={() => loginUser(email, password)} type="button">Логин</button>
      <button onClick={() => registrationUser(email, password)} type="button">Регистрация</button>
      <button onClick={() => logoutUser()} type="button">Выйти</button>
      <button onClick={async () => {
        const response = await UserService.fetchUsers();
        console.log(response);
      }} type="button">Получить пользователей</button>
    </div>
  )
}

export default LoginForm;
