import React from "react"

export const ListaTarefas = ({ tarefas, marcarConcluida }) => {
  return (
    <div className="card3">
      {tarefas.map(e => (
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
  )
}
