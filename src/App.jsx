import { useState } from 'react'
import './App.css'

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
    <>
      <div className='container'>
        <div><h1>CHECKLIST</h1></div>

        <div className='card1'>
          <input type='text' placeholder='Título' onChange={e => setTitulo(e.target.value)} value={titulo} />
          <input type="text" placeholder='Descrição' onChange={e => setDescricao(e.target.value)} value={descricao} />

          <select onChange={e => setMateria(e.target.value)} value={materia}>
            <option value="">Selecione a matéria</option>
            <option value="Matemática">Matemática</option>
            <option value="Português">Português</option>
            <option value="Física">Física</option>
            <option value="História">História</option>
            <option value="Geografia">Geografia</option>
            <option value="Química">Química</option>
            <option value="Religião">Religião</option>
            <option value="Filosofia">Filosofia</option>
          </select>

          <select onChange={e => setDia(e.target.value)} value={dia}>
            <option value="">Selecione o dia</option>
            <option value="Segunda">Segunda</option>
            <option value="Terça">Terça</option>
            <option value="Quarta">Quarta</option>
            <option value="Quinta">Quinta</option>
            <option value="Sexta">Sexta</option>
          </select>

          <button onClick={handleClick}>Adicionar Tarefa</button>
        </div>

    
        <div className='card2'>
          <h3>Filtrar Tarefas</h3>
          <select onChange={e => setFiltroMateria(e.target.value)} value={filtroMateria}>
            <option value="">Todas as matérias</option>
            <option value="Matemática">Matemática</option>
            <option value="Português">Português</option>
            <option value="Física">Física</option>
            <option value="História">História</option>
            <option value="Geografia">Geografia</option>
            <option value="Química">Química</option>
            <option value="Religião">Religião</option>
            <option value="Filosofia">Filosofia</option>
          </select>

          <select onChange={e => setFiltroDia(e.target.value)} value={filtroDia}>
            <option value="">Todos os dias</option>
            <option value="Segunda">Segunda</option>
            <option value="Terça">Terça</option>
            <option value="Quarta">Quarta</option>
            <option value="Quinta">Quinta</option>
            <option value="Sexta">Sexta</option>
          </select>
        </div>


        <div className='card3'>
          {tarefasFiltradas.map(e => (
            <div key={e.id} style={{ textDecoration: e.concluida ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={e.concluida}
                onChange={() => marcarConcluida(e.id)}
              />
              <p><strong>Título:</strong> {e.titulo}</p>
              <p><strong>Descrição:</strong> {e.descricao}</p>
              <p><strong>Matéria:</strong> {e.materia}</p>
              <p><strong>Dia:</strong> {e.dia}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App