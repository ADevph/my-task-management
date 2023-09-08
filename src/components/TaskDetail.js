import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const TaskDetail = ({ tasks, onUpdateTaskStatus }) => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortCriteria, setSortCriteria] = useState('priority');

  const handleStatusChange = (taskId, newStatus) => {
    onUpdateTaskStatus(taskId, newStatus);
  };

  let filteredTasks = tasks;

  if (filterStatus !== 'All') {
    filteredTasks = tasks.filter(task => task.status === filterStatus);
  }

  filteredTasks.sort((a, b) => {
    if (a[sortCriteria] < b[sortCriteria]) {
      return -1;
    }
    if (a[sortCriteria] > b[sortCriteria]) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
        <img
          src="/b.jpg" 
          alt="Logo" 
          className="w-24 h-24 mr-2 mb-6" 
        />



      <h1 className=' font-bold text-sky-800 mb-4 ' >Task Details</h1>
      <div>
        <label className=' text-xl font-semibold ' >Filter by Status: </label>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label className=' text-xl font-semibold '>Sort by: </label>
        <select onChange={(e) => setSortCriteria(e.target.value)}>
          <option className=' text-xl font-semibold ' value="priority">Priority</option>
          <option className=' text-xl font-semibold ' value="dueDate">Due Date</option>
          
        </select>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p className=' text-xl '>Due Date: {task.dueDate}</p>
            <p className=' text-xl '>Priority: {task.priority}</p>
            <p className=' text-xl '>Assigned To: {task.assignedTo}</p>
            <p className=' text-xl '>Team: {task.teamName}</p>
            <p className=' text-xl '>Status: {task.status}</p>
            <select onChange={(e) => handleStatusChange(task.id, e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </li>
        ))}
      </ul>


      <div className=' mb-8 mt-8'>
<Link className='text-2xl font-bold ml-2 text-sky-800' to="/Profile">Go Back to Profile</Link>
</div>

    </div>
  );
};

export default TaskDetail;
