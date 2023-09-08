

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AddMember = ({ teams, setTeams }) => {
  const [newMember, setNewMember] = useState('');
  const [selectedTeamToAdd, setSelectedTeamToAdd] = useState('');

  const handleAddMember = () => {
    if (!newMember || !selectedTeamToAdd) return;

    const updatedTeams = teams.map((team) => {
      if (team.name === selectedTeamToAdd) {
        return { ...team, members: [...team.members, newMember] };
      }
      return team;
    });

    setTeams(updatedTeams);
    setNewMember('');
  };

  return (

    <div>
       <img
          src="/b.jpg" 
          alt="Logo" 
          className="w-24 h-24 mr-2 mb-6" 
        />
      <h1 className="text-3xl mb-4 text-sky-800 ">Add Member to New Team</h1>
      <select onChange={(e) => setSelectedTeamToAdd(e.target.value)}>
        <option className=' ml-2 ' value="">Select Team</option>
        {teams.map((team, index) => (
          <option key={index} value={team.name}>
            {team.name}
          </option>
        ))}
      </select>

      <input className='ml-4 border-4 rounded-lg  '
        type="text"
        placeholder=" Enter Member Name"
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
      />
     <br/>
      <button className=' border-4 rounded-lg mt-4 ml-4 p-2 bg-sky-300 ' onClick={handleAddMember}>Add Member</button>
   
   
      <div className='mt-24 ml-4' >
      <button className='hover:bg-sky-200 rounded-lg p-2 text-center'>
      <Link className='underline underline-offset-4 text-2xl font-semibold text-blue-600 ' to="/create-task">Task Create</Link>

      </button>
<br/>
      <button className='hover:bg-sky-200 rounded-lg p-2 '>
      <Link className='underline underline-offset-4 text-2xl font-semibold text-blue-600 ' to="/teams">View and Manage Teams</Link>
    </button>   
    </div>

    </div>



  );
};

export default AddMember;
