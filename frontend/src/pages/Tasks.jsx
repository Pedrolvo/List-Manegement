import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestCreateTask, requestDeleteTask, requestGetTasks, requestUpdateTask } from "../services/Tasks";
import ComponentTask from "../components/ComponentTask";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [describre, setDescribe]= useState('');
  const [createButton, setCreateButton] = useState(false);
  const listId = useParams().id;
  

  const findTasks = async (id) => {
    const endpoint = `/tasks/${id}`;
    try {
      const allListTasks = await requestGetTasks(endpoint);
      setTasks(allListTasks);
      console.log(allListTasks)
      console.log()
    } catch (err) {
      setTasks([]);
      console.log(err);
    }
  };

  const removeTask = async (idTask) => {
    const updatedTasks = tasks.filter(({ id }) => id !== idTask);
    setTasks(updatedTasks);

    try {
      const endpoint = `/tasks/${idTask}`;
      await requestDeleteTask(endpoint);
      findTasks(listId);
    } catch (err) {
      console.log(err);
    }
  };

  const newTask = async (describe) => {
    try {
      console.log('nova task=>>',describre)
      const endpoint = '/tasks';
      const createdTask = await requestCreateTask(endpoint, describe, listId);
      if (createdTask.describre === describre) {
        setDescribe('');
      } 
      findTasks(listId);
    } catch (err) {
      console.log(err)
    }
  }

  const updateTask = async (taskId, describe, listId) => {
    try {
      const endpoint = `/tasks/${taskId}`;
      await requestUpdateTask(endpoint, { describe, listId });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if(describre.length > 0) {
      setCreateButton(true);
    } else {
      setCreateButton(false);
    }
  }, [describre]);

  
  useEffect(() => {
    findTasks(listId);
  }, []);


  return (
    <>
      <header>
        <h1>Cria nova tarefa</h1>
        <form>
          <label htmlFor="list-input">
            <input
              value={ describre }
              onChange={ ({ target: { value } }) => setDescribe(value) }
              minLength={ 5 }
              placeholder="Descreva a tarefa"
              type="text"
            />
          </label>
          <button
            type="submit"
            onClick={ () => newTask(describre)  }
            disabled={!createButton}
          >
            Criar Tarefa
          </button>
        </form>
      </header>
      <main>
        <section>
          <h2>{ tasks.length > 0 ? 'Suas Tarefas' : 'Lista ainda não possui tarefas' }</h2>
          <>
            {tasks.map((task) => (
              <div key={task.id}>
                <ComponentTask
                  task={ task }
                  remove={ removeTask }
                  update={ updateTask }
                />
              </div>
            ))}
          </>
        </section>
      </main>
    </>
  );
}