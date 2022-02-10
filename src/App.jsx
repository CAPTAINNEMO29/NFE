import React, { Fragment } from "react";
import "./App.css";
import procesador from './assets/procesador.png';
import blockchain from './assets/blockchain.png';
import esports from './assets/esports.png';
import autor from './assets/autor.png'
import Header from "./components/Header";
import Sections from "./components/Sections.jsx";
import LatestNews from "./components/LatestNews";
import Footer from './components/Footer'

const App = () => {

  const articulos = [
    {
      key: 0,
      titulo: "Technology",
      texto: "See the news about Technology",
      img: procesador,
      profile: autor
    },
    {
      key: 1,
      titulo: "Blockchain",
      texto: "See the news about Blockchain",
      img: blockchain,
      profile: autor
    },
    {
      key: 2,
      titulo: "E-Sports",
      texto: "See the news about E-Sport world",
      img: esports,
      profile: autor
    },
  ];

  const articulosNuevos = 
    {
      key:1,
      img: procesador,
      profile: autor
    }

  return (
    <Fragment>
      <Header />
      <div className="flex flex-row justify-center flex-wrap mt-8 ">
      {articulos.map((info) => (
        <Sections key={info.key} info={info} />
      ))}
      </div>
        <LatestNews news={articulosNuevos} />
        <Footer />
    </Fragment>
  );
};

export default App;
