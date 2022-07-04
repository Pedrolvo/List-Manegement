import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { requestCreateList, requestDeleteList, requestGetLists } from "../services/Lists";

export default function Lists() {
  const [lists, setLists] = useState([]);
  const [listName, setListName]= useState('');
  const [createButton, setCreateButton] = useState(false);
  const [token, setToken] = useState('');
  const userId = JSON.parse(localStorage.getItem('user')).id;
  

  const findLists = async (id) => {
    const endpoint = `/lists/${id}`;
    try {
      const allUserLists = await requestGetLists(endpoint);
      setLists(allUserLists);
    } catch (err) {
      setLists([]);
      console.log(err);
    }
  };

  const removeList = async (idList) => {
    const updatedLists = lists.filter(({ id }) => id !== idList);
    setLists(updatedLists);

    try {
      const endpoint = `/lists/${idList}`;
      await requestDeleteList(endpoint);
      findLists(userId);
    } catch (err) {
      console.log(err);
    }
  };

  const newList = async () => {
    try {
      const endpoint = '/lists';
      const createdList = await requestCreateList(endpoint, { listName, userId });
      if (createdList.listName === listName) {
        setListName('');
      } 
      findLists(userId);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(listName.length > 0) {
      setCreateButton(true);
    } else {
      setCreateButton(false);
    }
  }, [listName]);

  
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user')) || { token: '' };
    if (token !== '') {
      setToken(token);
    }
    findLists(userId);
  }, []);


  return (
    <>
      <header>
        <h1>Cria nova lista de tarefas</h1>
        <form>
          <label htmlFor="list-input">
            <input
              value={ listName }
              onChange={ ({ target: { value } }) => setListName(value) }
              minLength={ 5 }
              placeholder="Nome para a lista"
              type="text"
            />
          </label>
          <button
            type="submit"
            onClick={ () => newList()  }
            disabled={!createButton}
          >
            Criar Lista
          </button>
        </form>
      </header>
      <main>
        <section>
          <h2>{ lists.length > 0 ? 'Suas Listas' : 'Não possui listas' }</h2>
          <>
            {lists.map((list) => (
              <div key={list.id}>
                <>
                  <div>
                    <input
                      value={ list.listName }
                      readOnly
                      type="text"
                    />
                  </div>
                  <div>
                    <Link to={`/list/${list.id}`}>
                      Ver lista
                    </Link>
                    <button
                      onClick={ () => removeList(list.id) }
                    >
                      Descartar
                    </button>
                  </div>
                </>
              </div>
            ))}
          </>
        </section>
      </main>
    </>
  );
}
