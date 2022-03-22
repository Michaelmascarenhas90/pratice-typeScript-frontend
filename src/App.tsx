import React, { useEffect, useState } from 'react';

import api from './services/api';

import User from './components/User';
interface IUser {
  nome: string;
  email: string;
}


function App() {
  const [values, setValues] = useState<IUser[]>([])
  useEffect(() => {
    const chamada = async () => {
      try {
        const response = await api.get<IUser[]>('/users')
        setValues(response.data)
        
      } catch (error) {
        console.log('ops, algo deu ruim na request') 
      }
    }

    chamada()
  }, [])


  return (
    <div className="App">
      { values.map(value => <User key={value.email} user={value} />) }
    </div>
  );
}

export default App;
