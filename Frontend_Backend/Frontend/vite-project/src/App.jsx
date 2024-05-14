import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [item, setitem] = useState([]);

  useEffect(() => {
    axios.get("/item")
      .then((Response) => {
        setitem(Response.data);
      })
      .catch((error) => {
        console.log(error)
      })

  })

  return (
    <>
      <h1>Welcome Back!</h1>
      <p>Item:{item.length}</p>
      {item.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <h3>{item.content}</h3>
        </div>
      ))}
    </>
  )
}

export default App
