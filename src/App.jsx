import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let tarefas=[]
function App() {
  const [ descricao, setDescricao ] = useState ("")
  const [ titulo, setTitulo ] = useState("")
  const [ materia, setMateria ] = useState("") 
  const [ dia, setDia ] = useState("") 

  const handleClick = ()=> { 
   tarefas.push({id:tarefas.length, materia, dia, descricao, titulo})
    console.log(tarefas)
    setMateria("")
    setDia("")
    setTitulo("")
    setDescricao("")
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
                 placeholder='Título' 
                  onChange={handleTitulo}
                  value={titulo}/>
                  <input type="text"
                  placeholder='Descrição'
                  onChange={handleDescrição}
                  value={descrição}/>
                  <select>
  <option value="valor1">Matemática</option>
  <option value="valor2">Português</option>
  <option value="valor3">Física</option>
  <option value="valor4">História</option>
  <option value="valor5">Geografia</option>
  <option value="valor6">Química</option>
  <option value="valor7">Religião</option>
  <option value="valor8">Filosofia</option>
  onChange={handleMateria}
</select>
<select>
  <option value="valor1">Segunda</option>
  <option value="valor2">Terça</option>
  <option value="valor3">Quarta</option>
  <option value="valor4">Quinta</option>
  <option value="valor5">Sexta</option>
  onChange={handleDia}
</select>
             <button onClick={handleClick}>Adicionar Tarefa </button>
            
    <div className='card2'>
    {tarefas.map(e=>(
              <div key={e.materia}>
                <p>Título: {e.titlo}</p>
                <p>Descrição: {e.descricao}</p>
                <p>Matéria: {e.materia}</p>
                <p>Dia: {e.dia}</p>
             </div>
             ))}
    </div>
      </div>
      </div>
    </>
  )
}

export default App
 