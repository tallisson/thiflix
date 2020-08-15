import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categorias from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categorias.getAllWithVideos()
    .then((categoriasComVideos) => {
      setDadosIniciais(categoriasComVideos);
    })
    .catch((err) => {
      console.log(err.msg);
    });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      { dadosIniciais.length >= 1 && (
        <>
          {dadosIniciais.map((categorias, index) => {
            if(index === 0) {
              return (
                <>
                  <BannerMain 
                    videoTitle={dadosIniciais[index].videos[0].titulo}
                    url={dadosIniciais[index].videos[0].url}
                    videoDescription={dadosIniciais[index].descricao}
                  />

                  <Carousel 
                    style={{ background: `${dadosIniciais[0].cor}` }}
                    ignoreFirstVideo
                    category={dadosIniciais[0]}
                  />
                </>
              )
            } else {
              return (
                <Carousel 
                  style={{ background: `${dadosIniciais[index].cor}` }}
                  category={dadosIniciais[index]}
                />
              )
            }
          })}          
        </>
      )}
    </PageDefault> 
  );
}

export default Home;