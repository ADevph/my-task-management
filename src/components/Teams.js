
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddMember from './AddMember';

const Teams = ({ teams, setTeams }) => {
  const [teamName, setTeamName] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(null);  

  const addTeam = () => {
    const newTeam = { name: teamName, members: [] };
    setTeams([...teams, newTeam]);
    setTeamName('');
  };

  const handleSelectTeam = (name) => {  
    setSelectedTeam(name);
  };

  return (
    <div>
        <img
          src="/b.jpg" 
          alt="Logo" 
          className="w-24 h-24 mr-2 mt-4 mb-6" 
        />
      <h1 className='text-sky-800 text-2xl font-semibold mb-4 ml-2 ' >Manage Teams</h1>
      <input className=' ml-2 text-2xl'
        type="text"
        placeholder=" Write Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button className=' border-4 rounded-lg bg-sky-300 p-2' onClick={addTeam}>Add Team</button>

      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            <Link className=' font-bold p-2 text-sky-800 '
              to={`/teams/${team.name}`} 
              onClick={() => handleSelectTeam(team.name)}
            >
              <br/>
            {team.name}
            
            </Link>
            <br/>
            <br/>
            <Link className=' font-bold p-2 text-sky-600 border-2 ' to="/create-task">Create Task</Link>
          </li>
        ))}
      </ul>

      {selectedTeam && (
        <AddMember selectedTeam={selectedTeam} teams={teams} setTeams={setTeams} />
      )}

<button className=' hover:bg-sky-200 rounded-lg p-2 mt-16'>
    <Link className='text-2xl font-semibold text-blue-600  ' to="/addmember">Assign Member to new team</Link>
    </button>


<div className=' '>
<Link className='text-2xl font-bold ml-2 ' to="/Profile">Go Back to Profile</Link>
</div>
    </div>
  );
};

export default Teams;
