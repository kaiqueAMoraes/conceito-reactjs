import React, {useEffect, useState} from "react";

//use effect, useState

import "./styles.css";
import RemoveButton from "./components/Remove-button-component/RemoveButton";
import api from "./services/api";

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    api.get('repositories').then(
      res => {
        setRepositories(res.data)
      }
    )
  }, [])


  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);

    const _REPO = repositories.filter(
      repository => repository.id !== id
    )
    setRepositories(_REPO);
  }

  async function handleAddRepository() {
    // TODO
    const project =  {
      id: "123",
      url: "https://github.com/josepholiveira",
      title: "Desafio ReactJS",
      techs: ["React", "Node.js"],
    }
    const response = await api.post('/repositories', project);
    setRepositories([...repositories, response.data])
  }

  return (
    <>
      <button onClick={handleAddRepository}>Adicionar</button>
    <div>
      <ul data-testid="repository-list">
        {
          repositories.map(elm => {
            return (
            <li key={elm.id}>{elm.title}
              <button 
                onClick={() => handleRemoveRepository(elm.id)}>
                Remover
              </button>
            </li>
            )
          })
        }
      </ul>
    </div>
    </>
  );
}

export default App;
