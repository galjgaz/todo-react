import React from 'react';
import { ListItem } from './components/ListItem';
import { TaskField } from './components/TaskField';
import profileImage from './img/avatar.jpg';
import './App.css';

/*function App() {
  return (
    <div className="App">
    <h1> My React Pages</h1>
    <h3> Autor: Gurun</h3>
    <img src={profileImage} alt="profile image"/>
    </div>
  );
 } */

function App() {
  const [tasks, setTasks] = React.useState([
    {
      text: 'To do, to do ReactJS',
      completed: true,
    },
    
    {
      text: ' To Do of ReactJS and NodeJS',
      completed: false,
    },
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className="todo">
      <div className="todo__header">
      <h2> My To Do React Pages</h2>
       <h4> Gurun</h4>
    <img src={profileImage} alt="profile image"/>
        <h4>Tilauslista</h4>
      </div>
      <TaskField onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
