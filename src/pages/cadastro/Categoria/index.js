import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo() {
  const catInicial = { 
    nome: '',
    descricao: '',
    cor: '#000000'
  }
  const [categorias, setCategorias] = useState(['Teste']);
  const [categoria, setCategoria] = useState(catInicial);

  function setValue(key, value) {
    setCategoria({
      ...categoria,
      [key]: value
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoria.nome}!</h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          categoria
        ]);
        setCategoria(catInicial)
      }}>
        <FormField
          type="text" 
          name="nome"
          value={categoria.nome}
          onChange={handleChange}
          label="Nome da Categoria"
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
          <Button>
            Cadastrar
          </Button>
        </div>
      </form>

      <ul>
        {/*categorias.map((categoria, index) => {
          //console.log(categoria);
          return (            
            <li key={`${categoria.nome}${index}`}>
              {categoria.nome || 'Sem Nome'}
            </li>    
          )
        })*/}
      </ul>

      <div style={ {textAlign: 'center'} }>
      <Link to="/">
        Ir para Home
      </Link>
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;