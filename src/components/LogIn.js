

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('username', user.username);
      localStorage.setItem('bio', user.bio);

      navigate('/profile');
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="p-4">
      <img
        src="/b.jpg" 
        alt="Logo" 
        className="w-24 h-24 mr-2 mb-6" 
      />
      <h1 className="text-4xl mb-4">Login</h1>
      <form onSubmit={(e) => {e.preventDefault(); handleLogin();}}>
        <input
          className="border p-2 mb-4 w-full"
          type="email"
          placeholder="Enter your Email here "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 mb-4 w-full"
          type="password"
          placeholder="Enter your Password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-sky-500 text-white p-2 mb-8 w-full" type="submit">
          Login
        </button>

        <div className='border-solid border-4 hover:border-double border-indigo-300 text-center rounded-lg'>
          <Link className='text-2xl mt-8 ' to="/SignUp">Don't have an account? SignUp Here!</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
