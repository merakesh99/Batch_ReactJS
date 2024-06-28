import { useState, useEffect } from 'react';
import './App.css';

function Note() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState(''); 

  // Load TODOs from local storage on app startup
//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos'));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

  // Update local storage whenever TODOs change
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() !== '') {    //task = '   '   task.trim() = '' !== ''
      setTodos([...todos,task]);
      localStorage.setItem('todos',JSON.stringify(todos));
      setTask('');
    }
  };

  // const handleRemoveTodo = (index) => {
  //   const newTodos = todos.filter((_, i) => i !== index);
  //   setTodos(newTodos);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NoteWrap</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task here"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </header>

     {
      todos.map((todo,index)=>(
        <li key={index}>
          {todo}
        </li>
      ))
     }
    </div>
  );
}

// function Note({bio}){
//     // let name = "Rakesh Sadhukhan"
//     return (
//         <>
//             <h1>My Name is {bio.title}</h1>
//             <h1> DESC = {bio.body}</h1>
//             <h1>Time =  {bio.time}</h1>
//         </>
//     )
// }

export default Note;