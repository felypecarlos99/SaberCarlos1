import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let pessoas=[]
function App() {
  const [ count, setNome ] = useState("") 
  const [ texto, setIdade ] = useState("") 

  const handleClick = ()=> { 
   pessoas.push({id:pessoas.length,nome, idade})
    console.log(pessoas)
    setNome("")
  }

  const handleNome = (e) => {
    setNome(e.target.value)
  }

  const handleIdade = (e) => {
    setIdade(e.target.value)
  }
  return (
    <>
    <div className='container'>
    <div><h1>CHECKLIST</h1></div>
    <div className='card1'><input type='text' 
                 placeholder='digite aqui' 
                  onChange={handleNome}
                  value={nome}/>
                  <input type="number"
                  placeholder='digite aqui'
                  onChange={handleIdade}
                  value={idade}/>
             <button onClick={handleClick}>Clique Aqui</button>
             {pessoas.map(e=>(
              <div key={e.nome}>
                <p>Nome: {e.nome}</p>
                <p>Idade: {e.idade}</p>
             </div>
             ))}
    <div className='card2'>
      {texto}
    </div>
      </div>
      </div>
    </>
  )
}

export default App
 