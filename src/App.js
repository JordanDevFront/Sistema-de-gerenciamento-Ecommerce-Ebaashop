import './App.css';
import React from 'react';
import RouterComponent from './routes';
import { HeaderLogado } from './componentes/Header';

const App = () => {
  return (
    <div>
      <HeaderLogado/>
      <RouterComponent />
    </div>
  );
};

export default App;

