import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Profile = () => {
  const username = localStorage.getItem('username');
  const bio = localStorage.getItem('bio');
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem('username');
    localStorage.removeItem('bio');
    localStorage.removeItem('currentUser');

  
    navigate('/');
  };

  return (
    <div className="p-4">
       <img
          src="/b.jpg" 
          alt="Logo" 
          className="w-24 h-24 mr-2 mb-6" 
        />
      <h1 className="text-3xl mb-4 text-sky-800 ">User Profile</h1>
     
     <div className='text-center items-center justify-center'>
      <h1 className="text-3xl mb-4 text-sky-600 text-center ">Welcome, {username} !</h1>
      <img className="mb-4 w-64 h-48 ml-[600px] " src="/e.jpg" alt="Profile Pic" />
      <h2 className="text-xl mb-2 font-semibold">Username: {username}</h2>
      <p className="text-xl font-semibold ">Bio: {bio}</p>
      
      </div>
      <hr className='mt-4'/>

    <div className='mt-4'>

    <button className=' hover:bg-sky-200 rounded-lg p-2'>
    <Link className='underline underline-offset-4 text-2xl font-semibold text-blue-600 ' to="/addmember">Add New Member</Link>
    </button>
   <br/>
    <button className='hover:bg-sky-200 rounded-lg p-2'>
      <Link className='underline underline-offset-4 text-2xl font-semibold text-blue-600 ' to="/teams">View and Manage Teams</Link>
    </button>

      <br/>
      <button className='hover:bg-sky-200 rounded-lg p-2 text-center'>
      <Link className='underline underline-offset-4 text-2xl font-semibold text-blue-600 ' to="/taskdetail">Dashboard</Link>

      </button>
      
      </div>
      
      <button className='underline underline-offset-4 hover:bg-sky-200 rounded-lg p-2 text-2xl font-semibold text-blue-600 ' onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
};


export default Profile;