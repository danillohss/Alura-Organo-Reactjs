import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import { useState } from 'react';

function App() {

  const [colaborator, setColaborator] = useState([]);

  const addNewColaborator = (colaborator) => {
    console.log(colaborator);
    setColaborator([...colaborator, colaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form setNewColaborator={colaborator => addNewColaborator(colaborator)} />
    </div>
  );
}

export default App;
