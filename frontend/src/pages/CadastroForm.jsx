import React, { useState } from 'react';
import axios from 'axios';
import '../pages/CadastroForm.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';


function CadastroForm() {
  const [form, setForm] = useState({
    nome: '',
    ncc: '',
    consultorio: '',
    telefone: '',
    email: ''
  });

  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/cadastro', form);
      setUser({ nome: form.nome });
      navigate('/painel');
    } catch (err) {
      setUser({ nome: form.nome }); // opcional: pode mostrar erro ou redirecionar igual
      navigate('/painel');
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Doutor(a)</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome Completo:</label>
        <input type="text" name="nome" required onChange={handleChange} />

        <label>N° Conselho de Classe:</label>
        <input type="text" name="ncc" required onChange={handleChange} />

        <label>Endereço do Consultório:</label>
        <input type="text" name="consultorio" required onChange={handleChange} />

        <label>Telefone:</label>
        <input type="text" name="telefone" required onChange={handleChange} />

        <label>E-mail:</label>
        <input type="email" name="email" required onChange={handleChange} />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroForm;
