import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { email, password, username, bio };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  

    setEmail('');
    setPassword('');
    setUsername('');
    setBio('');
  };



  return (
    <div className="p-4">
      <img
          src="/b.jpg" 
          alt="Logo" 
          className="w-24 h-24 mr-2 mb-6" 
        />
      <h1 className="text-3xl mb-4">Sign-Up</h1>
      <form onSubmit={(e) => {e.preventDefault(); handleSignUp();}}>
        <input
          className="border p-2 mb-4 w-full"
          type="email"
          placeholder="Please Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 mb-4 w-full"
          type="password"
          placeholder="Please Enter your  Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="border p-2 mb-4 w-full"
          type="text"
          placeholder="Please Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          className="border p-2 mb-4 w-full"
          placeholder="Please Enter your Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-sky-600 text-white p-2 w-full mb-8" type="submit">
          Sign Up
        </button>
      </form>

<div className='text-center '>

      <Link className='text-2xl text-sky-800 hover:text-sky-500' to="/">Back to Login Page</Link>
</div>
    </div>
  );
};

export default SignUp;
