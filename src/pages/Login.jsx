import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserController from '../networking/controllers/user-controller';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await UserController.login(email, password);
      navigate('/Home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="username" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
