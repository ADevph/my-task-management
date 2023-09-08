import React, { useState, useEffect } from 'react';
import {Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import CreateTask from './components/CreateTask';
import TaskDetail from './components/TaskDetail';
import Teams from './components/Teams';
import TeamMembers from './components/TeamMembers';
import AddMember from './components/AddMember';
import TeamSpecificPage from './components/TeamSpecificPage';



function App() {
  const [tasks, setTasks] = useState([]);
  const [teamMembers, setTeamMembers] = useState(['Alice', 'Bob', 'Charlie']);
  const [teams, setTeams] = useState([
    { name: 'Team1', members: ['Alice', 'Bob'] },
    { name: 'Team2', members: ['Charlie'] }
  ]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [currentMember, setCurrentMember] = useState(null);

  const addTeam = (teamName) => {
    const newTeam = { name: teamName, members: [] };
    setTeams([...teams, newTeam]);
  };

  const addMemberToTeam = (teamName, memberName) => {
    const updatedTeams = teams.map(team => {
      if (team.name === teamName) {
        team.members.push(memberName);
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  
  const handleAddTask = (newTask) => {
  setTasks([...tasks, newTask]);
  
    const updatedTeams = teams.map((team) => {
      if (team.name === newTask.teamName) {
        team.tasks = team.tasks || [];
        team.tasks.push(newTask);
      }
      return team;
    });
  
    setTeams(updatedTeams);
  };

    const handleUpdateTaskStatus = (id, newStatus) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          task.status = newStatus;
        }
        return task;
      });
      setTasks(updatedTasks);
    };
    
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const storedTeams = JSON.parse(localStorage.getItem('teams') || '[]');
    setTasks(storedTasks);
    setTeams(storedTeams);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [tasks, teams]);

  return (

    <Router>
      <Routes>
    
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addmember" element={<AddMember teams={teams} setTeams={setTeams} />} />       
        <Route path="/taskdetail" element={<TaskDetail tasks={tasks} onUpdateTaskStatus={handleUpdateTaskStatus} />} />       

        <Route path="/teams/:teamName" element={<TeamSpecificPage teams={teams} />} />
          <Route path="/teams/:teamName" element={<TeamMembers teams={teams} />} />
          <Route path="/" element={<AddMember teams={teams} setTeams={setTeams} />} />
       
          <Route  path="/teams/:teamName"  element={<TeamSpecificPage teams={teams} tasks={tasks} onUpdateTaskStatus={handleUpdateTaskStatus} />} />
                

<Route path="/teams" element={<Teams teams={teams} setTeams={setTeams} />} />
<Route path="/teams/:teamName" element={<TeamMembers teams={teams} />} />

<Route path="/create-task" element={<CreateTask teams={teams} handleAddTask={handleAddTask} />} />
<Route path="/teams" element={<Teams teams={teams} setTeams={setTeams} />} />
        <Route path="/createtask" element={<CreateTask onAddTask={handleAddTask} teamMembers={teamMembers} />} />
      </Routes>
    </Router>
  );
  }

export default App;