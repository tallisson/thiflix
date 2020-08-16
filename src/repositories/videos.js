import config from '../config';

const URL_VIDEOS = (`${config.URL_BASE}/videos`);

function create(video) {  

  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(video)
  })
  .then(async (response) => {
    if(response.ok) {
      const data = await response.json();
      return data;
    } 
    throw new Error('Não foi possível cadastrar os dados');    
  });
}

export default {  
  create,
};