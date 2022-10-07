import { Context } from '../../context'
import { Routes, Route } from 'react-router-dom'
import Nav from '../Nav';
import ConfigurationsPage from '../../pages/ConfigurationsPage';
import TeamsPage from '../../pages/TeamsPage';
import { useState} from 'react'

function App() {
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([])

  const addTeam = (value) => setTeams([...teams, {value, label: value}]);
  
  const addUser = (name, team) => {
    setUsers([...users, {
      id: Date.now(),
      name,
      team
    }])

  }
  return (
    <div>
      <Context.Provider value={{addTeam, teams, addUser, users}}>
      <Nav/>
        <Routes>
          <Route path='/configurations' element={<ConfigurationsPage/>}/>
          <Route path='/teams' element={<TeamsPage/>}/>
        </Routes>
      </Context.Provider>
      
    </div>
  );
}

export default App;
