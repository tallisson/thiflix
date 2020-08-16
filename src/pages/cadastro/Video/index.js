import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory(); 
  const [categorias, setCategorias]  = useState([]);

  const { handleChange, data } = useForm({
    titulo: '',
    url: '',
    categoria: ''
  });
  
  useEffect(() => {
    categoriaRepository
      .getAll()
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo!</h1>

      <form>
        <FormField
          type="input" 
          name="titulo"
          value={data.titulo}
          onChange={handleChange}
          label="Título do Vídeo"
        />

        <FormField
          type="input" 
          name="url"
          value={data.url}
          onChange={handleChange}
          label="URL"
        />

        <FormField
          type="input"
          value={data.categoria}
          name="categoria"
          onChange={handleChange}
          label="Categoria"
          suggestions={categorias.map((cat) => {
            return cat.titulo;
          })}
        />

        <div style={{ textAlign: 'right' }}>
          <Button onClick={(e) => {
            const categoriaEscolhida = categorias.find((cat) => {
              return cat.titulo === data.categoria;
            });
            
            data.categoriaId = categoriaEscolhida.id;

            videoRepository.create(data)
            .then(() => {
              history.push('/');
            });
          }}>
            Cadastrar
          </Button>
        </div>
      </form>
      
      {/*categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )*/}

      <ul>
        {/*categorias.map((categoria, index) => {
          if(categoria.titulo !== undefined && categoria.titulo.length > 0) {
            return (
              <li key={`${categoria.titulo}${index}`}>
                {categoria.titulo}
              </li>    
            );
          } else {
            return (
              <>
              </>
            );
          }
        })*/}
      </ul>
        
      <div style={ {textAlign: 'center'} }>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;