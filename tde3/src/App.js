import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faPersonSkiing } from '@fortawesome/free-solid-svg-icons';
import { faSnowman } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div>
      <div className="Topo">
        <div className="TextoInicial">
          <div className='Hotel'>
            <FontAwesomeIcon icon={faPersonSnowboarding} className="IconLogo" />
            <h3 className="H31">Hotel Xis</h3>
          </div>
          <h1 className="H11">AVENTURA NA NEVE</h1>
          <h2 className="H21">aproveite o melhor do inverno!</h2>
          <p className="T1">Venha com a sua família durante a temporada <br />
            de inverno e aproveite para praticar snowboard, <br />
            ski, caminhada na neve e muito mais!</p>
        </div>
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
      <div className='Fim'>
        <div className='ContainerImg2'>
          <img src="https://ns.clubmed.com/aml/Brazil/2023/PHOTOS/EBB23/VISC_L113_068.jpg"
            alt="Alunos escutando instruções do professor de ski"
            className='Img2' />
        </div>
        <h2 className='H23'>Primeira vez?<br />Sem problemas!</h2>
        <div className="ContainerBonus">
          <div className="Aula">
            <FontAwesomeIcon icon={faChalkboardUser} className='IconProf' />
            <p className="T6">Professores disponíveis <br /> para iniciantes.</p>
          </div>
          <div className='Guia'>
            <FontAwesomeIcon icon={faPersonSkiing} className='IconSki' />
            <p className="T7">Guias especializados que garantem<br /> a segurança de todos</p>
          </div>
          <div className='Kids'>
            <FontAwesomeIcon icon={faSnowman} className="IconKids" />
            <p className="T8">Recreadores para cuidar e <br />divertir a criançada.</p>
          </div>
        </div>
      </div>
      <div className='News'>
        <p className='Cadastro'>Cadastre-se na<br /> nossa Newsletter</p>
        <form id="email" className='Formulario'>
          <label for="email">Digite seu email:</label>
          <input type="email" id="email" name="email" />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <footer className='Footer'>
        <h4 className='H44'>VEM CURTIR COM A GENTE!</h4>
        <p className='T9'>© Hotel Xis, 2024 <br />
          Rua Exemplo, 12345, Campo Mourão, PR, Brasil <br />
          CNPJ 12.345.678/0001-99</p>
      </footer>
    </div>
  );
}

export default App;
