import React, {useState} from "react";
import Task from "./components/Task";
import AddTaskForm from "./components/AddTaskForm";
import './App.css';

interface ExampleOfTask  {
  id: string;
  info: string;
}

function App() {
  const [tasks, setTasks] = useState <ExampleOfTask[]> ([
    {info: 'Make dinner', id: '1'},
    {info: 'Take shower', id: '2'},
    {info: 'Clean the bathroom', id: '3'},
  ]);
  const [currentTask, setCurrentTask] = useState('');

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(event.target.value);
  };

  const deleteTask = (id:string) => {
    setTasks((prevState ) => prevState.filter(task => {
      return task.id !== id;
    }));
  };

  const addTask = () => {
    setTasks(prevState => {
      const lastItem = prevState[prevState.length - 1];
      const idNumber = lastItem ? lastItem.id + 1 : 1;
      const newId = String(idNumber);
      // const newTask = {info: currentTask, newId};
      return [...prevState,{
        id: newId,
        info: currentTask,
      }];
    });
  };

  return (
    <div className='container mt-2'>
      {tasks.length !== 0 &&
        tasks.map(task =>
          <Task
            info={task.info}
            onDelete={() => deleteTask(task.id)}
          >
          </Task>)}
      <AddTaskForm
        onTaskChange = {(event) => changeTask(event)}
        onAdd = {() => addTask()}
      >
      </AddTaskForm>
    </div>
  );
}
export default App;
