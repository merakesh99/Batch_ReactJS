import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from './Note'


function App() {
  const [count, setCount] = useState(0)
  let myName = "Rakesh Sadhukhan"
  let myAge = 25;
  let myTask = {
    title: "Note Taking App",
    body: "create a basic opeation of Add Note",
    time: "15 min"
  }

  function Update(){

    if(count >-30){   //0<=-30

      setCount(count - 1);
    }
    else{
      alert("bye")
    }
  }
// update() 
let bio = {
  title: "Note Taking App",
  body: "create a basic opeation of Add Note",
  time: "15 min"
}
  return (
   <>
    {/* <Note bio={bio}/> */}
    {/* <h1 className="card">Hey day 03 : {count}</h1>
    <h2 className="card">Build Logic upto minus 30</h2>
    <button onClick={Update}>Less</button> */}

    <Note />

    {/* <Note note="PQR"/> */}

   </>
  )
}

export default App
