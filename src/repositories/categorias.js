import config from '../config';

const URL_CATEGORIAS = (`${config.URL_BASE}/categorias`);

function getAll() {
  return fetch(URL_CATEGORIAS)
  .then(async (response) => {
    if(response.ok) {
      const data = await response.json();
      return data;
    } 
    throw new Error('Não foi possível retornar os dados');    
  });
}

function getAllWithVideos() {  

  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
  .then(async (response) => {
    if(response.ok) {
      const data = await response.json();
      return data;
    } 
    throw new Error('Não foi possível retornar os dados');    
  });
}

export default {
  getAll,  
  getAllWithVideos,
};