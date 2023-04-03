import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import InputTask from './components/InputTask';
import { ListTask } from './components/ListTask';

var api_url = "http://localhost:8000/api/tasks/"

function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
      axios
      .get(api_url)
      .then((data) => setTasks(data.data) )
  }, [])

  function handleAdd(task) {
    const newTask = { id : tasks.length + 1, name : task.task, addition_info: '', completed: false,  };
    setTasks([newTask, ...tasks]);
    axios.post(api_url, newTask)
  }

  function handleDelete(task) {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    axios.delete(`${api_url}${task.id}/`);
  }

  function handleToggle(task) {
    const updatedTasks = tasks.map((t) => {
      if(t.id === task.id) {
        return {...t, completed: !t.completed};
      }
      return t;
    });
    setTasks(updatedTasks);
    const taskData = {name: task.name, addition_info: task.addition_info, completed: !task.completed};
    axios.put(`${api_url}${task.id}/`, taskData)
  }

  return (
    <div className="App">
      <header className="App-header"> TODO APP </header>
      <InputTask onAdd={handleAdd} />
      <ListTask tasks={tasks} onToggle={handleToggle} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
