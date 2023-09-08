

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import TaskDetail from './TaskDetail';

const TeamSpecificPage = ({ teams, tasks, onUpdateTaskStatus }) => {
  const { teamName } = useParams();
  const team = teams.find((team) => team.name === teamName);

  const teamTasks = team && team.tasks ? team.tasks : [];

  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('Priority');

  return (
    <div>
      
      <h1 className='font-bold text-sky-600'>{teamName} Tasks</h1>
      <TaskDetail tasks={teamTasks} onUpdateTaskStatus={onUpdateTaskStatus} />
    
    
      <div className=' mb-8 mt-8 '>
<Link className='text-2xl font-bold ml-2 border-8 rounded-lg ' to="/TaskDetail">Go to Dashboard</Link>
</div>
    
      <div className=''>
<Link className='text-2xl font-bold ml-2 border-8 rounded-lg mt-16' to="/CreateTask">Create More Tasks</Link>
</div>
    
    </div>
  );
};

export default TeamSpecificPage;
