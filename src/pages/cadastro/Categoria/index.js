import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const catInicial = { 
    titulo: '',
    descricao: '',
    cor: '#000000'
  }

  const { categoria, handleChange, clearForm } = useForm(catInicial);
  const [categorias, setCategorias] = useState([]);  

  function saveCategoria() {
    const URL = window.location.hostname.includes('localhost') ? 
      'http://localhost:8080/categorias' :
      'https://dev-thiflix.herokuapp.com/categorias';
    console.log(JSON.stringify(categoria));
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(categoria)
    })
    .then(async (response) => {
      if(response.ok) {
        await console.log(response);
        return;
      }
      throw new Error('Não foi inserir os dados');
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      categoria
    ]);

    saveCategoria();
    clearForm();
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 
      'http://localhost:8080/categorias' :
      'https://dev-thiflix.herokuapp.com/categorias';

    fetch(URL)
    .then(async (response) => {
      if(response.ok) {
        const data = await response.json();
        setCategorias(data);
        return;
      }
      throw new Error('Não foi possível pegar os dados');
    })
  }, [
    categoria.nome
  ]);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoria.titulo.trim()}</h1>

      <form>
        <FormField
          type="input" 
          name="titulo"
          value={categoria.titulo}
          onChange={handleChange}
          label="Título da Categoria"
        />

        <FormField
          type="textarea" 
          name="descricao"
          value={categoria.descricao}
          onChange={handleChange}
          label="Descrição"
        />

        <FormField
          type="color"
          value={categoria.cor}
          name="cor"
          onChange={handleChange}
          label="Cor"
        />

        <div style={{ textAlign: 'right' }}>
          <Button onClick={(e) => {
            handleSubmit(e);
          }}>
            Cadastrar
          </Button>
        </div>
      </form>
      
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria.titulo}${index}`}>
              {categoria.titulo}
            </li>    
          )
        })}
      </ul>

      <div style={ {textAlign: 'center'} }>
      <Link to="/">
        Ir para Home
      </Link>
      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;