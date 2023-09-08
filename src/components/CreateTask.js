import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CreateTask = ({ teams, handleAddTask }) => {
  const navigate = useNavigate();
  const [currentTeam, setCurrentTeam] = useState('');
  const team = teams ? teams.find((t) => t.name === currentTeam) : null;
  const teamMembers = team ? team.members : [];

  useEffect(() => {
    console.log("Teams:", teams);  
    console.log("Selected team:", team);  
    console.log("Team Members:", teamMembers); 
  }, [teams, team, teamMembers]);

  const [taskDetails, setTaskDetails] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    assignedTo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };


const handleSubmit = (e) => {
    e.preventDefault();
   
    const newTask = { ...taskDetails, teamName: currentTeam };
    handleAddTask(newTask);

    
    navigate(`/teams/${currentTeam}`);
  };


  return (
    <form onSubmit={handleSubmit}>
       <img
          src="/b.jpg" 
          alt="Logo" 
          className="w-24 h-24 mr-2 mt-4 mb-6" 
        />
      <h1 className='text-2xl font-semibold mb-4' >Create New Task</h1>
      <label className='text-xl font-semibold' >Select Team:</label>
      <select onChange={(e) => setCurrentTeam(e.target.value)}>
        <option className=' ' value="">Select</option>
        {teams && teams.map((team, index) => (
          <option key={index} value={team.name}>{team.name}</option>
        ))}
      </select>
      <br />
      <label className='font-bold' >Title: </label>
      <input className='border-4 w-48 ml-12' type="text" name="title" onChange={handleChange} required />
      <br />
      <label className=' font-bold ' >Description: </label>
      <input className=' border-4 w-48 h-32 mt-4 ' type="text" name="description" onChange={handleChange} required></input>
      <br />
      <label className=' font-bold mt-4 ' >Due Date: </label>
      <input className='p-2' type="date" name="dueDate" onChange={handleChange} required />
      <br />
      <label className=' font-bold '>Priority: </label>
      <select name="priority" onChange={handleChange} required>
        <option value="">Select</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <label className='font-bold' >Assign to: </label>
<select name="assignedTo" onChange={handleChange} required>
  <option value="">Select</option>
  {teamMembers && teamMembers.map((member, index) => (
    <option key={index} value={member}>{member}</option>
  ))}
</select>

      <br />
      <button className=' bg-sky-500 rounded-lg w-32 mt-4 ' type="submit">Submit</button>
    <br/>
    <br/>
    <br/>
      <button className='hover:bg-sky-200 rounded-lg p-2 text-center'>
      <Link className='underline underline-offset-4 text-2xl font-semibold text-blue-600 ' to="/profile">Go back to Profile</Link>

      </button>
    </form>

    
  );
};

export default CreateTask;
