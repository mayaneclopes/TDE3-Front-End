
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <div className="Topo">
        <div className="TextoInicial">
          <h3 className="H31">❄️ Hotel Xis</h3>
          <h1 className="H11">AVENTURA NA NEVE</h1>
          <h2 className="H21">aproveite o melhor do inverno!</h2>
          <p className="T1">Venha com a sua família durante a temporada <br />
            de inverno e aproveite para praticar snowboard, <br />
            ski, caminhada na neve e muito mais!</p>
        </div>
        <button className="Reservas">RESERVAS</button>
        <div className="ContainerImg1">
          <img src="https://standingcloud.com/wp-content/uploads/2019/08/images1026-5d54351aa979a.jpg"
            alt="Família unida praticando esportes da neve"
            className="Img1" />
        </div>
      </div>
      <div className="Meio">
        <h2 className="H22">Hopedagem a partir de</h2>
        <h3 className="H32">R$200 por quarto</h3>
        <p className="T2">Todas as hospedagens incluem café da manhã, <br />
          opções para inclusão de almoço de janta devem ser solicitadas
          <br />no momento da reserva.</p>
        <button className="Reservas">RESERVE JÁ</button>
        <div className="ContainerOpc">
          <div className="Cafe">
            <FontAwesomeIcon icon={faCoffee} className="IconCafe" />
            <p className="T3">Café da manhã <br /> com mais de 50 opções</p>
          </div>
          <div className='Quartos'>
            <FontAwesomeIcon icon={faBed} className='IconQuarto' />
            <p className="T4">Quartos equipados com<br /> sistema de calefação</p>
          </div>
          <div className='Wifi'>
            <FontAwesomeIcon icon={faWifi} className='IconWifi' />
            <p className="T5">Wifi gratuito <br />em todo o hotel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
