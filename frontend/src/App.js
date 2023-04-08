import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import InputTask from './components/InputTask';
import { ListTask } from './components/ListTask';
import {API_URL} from './Globals';

var api_url = "http://localhost:8000/api/tasks/"

function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
      axios
      .get(api_url)
      .then((data) => setTasks(data.data) )
  }, [])

  return (
    <div className="App">
      <header className="App-header"> TODO APP </header>
      <InputTask tasks={tasks} setTasks={setTasks} api_url={api_url} />
      <ListTask tasks={tasks} setTasks={setTasks} api_url={api_url} />
    </div>
  );
}

export default App;
