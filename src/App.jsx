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
     <div className="card">
      <input type='password' 
      placeholder='digite aqui' 
      onChange={handleTexto}/>
        <button onClick={handleClick}>Clique Aqui</button>
        {texto}
      </div>
    </>
  )
}

export default App
 