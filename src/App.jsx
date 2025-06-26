import { useState } from 'react'
import './App.css'
import { Formulario } from './components/formulario'
import { ListaTarefas } from './components/ListaTarefas'

let tarefas = []

function App() {
  const [descricao, setDescricao] = useState("")
  const [titulo, setTitulo] = useState("")
  const [materia, setMateria] = useState("")
  const [dia, setDia] = useState("")
  const [atualizar, setAtualizar] = useState(0)
  const [filtroMateria, setFiltroMateria] = useState("")
  const [filtroDia, setFiltroDia] = useState("")

  const handleClick = () => {
    tarefas.push({
      id: tarefas.length,
      materia,
      dia,
      descricao,
      titulo,
      concluida: false
    })
    setDescricao("")
    setTitulo("")
    setMateria("")
    setDia("")
    setAtualizar(atualizar + 1)
  }

  const marcarConcluida = (id) => {
    const tarefa = tarefas.find(t => t.id === id)
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida
      setAtualizar(atualizar + 1)
    }
  }

  const tarefasFiltradas = tarefas.filter(t =>
    (filtroMateria === "" || t.materia === filtroMateria) &&
    (filtroDia === "" || t.dia === filtroDia)
  )

  return (
    <div className='container'>
      <h1>CHECKLIST</h1>

      <Formulario
        setDescricao={setDescricao}
        setTitulo={setTitulo}
        setMateria={setMateria}
        setDia={setDia}
        descricao={descricao}
        titulo={titulo}
        materia={materia}
        dia={dia}
        handleClick={handleClick}
        setFiltroMateria={setFiltroMateria}
        setFiltroDia={setFiltroDia}
        filtroMateria={filtroMateria}
        filtroDia={filtroDia}
      />

      <ListaTarefas tarefas={tarefasFiltradas} marcarConcluida={marcarConcluida} />
    </div>
  )
}

export default App
