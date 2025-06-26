import React from "react"

export const Formulario = ({
  setDescricao,
  setTitulo,
  setMateria,
  setDia,
  descricao,
  titulo,
  materia,
  dia,
  handleClick,
  setFiltroMateria,
  setFiltroDia,
  filtroMateria,
  filtroDia
}) => {
  return (
    <>
      <div className="card1">
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

      <div className="card2">
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
    </>
  )
}
