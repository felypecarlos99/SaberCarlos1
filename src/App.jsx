import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ count, setCount ] = useState(1) 
  const [ texto, setTexto ] = useState("") 

  const handleClick = ()=> { 
    setCount(count * 2) 
    console.log(count)
  }

  const handleTexto = (e) => {
    console.log(e.target.value)
    setTexto(e.target.value)
  }
  return (
    <>
    <div className='container'>
    <div><h1>CHECKLIST</h1></div>
    <div className='card1'><input type='text' 
                 placeholder='adicionar tarefa' 
                  onChange={handleTexto}/>
             <button onClick={handleClick}>Clique Aqui</button></div>
    <div className='card2'></div>
      </div>
    </>
  )
}

export default App
 