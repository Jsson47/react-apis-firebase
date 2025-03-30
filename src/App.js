import './App.css';
import React from 'react';
import { Usuario } from './components/Usuario';

function App() {

  
  return (
    <div>
      <Usuario nombre = "Jasson", edad={27}, nacionalidad="Nicaragua"/>
    </div>
  );
}

export default App;
