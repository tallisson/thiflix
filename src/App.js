import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={ {background: "#141414"} }>
      <Menu />      

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área"}
      />

      <Carousel 
        style={{ background: `${dadosIniciais.categorias[0].cor}` }}
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        style={{ background: `${dadosIniciais.categorias[1].cor}` }}
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        style={{ background: `${dadosIniciais.categorias[2].cor}` }}
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        style={{ background: `${dadosIniciais.categorias[3].cor}` }}
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        style={{ background: `${dadosIniciais.categorias[4].cor}` }}
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        style={{ background: `${dadosIniciais.categorias[5].cor}` }}
        category={dadosIniciais.categorias[5]}
      />

      <Carousel 
        style={{ background: `${dadosIniciais.categorias[6].cor}` }}
        category={dadosIniciais.categorias[6]}
      />

      <Footer
      />
    </div>
  );
}

export default App;
