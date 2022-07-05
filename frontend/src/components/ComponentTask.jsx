import { useState } from "react";

export default function ComponentTask({ task, remove, update }) {
  const [edit, setEdit] = useState(false);
  const [describe, setDescribe] = useState(task.describe);

  return (
    <>
    {edit ? (
      <>
        <div>
          <input
            type="text"
            value={describe}
            onChange={({ target }) => setDescribe(target.value)}
          />
        </div>
        <div>
          <button
            onClick={() => {
              update(task.id, describe, task.listId);
              setEdit(false);
            }}
          >
          Alterar
          </button>
          <button 
            onClick={() => remove(task.id)}
          >
          Descartar
          </button>
        </div>
      </>
    ) : (
      <>
        <div>
          <input
            type="text"
            value={describe}
            readOnly
          />
          </div>
          <div>
            <button
              onClick={() => setEdit(true)}
            >
              Editar
            </button>
            <button
              onClick={() => remove(task.id)}
            >
              Descartar
            </button>
          </div>
        </>
    )}
    </>
  )
}