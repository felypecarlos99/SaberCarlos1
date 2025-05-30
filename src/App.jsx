import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let tarefas=[]
function App() {
  const [ materia, setMateria ] = useState("") 
  const [ dia, setDia ] = useState("") 

  const handleClick = ()=> { 
   tarefas.push({id:tarefas.length, materia, dia})
    console.log(tarefas)
    setMateria("")
    setDia("")
  }

  const handleMateria = (e) => {
    setMateria(e.target.value)
  }

  const handleDia = (e) => {
    setDia(e.target.value)
  }
  return (
    <>
    <div className='container'>
    <div><h1>CHECKLIST</h1></div>
    <div className='card1'><input type='text' 
                 placeholder='digite aqui' 
                  onChange={handleMateria}
                  value={materia}/>
                  <input type="number"
                  placeholder='digite aqui'
                  onChange={handleDia}
                  value={dia}/>
             <button onClick={handleClick}>Clique Aqui</button>
            
    <div className='card2'>
    {tarefas.map(e=>(
              <div key={e.materia}>
                <p>matéria: {e.materia}</p>
                <p>dia: {e.dia}</p>
             </div>
             ))}
    </div>
      </div>
      </div>
    </>
  )
}

export default App
 