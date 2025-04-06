import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext'; // 👈 importa o provider

import Intro from './pages/intro';
import Cadastro from './pages/CadastroForm';
import Paciente from './pages/paciente';
import PainelMedico from './pages/PainelMedico';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/paciente" element={<Paciente />} />
          <Route path="/painel" element={<PainelMedico />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
