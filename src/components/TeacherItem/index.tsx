import React from 'react';

import whatsaapIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/43934564?s=460&u=7faea7c408b7d6d8a891507539c1843198904dae&v=4" alt="avatar" />
        <div>
          <strong>Marcos Ribeiro</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        tem um enorme impacto sobre a tecnologia e a nossa sociedade,
        pois seus estudos desempenham um papel fundamental no desenvolvimento de todos os ramos das ciências.
          <br /> <br />
        Afinal de contas, é por meio do estudo da matéria que podemos entender as propriedades e as possíveis transformações que cada substância pode sofrer
        para, então, usar esse conhecimento em nosso benefício.
          </p>
      <footer>
        <p>
          Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsaapIcon} alt="whatsapp" />
          Entrar em contato
          </button>
      </footer>
    </article>
  );
}

export default TeacherItem;