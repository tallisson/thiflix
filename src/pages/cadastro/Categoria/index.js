import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import config from '../../../config';

function CadastroCategoria() {
  const catInicial = { 
    titulo: '',
    descricao: '',
    cor: '#000000'
  }

  const { data, handleChange, clearForm } = useForm(catInicial);
  const [categorias, setCategorias] = useState([]);  

  function validaCategoria() {
    const response = {
      ok: true,
      msg: []
    };
    if(!(data.titulo !== undefined && data.titulo.length > 0)) {
      response.ok = false;
      response.msg.push('Cadastrar título');
    }
    if(!(data.descricao !== undefined && data.descricao.length > 0)) {
      response.ok = false;
      response.msg.push('Cadastrar descrição');
    }
    if(!(data.cor !== undefined && data.cor.length > 0 && data.cor.indexOf('#') !== -1)) {
      response.ok = false;
      response.msg.push('Cadastrar cor');
    }
    return response;
  }

  function saveCategoria() {
    const URL = window.location.hostname.includes('localhost') ? 
      'http://localhost:8080/categorias' :
      'https://dev-thiflix.herokuapp.com/categorias';

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
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
      data
    ]);
    saveCategoria();
    clearForm();
  }

  useEffect(() => {
    const URL = `${config.URL_BASE}/categorias`;

    fetch(URL)
    .then(async (response) => {
      if(response.ok) {
        const dataResponse = await response.json();
        setCategorias(dataResponse);
        return;
      }
      throw new Error('Não foi possível pegar os dados');
    })
  }, [
    data.nome
  ]);

  return (
    <PageDefault>
      <h1>Cadastro de data: {data.titulo.trim()}</h1>

      <form>
        <FormField
          type="input" 
          name="titulo"
          value={data.titulo}
          onChange={handleChange}
          label="Título da Categoria"
        />

        <FormField
          type="textarea" 
          name="descricao"
          value={data.descricao}
          onChange={handleChange}
          label="Descrição"
        />

        <FormField
          type="color"
          value={data.cor}
          name="cor"
          onChange={handleChange}
          label="Cor"
        />

        <div style={{ textAlign: 'right' }}>
          <Button onClick={(e) => {
            const response = validaCategoria();
            if(response.ok === true) {           
              handleSubmit(e);
              return;
            }
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
        {categorias.map((data, index) => {
          if(data.titulo !== undefined && data.titulo.length > 0) {
            return (
              <li key={`${data.titulo}${index}`}>
                {data.titulo}
              </li>    
            );
          } else {
            return (
              <>
              </>
            );
          }
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