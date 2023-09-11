import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import { useState } from 'react';
import Team from './components/Team/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#D9F7E9',
      secondColor: '#57C278',
    },
    {
      name: 'Front-End',
      primaryColor: '#E8F8FF',
      secondColor: '#82CFFA',
    },
    {
      name: 'Data Sciense',
      primaryColor: '#F0F8E2',
      secondColor: '#A6D157',
    },
    {
      name: 'Devops',
      primaryColor: '#FDE7E8',
      secondColor: '#E06B69',
    },
    {
      name: 'UX e Design',
      primaryColor: '#FAE5F5',
      secondColor: '#D86EBF',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFF5D9',
      secondColor: '#FEBA05',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FFEEDF',
      secondColor: '#FF8A29',
    }
  ]

  const [colaborators, setColaborators] = useState([]);

  const addNewColaborator = (colaborator) => {
    setColaborators([...colaborators, colaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form
        setNewColaborator={colaborator => addNewColaborator(colaborator)}
        teams={teams.map(team => team.name)}
      />
      {teams.map(team =>
        <Team
          name={team.name}
          key={team.name}
          primaryColor={team.primaryColor}
          secondColor={team.secondColor}
          colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}
        />
      )}
    </div>
  );
}

export default App;
