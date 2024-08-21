import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login.jsx';
import Home from './componentes/Home.jsx';
import GerenciarUsuarios from './componentes/GerenciarUsuarios.jsx'
import GerenciarTitulos from './componentes/GerenciarTitulos.jsx';
import GerenciarGeneros from './componentes/GerenciarGeneros.jsx';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/GerenciarUsuarios" element={<GerenciarUsuarios />} />
          <Route path="/GerenciarTitulos" element={<GerenciarTitulos />} />
          <Route path="/GerenciarGeneros" element={<GerenciarGeneros />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
