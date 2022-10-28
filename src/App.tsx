import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Task from "./Task/Task";
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    {task: 'Buy soda', id: nanoid()},
    {task: 'Walk with dog', id: nanoid()},
    {task: 'Do homework-53', id: nanoid()},
  ]);

  const [currentTask, setCurrentTask] = useState('');

  const taskComponents = tasks.map(task =>
    <Task
      key={task.id}
      task={task.task}
      onDelete={() => deleteTask(task.id)}
    />
  );

  const currentTaskD = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTask = event.target.value;
    setCurrentTask(newTask);
  };

  const addTask = () => {
    if(currentTask) {
      const newTask = {task: currentTask, id: nanoid()};
      setTasks([...tasks, newTask]);
    } else {
      alert('Введите текст задачи')
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h3>TO DO List</h3>
      <AddTaskForm
        currentTaskD={event => currentTaskD(event)}
        onTaskAdd={addTask}
      />
      {taskComponents}
    </div>
  );
};

export default App;